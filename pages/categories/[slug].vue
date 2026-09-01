<template>
  <div
    v-if="product"
    class="mx-auto max-w-6xl px-4 py-8 pb-28 sm:px-6 lg:px-8 lg:py-14"
  >
    <NuxtLink
      to="/products"
      class="text-sm font-medium text-slate-400 transition hover:text-white"
    >
      ← Retour aux produits
    </NuxtLink>

    <div class="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
      <!-- Image -->
      <div
        class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
      >
        <div class="aspect-square">
          <img
            :src="product.image"
            :alt="product.name"
            class="h-full w-full object-cover"
          >
        </div>
      </div>

      <!-- Infos -->
      <div>
        <span
          v-if="product.featured"
          class="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-400"
        >
          Produit populaire
        </span>

        <h1 class="mt-4 text-3xl font-black text-white sm:text-5xl">
          {{ product.name }}
        </h1>

        <p class="mt-4 text-3xl font-black text-white">
          {{ formatPrice(product.price) }}
        </p>

        <p class="mt-6 leading-7 text-slate-400">
          {{ product.description }}
        </p>

        <div
          v-if="product.stock > 0"
          class="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-400"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-400" />
          Disponible en magasin
        </div>

        <div
          v-else
          class="mt-6 rounded-2xl border border-red-400/10 bg-red-400/5 p-4 text-sm font-bold text-red-300"
        >
          Ce produit est actuellement indisponible.
        </div>

        <button
          type="button"
          :disabled="product.stock <= 0"
          class="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          @click="addToCart"
        >
          {{ product.stock > 0 ? 'Ajouter au panier' : 'Indisponible' }}
        </button>
      </div>
    </div>
  </div>

  <div
    v-else
    class="mx-auto max-w-3xl px-4 py-20 text-center"
  >
    <h1 class="text-2xl font-black text-white">
      Produit introuvable
    </h1>

    <NuxtLink
      to="/products"
      class="mt-5 inline-block text-violet-400"
    >
      Retour au catalogue
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useRoute } from 'vue-router'

import { useCatalogStore } from '~/stores/useCatalog'
import { useCartStore } from '~/stores/useCart'
import { useCurrency } from '~/composables/useCurrency'

const route = useRoute()

const catalog = useCatalogStore()
const cart = useCartStore()

const { formatPrice } = useCurrency()

const product = computed(() => {
  return catalog.products.find(
    (item) => item.slug === route.params.slug
  )
})

function addToCart() {
  if (!product.value) {
    return
  }

  cart.add(product.value.id)
}

useSeoMeta({
  title: () => product.value
    ? `${product.value.name} — Nox`
    : 'Produit introuvable — Nox',

  description: () => product.value?.description ?? ''
})
</script>