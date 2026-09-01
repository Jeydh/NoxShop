<template>
  <div>
    <div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm font-semibold text-violet-600">Vue d'ensemble</p><h1 class="mt-1 text-3xl font-black">Bonjour, {{ auth.user?.name.split(" ")[0] }} 👋</h1></div><NuxtLink to="/admin/scanner" class="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white">📷 Ouvrir le scanner</NuxtLink></div>
    <div class="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="CA aujourd'hui" value="428,50 €" trend="+12,4 %" hint="vs. hier" /><StatCard label="Commandes" value="37" trend="+8" hint="depuis 08:00" /><StatCard label="Stock faible" value="6" hint="produits à vérifier" /><StatCard label="À préparer" value="3" hint="retraits en attente" /></div>
    <div class="mt-7 grid gap-5 xl:grid-cols-[1.3fr_.7fr]">
      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between"><h2 class="font-bold">Commandes récentes</h2><NuxtLink to="/admin/orders" class="text-sm font-semibold text-violet-600">Voir tout</NuxtLink></div><div class="mt-4 space-y-2"><div v-for="order in orders" :key="order.id" class="flex items-center justify-between rounded-xl bg-slate-50 p-3"><div><strong class="text-sm">{{ order.id }}</strong><p class="text-xs text-slate-500">{{ order.customerName }} · {{ order.pickupSlot }}</p></div><OrderStatusBadge :status="order.status" /></div></div></section>
      <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 class="font-bold">Alertes stock</h2><div class="mt-4 space-y-2"><div v-for="product in lowStock" :key="product.id" class="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span class="text-sm font-medium">{{ product.name }}</span><span :class="product.stock <= 0 ? 'text-red-600' : 'text-orange-600'" class="text-xs font-bold">{{ product.stock }} en stock</span></div></div></section>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: ["auth"], permission: "dashboard.view" });
import { orders } from "~/data/orders";

const auth = useAuthStore(); const catalog = useCatalogStore();
const lowStock = computed(() => catalog.products.filter((p) => p.stock <= 5).slice(0, 6));
</script>