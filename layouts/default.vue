<template>
  <div class="min-h-screen bg-nox-950 text-slate-100">
    <header class="sticky top-0 z-40 border-b border-white/5 bg-nox-950/85 backdrop-blur-xl">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <NuxtLink to="/" class="group flex items-center gap-3">
          <div
            class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black shadow-glow transition-transform group-hover:scale-105">
            N</div>
          <div>
            <div class="font-black tracking-tight">NOX</div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-slate-500">Night Shop</div>
          </div>
        </NuxtLink>

        <div class="flex items-center gap-3">
          <span
            :class="['hidden rounded-full px-3 py-1.5 text-xs font-semibold sm:inline-flex', isOpen ? 'bg-emerald-400/10 text-emerald-300' : 'bg-red-400/10 text-red-300']">
            <span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current"></span>{{ statusText }}
          </span>
          <NuxtLink to="/cart"
            class="relative rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:scale-105 hover:bg-white/10">
            🛒
            <Transition name="pop">
              <span v-if="cart.count" :key="cart.count"
                class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold">{{
                  cart.count }}</span>
            </Transition>
          </NuxtLink>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer class="border-t border-white/5 py-10 text-center text-xs text-slate-500">
      © 2026 Nox · Démonstration · 
      <NuxtLink to="/admin"
        class="relative rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:scale-105 hover:bg-white/10">
        <Transition name="pop">
          🔑
        </Transition>
      </NuxtLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
const cart = useCartStore();
const { isOpen, statusText } = useShopStatus();
</script>