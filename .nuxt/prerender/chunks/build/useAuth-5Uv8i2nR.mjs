import { defineStore } from 'file:///home/jeydh/projects/nox-shop/node_modules/pinia/dist/pinia.prod.cjs';
import { u as users } from './users-CW0tpuyF.mjs';
import { ref } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';

const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const login = (email, password) => {
    const found = users.find((candidate) => candidate.email === email);
    if (!found || password !== "nox2026") return false;
    user.value = found;
    return true;
  };
  const loginAs = (id) => {
    const found = users.find((candidate) => candidate.id === id);
    if (!found) return;
    user.value = found;
  };
  const logout = () => {
    user.value = null;
  };
  const can = (permission) => {
    if (!user.value) return false;
    return user.value.permissions.includes(permission);
  };
  const hydrate = () => {
    return;
  };
  return { user, login, loginAs, logout, can, hydrate };
});

export { useAuthStore as u };
//# sourceMappingURL=useAuth-5Uv8i2nR.mjs.map
