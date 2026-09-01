<template>
  <div class="mx-auto max-w-5xl px-4 py-8 pb-20 sm:px-6 lg:px-8">
    <NuxtLink
      to="/products"
      class="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
    >
      ← Continuer mes achats
    </NuxtLink>

    <div class="mt-6">
      <p class="text-sm font-bold uppercase tracking-wider text-violet-400">
        Commande
      </p>

      <h1 class="mt-1 text-3xl font-black text-white sm:text-4xl">
        Votre panier
      </h1>
    </div>

    <!-- Panier vide -->
    <div
      v-if="cartLines.length === 0"
      class="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center"
    >
      <div class="text-5xl">
        🛒
      </div>

      <h2 class="mt-5 text-xl font-black text-white">
        Votre panier est vide
      </h2>

      <p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400">
        Ajoutez quelques produits et votre commande apparaîtra ici.
      </p>

      <NuxtLink
        to="/products"
        class="mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
      >
        Voir les produits
      </NuxtLink>
    </div>

    <!-- Panier -->
    <div
      v-else
      class="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]"
    >
      <!-- Produits -->
      <section class="space-y-3">
        <div
          class="space-y-3"
        >
          <article
            v-for="item in cartLines"
            :key="item.product.id"
            class="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:gap-4 sm:p-4"
          >
            <!-- Image -->
            <NuxtLink
              :to="`/products/${item.product.slug}`"
              class="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-28 sm:w-28"
            >
              <img
                :src="item.product.image"
                :alt="item.product.name"
                class="h-full w-full object-cover transition duration-300 hover:scale-105"
              >
            </NuxtLink>

            <!-- Informations -->
            <div class="min-w-0 flex-1">
              <div class="flex items-start justify-between gap-3">
                <div class="min-w-0">
                  <NuxtLink
                    :to="`/products/${item.product.slug}`"
                    class="line-clamp-2 text-sm font-bold text-white transition hover:text-violet-300 sm:text-base"
                  >
                    {{ item.product.name }}
                  </NuxtLink>

                  <p class="mt-1 text-xs text-slate-500">
                    {{ formatPrice(item.product.price) }} / unité
                  </p>
                </div>

                <button
                  type="button"
                  class="shrink-0 text-xs text-slate-600 transition hover:text-red-400"
                  aria-label="Supprimer le produit"
                  @click="cart.removeCompletely(item.product.id)"
                >
                  ✕
                </button>
              </div>

              <div class="mt-4 flex items-center justify-between gap-3">
                <!-- Quantité -->
                <div
                  class="flex items-center rounded-xl border border-white/10 bg-white/[0.03]"
                >
                  <button
                    type="button"
                    class="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:text-white"
                    @click="cart.remove(item.product.id)"
                  >
                    −
                  </button>

                  <span
                    class="min-w-8 text-center text-sm font-black text-white"
                  >
                    {{ item.quantity }}
                  </span>

                  <button
                    type="button"
                    class="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                    :disabled="item.quantity >= item.product.stock"
                    @click="cart.add(item.product.id)"
                  >
                    +
                  </button>
                </div>

                <!-- Sous-total -->
                <strong class="text-sm font-black text-white sm:text-base">
                  {{
                    formatPrice(
                      item.product.price * item.quantity
                    )
                  }}
                </strong>
              </div>
            </div>
          </article>
        </div>

        <!-- Vider -->
        <button
          type="button"
          class="text-xs font-bold text-slate-600 transition hover:text-red-400"
          @click="cart.clear()"
        >
          Vider le panier
        </button>
      </section>

      <!-- Résumé -->
      <aside
        class="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-5 lg:sticky lg:top-24"
      >
        <h2 class="font-black text-white">
          Récapitulatif
        </h2>

        <div class="mt-5 space-y-3 text-sm">
          <div class="flex justify-between gap-4 text-slate-400">
            <span>
              {{ cart.count }}
              {{ cart.count > 1 ? 'articles' : 'article' }}
            </span>

            <span class="text-white">
              {{ formatPrice(cart.subtotal) }}
            </span>
          </div>

          <div class="flex justify-between gap-4 text-slate-400">
            <span>
              Retrait en magasin
            </span>

            <span class="font-bold text-emerald-400">
              Gratuit
            </span>
          </div>
        </div>

        <div class="my-5 h-px bg-white/10" />

        <div class="flex items-end justify-between gap-4">
          <span class="text-sm font-bold text-slate-400">
            Total
          </span>

          <span class="text-2xl font-black text-white">
            {{ formatPrice(cart.subtotal) }}
          </span>
        </div>

        <NuxtLink
          to="/checkout"
          class="mt-6 block rounded-2xl bg-violet-500 px-5 py-4 text-center text-sm font-black text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400 hover:scale-[1.01] active:scale-[0.98]"
        >
          Choisir le retrait →
        </NuxtLink>

        <p class="mt-3 text-center text-[11px] leading-5 text-slate-600">
          Votre commande sera préparée avant votre arrivée.
        </p>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useCartStore } from '~/stores/useCart'
import { useCatalogStore } from '~/stores/useCatalog'
import { useCurrency } from '~/composables/useCurrency'

const cart = useCartStore()
const catalog = useCatalogStore()

const { formatPrice } = useCurrency()

const cartLines = computed(() => {
  return Object.entries(cart.items)
    .map(([id, quantity]) => {
      const product = catalog.products.find(
        (item) => item.id === id
      )

      if (!product) {
        return null
      }

      return {
        product,
        quantity
      }
    })
    .filter(
      (
        item
      ): item is {
        product: NonNullable<typeof item>['product']
        quantity: number
      } => item !== null
    )
})
</script>