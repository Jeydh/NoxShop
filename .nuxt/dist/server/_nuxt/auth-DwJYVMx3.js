import { f as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import { u as useAuthStore } from "./useAuth-5Uv8i2nR.js";
import "vue";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
import "vue/server-renderer";
import "./users-CW0tpuyF.js";
const auth = defineNuxtRouteMiddleware(() => {
  const auth2 = useAuthStore();
  if (!auth2.user) return navigateTo("/admin/login");
});
export {
  auth as default
};
//# sourceMappingURL=auth-DwJYVMx3.js.map
