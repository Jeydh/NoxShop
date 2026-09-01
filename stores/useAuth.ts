import { defineStore } from "pinia";
import { users } from "~/data/users";
import type { Permission, User } from "~/types";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);

  const login = (email: string, password: string) => {
    const found = users.find((candidate) => candidate.email === email);
    if (!found || password !== "nox2026") return false;
    user.value = found;
    if (import.meta.client) localStorage.setItem("nox-user", found.id);
    return true;
  };

  const loginAs = (id: string) => {
    const found = users.find((candidate) => candidate.id === id);
    if (!found) return;
    user.value = found;
    if (import.meta.client) localStorage.setItem("nox-user", found.id);
  };

  const logout = () => {
    user.value = null;
    if (import.meta.client) localStorage.removeItem("nox-user");
  };

  const can = (permission: Permission) => {
    if (!user.value) return false;
    return user.value.permissions.includes(permission);
  };

  const hydrate = () => {
    if (!import.meta.client) return;
    const id = localStorage.getItem("nox-user");
    if (id) user.value = users.find((candidate) => candidate.id === id) ?? null;
  };

  return { user, login, loginAs, logout, can, hydrate };
});