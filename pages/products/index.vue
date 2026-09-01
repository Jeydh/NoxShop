<template>
  <div class="mx-auto max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8">
    <!-- Header -->
    <header>
      <p class="text-sm font-bold uppercase tracking-wider text-violet-400">
        Catalogue
      </p>

      <div class="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 class="text-3xl font-black text-white sm:text-4xl">
            Tous les produits
          </h1>

          <p class="mt-2 text-sm text-slate-400">
            {{ filteredProducts.length }}
            {{ filteredProducts.length > 1 ? 'produits' : 'produit' }}
          </p>
        </div>
      </div>
    </header>

    <!-- Recherche -->
    <div class="mt-8">
      <label
        for="product-search"
        class="sr-only"
      >
        Rechercher un produit
      </label>

      <div class="relative">
        <span
          class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-500"
        >
          🔎
        </span>

        <input
          id="product-search"
          v-model="search"
          type="search"
          placeholder="Rechercher un produit..."
          class="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/50 focus:bg-white/[0.06]"
        >

        <button
          v-if="search"
          type="button"
          class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
          @click="search = ''"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Catégories -->
    <div class="mt-5 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
      <div class="flex min-w-max gap-2">
        <button
          v-for="category in categories"
          :key="category.id"
          type="button"
          :class="[
            'rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200',
            selectedCategory === category.id
              ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20 scale-[1.02]'
              : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white'
          ]"
          @click="selectCategory(category.id)"
        >
          {{ category.icon }}
          {{ category.name }}
        </button>
      </div>
    </div>

    <!-- Filtres -->
    <div class="mt-6 flex flex-wrap items-center justify-between gap-3">
      <label class="flex items-center gap-2 text-sm text-slate-400">
        <input
          v-model="showAvailableOnly"
          type="checkbox"
          class="h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-500"
        >

        Disponibles uniquement
      </label>

      <select
        v-model="sort"
        class="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none focus:border-violet-500/50"
      >
        <option value="featured">
          Pertinence
        </option>

        <option value="price-asc">
          Prix croissant
        </option>

        <option value="price-desc">
          Prix décroissant
        </option>

        <option value="name">
          Nom
        </option>
      </select>
    </div>

    <!-- Produits -->
    <TransitionGroup
      name="products"
      tag="div"
      class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </TransitionGroup>

    <!-- Aucun résultat -->
    <div
      v-if="filteredProducts.length === 0"
      class="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center"
    >
      <div class="text-4xl">
        🔎
      </div>

      <h2 class="mt-4 text-xl font-black text-white">
        Aucun produit trouvé
      </h2>

      <p class="mx-auto mt-2 max-w-sm text-sm text-slate-400">
        Essayez une autre recherche ou sélectionnez une autre catégorie.
      </p>

      <button
        type="button"
        class="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
        @click="resetFilters"
      >
        Réinitialiser les filtres
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useCatalogStore } from '~/stores/useCatalog'
const route = useRoute()
const router = useRouter()

const catalog = useCatalogStore()

const search = ref(
  typeof route.query.q === 'string'
    ? route.query.q
    : ''
)

const selectedCategory = ref(
  typeof route.query.category === 'string'
    ? route.query.category
    : 'all'
)

const showAvailableOnly = ref(false)

const sort = ref<'featured' | 'price-asc' | 'price-desc' | 'name'>(
  'featured'
)

const categories = [
  {
    id: 'all',
    name: 'Tout',
    icon: '✨'
  },
  {
    id: 'drinks',
    name: 'Boissons',
    icon: '🥤'
  },
  {
    id: 'snacking',
    name: 'Snacking',
    icon: '🍿'
  },
  {
    id: 'essential',
    name: 'Nécessaire',
    icon: '🧰'
  },
  {
    id: 'aperitif',
    name: 'Apéro',
    icon: '🥜'
  },
  {
    id: 'grocery',
    name: 'Épicerie',
    icon: '🛒'
  }
]

const filteredProducts = computed(() => {
  const query = search.value.trim().toLowerCase()

  const result = catalog.products.filter((product) => {
    const matchesCategory =
      selectedCategory.value === 'all' ||
      product.category === selectedCategory.value

    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query)

    const matchesAvailability =
      !showAvailableOnly.value ||
      product.stock > 0

    return (
      matchesCategory &&
      matchesSearch &&
      matchesAvailability
    )
  })

  return [...result].sort((a, b) => {
    switch (sort.value) {
      case 'price-asc':
        return a.price - b.price

      case 'price-desc':
        return b.price - a.price

      case 'name':
        return a.name.localeCompare(b.name)

      case 'featured':
      default:
        return Number(b.featured) - Number(a.featured)
    }
  }).map((product) => ({
    ...product,
    slug: product.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }))
})

function selectCategory(category: string) {
  selectedCategory.value = category
}

function resetFilters() {
  search.value = ''
  selectedCategory.value = 'all'
  showAvailableOnly.value = false
  sort.value = 'featured'
}

watch(
  [search, selectedCategory],
  () => {
    router.replace({
      query: {
        ...(search.value
          ? { q: search.value }
          : {}),
        ...(selectedCategory.value !== 'all'
          ? { category: selectedCategory.value }
          : {})
      }
    })
  },
  {
    deep: true
  }
)
</script>

<style scoped>
.products-move,
.products-enter-active,
.products-leave-active {
  transition:
    transform 300ms ease,
    opacity 250ms ease;
}

.products-enter-from,
.products-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

.products-leave-active {
  position: absolute;
}
</style>