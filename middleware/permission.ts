import type { Permission } from "~/types";

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();
  const required = to.meta.permission as Permission | undefined;
  if (required && !auth.can(required)) return navigateTo("/admin");
});