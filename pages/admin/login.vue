<template>
  <div class="flex min-h-screen items-center justify-center bg-nox-950 px-4 text-white">
    <div class="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-glow">
      <NuxtLink to="/" class="text-sm text-slate-500">← Boutique</NuxtLink>
      <div class="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black">N</div>
      <h1 class="mt-5 text-3xl font-black">Connexion gérant</h1><p class="mt-2 text-sm text-slate-400">Démo : mot de passe <code class="text-violet-300">nox2026</code></p>
      <form class="mt-7 space-y-4" @submit.prevent="submit"><label>Email<input v-model="email" class="field-dark" type="email" required></label><label>Mot de passe<input v-model="password" class="field-dark" type="password" required></label><p v-if="error" class="text-sm text-red-300">{{ error }}</p><button class="w-full rounded-2xl bg-white px-4 py-3 font-bold text-slate-950">Se connecter</button></form>
      <div class="mt-7 border-t border-white/10 pt-5"><p class="text-xs uppercase tracking-widest text-slate-500">Comptes de démonstration</p><div class="mt-3 grid gap-2"><button v-for="user in users" :key="user.id" class="rounded-xl bg-white/5 px-3 py-2 text-left text-sm hover:bg-white/10" @click="loginAs(user.id); navigateTo('/admin')"><strong>{{ user.name }}</strong><span class="ml-2 text-slate-500">{{ roleLabels[user.role] }}</span></button></div></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { users, roleLabels } from "~/data/users";
const auth = useAuthStore(); const router = useRouter(); const email = ref("gerant@nox.demo"); const password = ref("nox2026"); const error = ref("");
const submit = () => { if (!auth.login(email.value, password.value)) error.value = "Identifiants incorrects."; else router.push("/admin"); };
const loginAs = (id: string) => auth.loginAs(id);
</script>