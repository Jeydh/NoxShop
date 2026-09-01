<template>
  <div v-if="product" class="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-16">
    <NuxtLink to="/" class="text-sm text-slate-400">← Catalogue</NuxtLink>
    <div class="mt-6 grid gap-8 md:grid-cols-2">
      <img :src="product.image" :alt="product.name" class="aspect-square w-full rounded-[2rem] object-cover">
      <div class="self-center"><p class="text-sm font-bold uppercase tracking-widest text-violet-300">{{ categoryLabel }}</p><h1 class="mt-2 text-4xl font-black">{{ product.name }}</h1><p class="mt-5 text-lg leading-8 text-slate-400">{{ product.description }}</p><strong class="mt-8 block text-3xl">{{ formatPrice(product.price) }}</strong><button :disabled="product.stock <= 0" class="mt-6 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 disabled:opacity-40" @click="cart.add(product.id)">Ajouter au panier</button></div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute(); const catalog = useCatalogStore(); const cart = useCartStore(); const { formatPrice } = useCurrency();
const product = computed(() => catalog.products.find((p) => p.id === route.params.id));
const labels = { drinks: "Boissons", snacking: "Snacking", essential: "Nécessaire", aperitif: "Apéro", grocery: "Épicerie" };
const categoryLabel = computed(() => product.value ? labels[product.value.category] : "");
if (product.value) useSeoMeta({ title: `${product.value.name} | Nox`, description: product.value.description });
</script>