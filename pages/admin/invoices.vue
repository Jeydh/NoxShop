<template>
  <div><h1 class="text-3xl font-black">Facturation</h1><p class="mt-1 text-sm text-slate-500">Factures mockées, prête à être reliée à une API de paiement/comptabilité.</p><div class="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div v-for="invoice in invoices" :key="invoice.id" class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-4 last:border-0"><div><strong>{{ invoice.id }}</strong><p class="text-sm text-slate-500">{{ invoice.customer }} · {{ invoice.date }}</p></div><strong>{{ invoice.amount }}</strong><button class="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold">Aperçu</button></div></div></div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "admin", middleware: ["auth"], permission: "invoices.read" });
const invoices = [{ id: "FAC-2026-0084", customer: "Jean Dupont", date: "25/08/2026", amount: "8,20 €" }, { id: "FAC-2026-0083", customer: "Sophie Martin", date: "25/08/2026", amount: "6,90 €" }];
</script>