<template>
  <div class="mx-auto max-w-5xl px-4 py-10 lg:py-16">
    <div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm text-violet-300">Espace client</p><h1 class="text-4xl font-black">Bonjour</h1></div><NuxtLink to="/" class="text-sm text-slate-400">← Boutique</NuxtLink></div>
    <div class="mt-8 grid gap-5 md:grid-cols-3">
      <div class="rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-6 text-white md:col-span-2"><p class="text-sm opacity-80">Carte fidélité</p><strong class="mt-3 block text-4xl">1 248</strong><span class="text-sm opacity-80">points disponibles</span><div class="mt-6 h-2 rounded-full bg-white/20"><div class="h-2 w-4/5 rounded-full bg-white"></div></div><p class="mt-2 text-xs opacity-80">252 points avant votre prochaine récompense</p></div>
      <div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><p class="text-sm text-slate-400">Téléphone</p><strong class="mt-2 block">06 12 34 56 78</strong><p class="mt-5 text-sm text-slate-400">Membre depuis</p><strong class="mt-2 block">Mars 2026</strong></div>
    </div>
    <h2 class="mt-12 text-2xl font-black">Dernières commandes</h2>
    <div class="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
      <div v-for="order in orders" :key="order.id" class="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 p-5 last:border-0"><div><strong>{{ order.id }}</strong><p class="text-sm text-slate-400">{{ order.pickupSlot }}</p></div><span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">{{ order.status === "ready" ? "Prête" : "Retirée" }}</span></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { orders as mockOrders } from "~/data/orders";
const orders = mockOrders.filter((order) => order.customerId === "c1");
</script>