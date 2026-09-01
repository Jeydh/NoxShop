<template>
  <article
    class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.055] hover:shadow-xl hover:shadow-violet-950/20"
  >
    <!-- Image -->
    <NuxtLink
      :to="`/products/${product.slug}`"
      class="block"
    >
      <div class="relative aspect-square overflow-hidden bg-slate-800">
        <img
          :src="product.image"
          :alt="product.name"
          loading="lazy"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        >

        <div
          v-if="product.stock <= 0"
          class="absolute inset-0 flex items-center justify-center bg-slate-950/65 backdrop-blur-[2px]"
        >
          <span
            class="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-black text-red-300"
          >
            Indisponible
          </span>
        </div>

        <span
          v-if="product.featured && product.stock > 0"
          class="absolute left-3 top-3 rounded-full bg-violet-500 px-2.5 py-1 text-[10px] font-black text-white shadow-lg shadow-violet-500/30"
        >
          POPULAIRE
        </span>
      </div>
    </NuxtLink>

    <!-- Informations -->
    <div class="p-3">
      <NuxtLink
        :to="`/products/${product.slug}`"
        class="block"
      >
        <h3 class="line-clamp-2 min-h-10 text-sm font-bold text-white transition group-hover:text-violet-300">
          {{ product.name }}
        </h3>

        <p class="mt-1 text-base font-black text-white">
          {{ formatPrice(product.price) }}
        </p>
      </NuxtLink>

      <!-- Ajout panier -->
      <button
        type="button"
        :disabled="product.stock <= 0 || isAdding"
        class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-xs font-black text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/10"
        @click="addToCart"
      >
        <span v-if="isAdding">
          ✓ Ajouté
        </span>

        <span v-else-if="product.stock <= 0">
          Rupture
        </span>

        <span v-else>
          + Ajouter
        </span>
      </button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useCartStore } from '~/stores/useCart'
import { useCurrency } from '~/composables/useCurrency'

interface Product {
  id: string
  name: string
  slug: string
  image: string
  price: number
  stock: number
  featured?: boolean
}

const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()
const { formatPrice } = useCurrency()

const isAdding = ref(false)

function addToCart() {
  if (props.product.stock <= 0 || isAdding.value) {
    return
  }

  const added = cart.add(props.product.id)

  if (!added) {
    return
  }

  isAdding.value = true

  window.setTimeout(() => {
    isAdding.value = false
  }, 650)
}
</script>