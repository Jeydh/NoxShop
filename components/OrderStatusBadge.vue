<template>
  <span :class="['inline-flex rounded-full px-2.5 py-1 text-xs font-bold', classes]">{{ labels[status] }}</span>
</template>
<script setup lang="ts">
import type { OrderStatus } from "~/types";
const props = defineProps<{ status: OrderStatus }>();
const labels: Record<OrderStatus, string> = { pending: "À préparer", preparing: "En préparation", ready: "Prête", completed: "Retirée", cancelled: "Annulée" };
const classes = computed(() => ({ pending: "bg-amber-50 text-amber-700", preparing: "bg-violet-50 text-violet-700", ready: "bg-emerald-50 text-emerald-700", completed: "bg-slate-100 text-slate-600", cancelled: "bg-red-50 text-red-700" }[props.status]));
</script>