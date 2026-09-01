<template>
  <div class="mx-auto max-w-3xl"><h1 class="text-3xl font-black">Scanner stock</h1><p class="mt-1 text-sm text-slate-500">Démo prête à recevoir un scanner caméra natif.</p>
    <div class="mt-6 overflow-hidden rounded-3xl bg-slate-950 p-4 text-white shadow-xl"><div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-900"><div class="absolute inset-x-10 top-1/2 h-0.5 bg-violet-400 shadow-glow"></div><div class="text-center"><div class="text-6xl">📷</div><p class="mt-4 font-bold">Cadrez un code-barres</p><p class="mt-1 text-sm text-slate-500">Caméra réelle à connecter via BarcodeDetector / librairie dédiée.</p></div></div><div class="mt-4 flex gap-2"><input v-model="barcode" class="field-dark flex-1" placeholder="Entrer un code manuellement"><button class="rounded-xl bg-white px-4 font-bold text-slate-950" @click="scan">Rechercher</button></div></div>
    <div v-if="product" class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex gap-4"><img :src="product.image" class="h-20 w-20 rounded-xl object-cover"><div><h2 class="font-bold">{{ product.name }}</h2><p class="text-sm text-slate-500">Stock : {{ product.stock }}</p></div></div><div class="mt-5 flex gap-2"><button class="rounded-xl bg-emerald-600 px-4 py-2.5 font-bold text-white" @click="catalog.adjustStock(product.id, 1)">+1 réception</button><button class="rounded-xl bg-slate-100 px-4 py-2.5 font-bold" @click="catalog.adjustStock(product.id, 10)">+10 réception</button></div></div>
    <p v-if="message" class="mt-4 text-sm text-slate-500">{{ message }}</p>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: ["auth"], permission: "stock.update" });
const catalog = useCatalogStore(); const barcode = ref(""); const product = ref<any>(null); const message = ref("");
const scan = () => { product.value = catalog.products.find((p) => p.barcode === barcode.value) ?? null; message.value = product.value ? "Produit identifié." : "Aucun produit trouvé."; };
</script>