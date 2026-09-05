<template>
  <div class="min-h-screen bg-slate-100 text-slate-900">
    <header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div class="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 lg:px-6">
        <!-- Logo -->
        <NuxtLink to="/admin" class="flex items-center gap-3">
            <img :src="withBase('/brand/noxshop_logo.png', $config.app.baseURL)" alt="logo NoxShop" class="h-14 w-auto object-contain"/>
          <div>
            <strong>NOX</strong>
            <span class="ml-2 text-xs text-slate-400">
              Back-office
            </span>
          </div>
        </NuxtLink>

        <!-- Actions desktop -->
        <div class="flex items-center gap-3">
          <NuxtLink to="/" class="hidden rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-100 sm:block">
            Voir le site
          </NuxtLink>

          <div v-if="auth.user" class="hidden rounded-xl bg-slate-100 px-3 py-2 text-xs sm:block">
            <strong>
              {{ auth.user.name }}
            </strong>

            <span class="ml-2 text-slate-400">
              {{ roleLabels[auth.user.role] }}
            </span>
          </div>

          <button class="hidden rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white sm:block"
            @click="logout">
            Déconnexion
          </button>

          <!-- Bouton mobile -->
          <button type="button"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg text-slate-700 transition hover:bg-slate-200 active:scale-95 lg:hidden"
            :aria-expanded="mobileMenuOpen" aria-label="Ouvrir le menu de gestion" @click="mobileMenuOpen = true">
            ☰
          </button>
        </div>
      </div>
    </header>

    <!-- Menu mobile admin -->
    <MobileMenu :open="mobileMenuOpen" :items="mobileItems" title="Back-office" eyebrow="NOX"
      @close="mobileMenuOpen = false">
      <template #footer>
        <div class="space-y-2">
          <NuxtLink to="/"
            class="flex items-center justify-center rounded-xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-200"
            @click="mobileMenuOpen = false">
            ← Voir le site
          </NuxtLink>

          <button type="button"
            class="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            @click="logout">
            Déconnexion
          </button>
        </div>
      </template>
    </MobileMenu>

    <!-- Contenu admin -->
    <div class="mx-auto flex max-w-[1500px]">
      <!-- Sidebar desktop -->
      <aside class="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 lg:block">
        <nav class="space-y-1">
          <NuxtLink v-for="item in visibleItems" :key="item.to" :to="item.to"
            class="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            active-class="bg-violet-50 !text-violet-700">
            {{ item.label }}
          </NuxtLink>
        </nav>
      </aside>

      <!-- Page -->
      <main class="min-w-0 flex-1 p-4 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { roleLabels } from '~/data/users'
import { withBase } from 'ufo'

const auth = useAuthStore()

const mobileMenuOpen = ref(false)

const items = [
  {
    label: 'Dashboard',
    to: '/admin',
    permission: 'dashboard.view',
    icon: '▦',
    description: 'Vue générale',
  },
  {
    label: 'Stock',
    to: '/admin/stock',
    permission: 'stock.read',
    icon: '📦',
    description: 'Inventaire',
  },
  {
    label: 'Scanner',
    to: '/admin/scanner',
    permission: 'stock.update',
    icon: '▣',
    description: 'Scanner un produit',
  },
  {
    label: 'Commandes',
    to: '/admin/orders',
    permission: 'orders.read',
    icon: '🛒',
    description: 'Click & Collect',
  },
  {
    label: 'Fournisseurs',
    to: '/admin/suppliers',
    permission: 'suppliers.read',
    icon: '🚚',
    description: 'Gestion fournisseurs',
  },
  {
    label: 'Factures',
    to: '/admin/invoices',
    permission: 'invoices.read',
    icon: '🧾',
    description: 'Facturation',
  },
  {
    label: 'Équipe',
    to: '/admin/team',
    permission: 'team.manage',
    icon: '👥',
    description: 'Utilisateurs et rôles',
  },
]

const visibleItems = computed(() =>
  items.filter((item) => auth.can(item.permission as any)),
)

const mobileItems = computed(() =>
  visibleItems.value.map((item) => ({
    label: item.label,
    to: item.to,
    icon: item.icon,
    description: item.description,
  })),
)

const logout = async () => {
  auth.logout()
  mobileMenuOpen.value = false

  await navigateTo('/admin/login')
}
</script>