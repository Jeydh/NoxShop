<template>
  <div><h1 class="text-3xl font-black">Fournisseurs</h1><p class="mt-1 text-sm text-slate-500">Préparation pour commandes et intégrations API.</p><div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"><div v-for="supplier in suppliers" :key="supplier.id" class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between"><h2 class="font-bold">{{ supplier.name }}</h2><span class="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">{{ supplier.status === "connected" ? "Connecté" : "Manuel" }}</span></div><p class="mt-3 text-sm text-slate-500">{{ supplier.products }} produits</p><p class="mt-1 text-xs text-slate-400">{{ supplier.contact }}</p><button class="mt-5 rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">Nouvelle précommande</button></div></div></div>
</template>
<script setup lang="ts">
import { suppliers } from "~/data/suppliers";
definePageMeta({ layout: "admin", middleware: ["auth"], permission: "suppliers.read" });
</script>