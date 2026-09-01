<template>
  <div class="mx-auto max-w-2xl px-4 py-10 lg:py-16">
    <h1 class="text-4xl font-black">Retrait express</h1>
    <p class="mt-2 text-slate-400">Quelques informations et votre commande est réservée.</p>
    <form class="mt-8 space-y-5" @submit.prevent="submit">
      <div class="grid gap-4 sm:grid-cols-2">
        <label>Prénom<input v-model="form.firstName" required class="field" placeholder="Jean"></label>
        <label>Nom<input v-model="form.lastName" required class="field" placeholder="Dupont"></label>
      </div>
      <label>Téléphone<input v-model="form.phone" required class="field" placeholder="06 12 34 56 78"></label>
      <label>Email <span class="text-slate-500">(optionnel)</span><input v-model="form.email" type="email" class="field" placeholder="jean@example.com"></label>
      <div>
        <p class="mb-2 font-semibold">Créneau de retrait</p>
        <div class="grid grid-cols-2 gap-3">
          <button v-for="slot in slots" :key="slot" type="button" :class="['rounded-2xl border p-4 text-left transition', form.slot === slot ? 'border-violet-400 bg-violet-500/10' : 'border-white/10 bg-white/5']" @click="form.slot = slot">{{ slot }}</button>
        </div>
      </div>
      <button :disabled="loading" class="w-full rounded-2xl bg-white px-5 py-4 font-black text-slate-950 transition hover:scale-[1.01] disabled:opacity-60">{{ loading ? "Confirmation..." : `Confirmer · ${formatPrice(cart.subtotal)}` }}</button>
    </form>
  </div>
</template>
<script setup lang="ts">
const cart = useCartStore(); const { formatPrice } = useCurrency(); const router = useRouter();
const loading = ref(false);
const slots = ["D'ici 15 min", "D'ici 30 min", "Dans 1 heure", "Plus tard"];
const form = reactive({ firstName: "", lastName: "", phone: "", email: "", slot: slots[0] });
const submit = async () => {
  loading.value = true; await new Promise((resolve) => setTimeout(resolve, 700));
  cart.clear(); loading.value = false;
  await router.push({ path: "/order-confirmation", query: { code: "7394", name: `${form.firstName} ${form.lastName}`, slot: form.slot } });
};
</script>