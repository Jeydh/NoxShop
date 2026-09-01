<template>
  <div class="flex gap-2 overflow-x-auto pb-2">
    <button v-for="category in categories" :key="category.id" :class="['shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300', modelValue === category.id ? 'border-violet-400/40 bg-violet-500 text-white shadow-glow' : 'border-white/10 bg-white/5 text-slate-300 hover:-translate-y-0.5 hover:border-white/20']" @click="$emit('update:modelValue', category.id)">
      <span class="mr-1.5">{{ category.icon }}</span>{{ category.label }}
    </button>
  </div>
</template>
<script setup lang="ts">
import type { ProductCategory } from "~/types";
defineProps<{ modelValue: ProductCategory | "all" }>();
defineEmits<{ "update:modelValue": [value: ProductCategory | "all"] }>();
const categories = [
  { id: "all", label: "Tout", icon: "✨" },
  { id: "drinks", label: "Boissons", icon: "🥤" },
  { id: "snacking", label: "Snacking", icon: "🍟" },
  { id: "essential", label: "Nécessaire", icon: "🔥" },
  { id: "aperitif", label: "Apéro", icon: "🥜" },
  { id: "grocery", label: "Épicerie", icon: "🛒" },
] as const;
</script>