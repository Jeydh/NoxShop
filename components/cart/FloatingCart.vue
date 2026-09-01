<template>
  <div v-if="cart.count > 0"
    ref="container"
    class="fixed inset-x-3 bottom-3 z-50 sm:left-auto sm:right-5 sm:w-[400px]">
    <!-- Mini-panier -->
    <Transition enter-active-class="transition duration-250 ease-out"
      enter-from-class="translate-y-4 scale-95 opacity-0" enter-to-class="translate-y-0 scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in" leave-from-class="translate-y-0 scale-100 opacity-100"
      leave-to-class="translate-y-4 scale-95 opacity-0">
      <div v-if="isOpen"
        class="absolute bottom-[calc(100%+0.75rem)] left-0 right-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/50 backdrop-blur-2xl">
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <h2 class="font-black text-white">
              Votre panier
            </h2>

            <p class="mt-0.5 text-xs text-slate-500">
              {{ cart.count }}
              {{ cart.count > 1 ? 'articles' : 'article' }}
            </p>
          </div>

          <button type="button" aria-label="Fermer le panier"
            class="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-slate-400 transition hover:bg-white/10 hover:text-white"
            @click="isOpen = false">
            ✕
          </button>
        </div>

        <!-- Produits -->
        <div class="max-h-[45vh] overflow-y-auto p-3">
          <TransitionGroup name="cart-item" tag="div" class="space-y-2">
            <div v-for="item in cartLines" :key="item.product.id" class="flex gap-3 rounded-2xl bg-white/[0.04] p-3">
              <!-- Image -->
              <div class="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-slate-800">
                <img :src="item.product.image" :alt="item.product.name" class="h-full w-full object-cover">
              </div>

              <!-- Infos -->
              <div class="min-w-0 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <h3 class="line-clamp-2 text-sm font-bold text-white">
                    {{ item.product.name }}
                  </h3>

                  <button type="button" class="shrink-0 text-xs text-slate-600 transition hover:text-red-400"
                    aria-label="Supprimer le produit" @click="removeCompletely(item.product.id)">
                    ✕
                  </button>
                </div>

                <p class="mt-1 text-xs text-slate-500">
                  {{ formatPrice(item.product.price) }} / unité
                </p>

                <div class="mt-2 flex items-center justify-between">
                  <!-- Quantité -->
                  <div class="flex items-center rounded-lg border border-white/10 bg-white/[0.03]">
                    <button type="button"
                      class="flex h-7 w-7 items-center justify-center text-slate-400 transition hover:text-white"
                      @click="cart.remove(item.product.id)">
                      −
                    </button>

                    <span class="min-w-7 text-center text-xs font-black text-white">
                      {{ item.quantity }}
                    </span>

                    <button type="button"
                      class="flex h-7 w-7 items-center justify-center text-slate-400 transition hover:text-white disabled:opacity-30"
                      :disabled="item.quantity >= item.product.stock" @click="cart.add(item.product.id)">
                      +
                    </button>
                  </div>

                  <!-- Sous-total -->
                  <span class="text-sm font-black text-white">
                    {{
                      formatPrice(
                        item.product.price * item.quantity
                      )
                    }}
                  </span>
                </div>
              </div>
            </div>
          </TransitionGroup>
        </div>

        <!-- Footer -->
        <div class="border-t border-white/10 bg-white/[0.02] p-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-slate-400">
              Total
            </span>

            <span class="text-xl font-black text-white">
              {{ formatPrice(cart.subtotal) }}
            </span>
          </div>

          <div class="mt-3 grid grid-cols-2 gap-2">
            <NuxtLink to="/cart"
              class="rounded-xl border border-white/10 px-4 py-3 text-center text-xs font-bold text-white transition hover:bg-white/5"
              @click="isOpen = false">
              Voir le panier
            </NuxtLink>

            <NuxtLink to="/checkout"
              class="rounded-xl bg-violet-500 px-4 py-3 text-center text-xs font-black text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400 active:scale-[0.98]"
              @click="isOpen = false">
              Commander →
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Bouton flottant -->
    <button type="button"
      class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:border-violet-400/30 hover:bg-slate-900 active:scale-[0.98]"
      @click="isOpen = !isOpen">
      <!-- Icône -->
      <div
        class="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-xl transition"
        :class="cart.lastAddedId ? 'scale-110 bg-violet-500/30' : ''">
        🛒

        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="scale-50 opacity-0"
          enter-to-class="scale-100 opacity-100">
          <span :key="cart.count"
            class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-black text-white">
            {{ cart.count }}
          </span>
        </Transition>
      </div>

      <!-- Résumé -->
      <div class="min-w-0 flex-1 text-left">
        <p class="text-xs font-medium text-slate-500">
          {{ isOpen ? 'Fermer le panier' : 'Votre panier' }}
        </p>

        <p class="truncate text-sm font-bold text-white">
          {{ cart.count }}
          {{ cart.count > 1 ? 'articles' : 'article' }}
        </p>
      </div>

      <!-- Total -->
      <div class="text-right">
        <p class="text-sm font-black text-white">
          {{ formatPrice(cart.subtotal) }}
        </p>

        <p class="text-[10px] font-bold text-violet-400">
          {{ isOpen ? 'Fermer ↑' : 'Afficher ↓' }}
        </p>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import { useCartStore } from '~/stores/useCart'
import { useCatalogStore } from '~/stores/useCatalog'
import { useCurrency } from '~/composables/useCurrency'

const cart = useCartStore()
const catalog = useCatalogStore()

const { formatPrice } = useCurrency()

const isOpen = ref(false)
const container = ref<HTMLElement | null>(null)

const cartLines = computed(() => {
  return Object.entries(cart.items)
    .map(([id, quantity]) => ({
      product: catalog.products.find(
        (product) => product.id === id
      ),
      quantity
    }))
    .filter(
      (
        line
      ): line is {
        product: NonNullable<typeof line.product>
        quantity: number
      } => Boolean(line.product)
    )
})

function removeCompletely(productId: string) {
  while (cart.items[productId] > 0) {
    cart.remove(productId)
  }
}

function handleClickOutside(event: MouseEvent) {
  if (!container.value) {
    return
  }

  const target = event.target

  if (
    target instanceof Node &&
    !container.value.contains(target)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener(
    'click',
    handleClickOutside
  )
})

onBeforeUnmount(() => {
  document.removeEventListener(
    'click',
    handleClickOutside
  )
})
</script>

<style scoped>
.cart-item-move,
.cart-item-enter-active,
.cart-item-leave-active {
  transition:
    transform 250ms ease,
    opacity 200ms ease;
}

.cart-item-enter-from,
.cart-item-leave-to {
  opacity: 0;
  transform: translateX(12px) scale(0.97);
}

.cart-item-leave-active {
  position: absolute;
  width: 100%;
}
</style>