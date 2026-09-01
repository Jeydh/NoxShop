<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 lg:px-6">
        <NuxtLink to="/admin" class="flex items-center gap-3">
          <div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 font-black text-white">N</div>
          <div><strong>NOX</strong><span class="ml-2 text-xs text-slate-400">Back-office</span></div>
        </NuxtLink>
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-100">Voir le site</NuxtLink>
          <div v-if="auth.user" class="rounded-xl bg-slate-100 px-3 py-2 text-xs">
            <strong>{{ auth.user.name }}</strong><span class="ml-2 text-slate-400">{{ roleLabels[auth.user.role] }}</span>
          </div>
          <button class="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white" @click="auth.logout(); navigateTo('/admin/login')">Déconnexion</button>
        </div>
      </div>
    </header>
    <div class="mx-auto flex max-w-[1500px]">
      <aside class="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
        <nav class="space-y-1">
          <NuxtLink v-for="item in visibleItems" :key="item.to" :to="item.to" class="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950" active-class="bg-violet-50 !text-violet-700">{{ item.label }}</NuxtLink>
        </nav>
      </aside>
      <main class="min-w-0 flex-1 p-4 lg:p-8"><slot /></main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { roleLabels } from "~/data/users";
const auth = useAuthStore();
const items = [
  { label: "Dashboard", to: "/admin", permission: "dashboard.view" },
  { label: "Stock", to: "/admin/stock", permission: "stock.read" },
  { label: "Scanner", to: "/admin/scanner", permission: "stock.update" },
  { label: "Commandes", to: "/admin/orders", permission: "orders.read" },
  { label: "Fournisseurs", to: "/admin/suppliers", permission: "suppliers.read" },
  { label: "Factures", to: "/admin/invoices", permission: "invoices.read" },
  { label: "Équipe", to: "/admin/team", permission: "team.manage" },
];
const visibleItems = computed(() => items.filter((item) => auth.can(item.permission as any)));
</script>