<template>
  <div class="mx-auto max-w-xl px-4 py-20 text-center">
    <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 text-4xl text-emerald-300">✓</div>
    <p class="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Commande confirmée</p>
    <h1 class="mt-2 text-4xl font-black">À tout à l'heure, {{ name }} 👋</h1>
    <p class="mt-4 text-slate-400">Votre commande est réservée pour <strong class="text-white">{{ slot }}</strong>.</p>
    <div class="mx-auto mt-8 max-w-xs rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p class="text-xs uppercase tracking-widest text-slate-500">Code de retrait</p><strong class="mt-2 block text-5xl tracking-[0.2em] text-violet-300">{{ code }}</strong>
    </div>
    <NuxtLink to="/" class="mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-slate-950">Retour au catalogue</NuxtLink>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const name = computed(() => String(route.query.name ?? "vous")); const code = computed(() => String(route.query.code ?? "7394")); const slot = computed(() => String(route.query.slot ?? "le créneau choisi"));
</script>