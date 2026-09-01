import { a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { r as roleLabels } from "./users-CW0tpuyF.js";
import { u as useAuthStore } from "./useAuth-5Uv8i2nR.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const items = [
      { label: "Dashboard", to: "/admin", permission: "dashboard.view" },
      { label: "Stock", to: "/admin/stock", permission: "stock.read" },
      { label: "Scanner", to: "/admin/scanner", permission: "stock.update" },
      { label: "Commandes", to: "/admin/orders", permission: "orders.read" },
      { label: "Fournisseurs", to: "/admin/suppliers", permission: "suppliers.read" },
      { label: "Factures", to: "/admin/invoices", permission: "invoices.read" },
      { label: "Équipe", to: "/admin/team", permission: "team.manage" }
    ];
    const visibleItems = computed(() => items.filter((item) => auth.can(item.permission)));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-100 text-slate-900" }, _attrs))}><header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl"><div class="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 lg:px-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 font-black text-white"${_scopeId}>N</div><div${_scopeId}><strong${_scopeId}>NOX</strong><span class="ml-2 text-xs text-slate-400"${_scopeId}>Back-office</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-400 font-black text-white" }, "N"),
              createVNode("div", null, [
                createVNode("strong", null, "NOX"),
                createVNode("span", { class: "ml-2 text-xs text-slate-400" }, "Back-office")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "rounded-xl px-3 py-2 text-sm text-slate-500 hover:bg-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir le site`);
          } else {
            return [
              createTextVNode("Voir le site")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(auth).user) {
        _push(`<div class="rounded-xl bg-slate-100 px-3 py-2 text-xs"><strong>${ssrInterpolate(unref(auth).user.name)}</strong><span class="ml-2 text-slate-400">${ssrInterpolate(unref(roleLabels)[unref(auth).user.role])}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white">Déconnexion</button></div></div></header><div class="mx-auto flex max-w-[1500px]"><aside class="hidden w-60 shrink-0 border-r border-slate-200 bg-white p-4 md:block"><nav class="space-y-1"><!--[-->`);
      ssrRenderList(unref(visibleItems), (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.to,
          to: item.to,
          class: "block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950",
          "active-class": "bg-violet-50 !text-violet-700"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></aside><main class="min-w-0 flex-1 p-4 lg:p-8">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=admin-C-OspPOU.js.map
