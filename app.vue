<template>
  <NuxtPwaManifest/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
    <CartFloatingCart v-if="route.path !== '/cart'"/>

</template>

<script setup lang="ts">
const route = useRoute()
</script>