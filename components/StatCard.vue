<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">{{ label }}</p>
    <div class="mt-2 flex items-end justify-between gap-3"><strong class="text-2xl">{{ value }}</strong><span v-if="trend" class="text-xs font-bold text-emerald-600">{{ trend }}</span></div>
    <p v-if="hint" class="mt-1 text-xs text-slate-400">{{ hint }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ label: string; value: string; trend?: string; hint?: string }>();
</script>