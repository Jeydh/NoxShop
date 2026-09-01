import { b as useCatalogStore, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, mergeProps, useSSRContext, computed, unref, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./OrderStatusBadge-CXF5wSxY.js";
import { o as orders } from "./orders-Yc-VDwJ6.js";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import { u as useAuthStore } from "./useAuth-5Uv8i2nR.js";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
import "./users-CW0tpuyF.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "StatCard",
  __ssrInlineRender: true,
  props: {
    label: {},
    value: {},
    trend: {},
    hint: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm" }, _attrs))}><p class="text-xs font-semibold uppercase tracking-wider text-slate-400">${ssrInterpolate(__props.label)}</p><div class="mt-2 flex items-end justify-between gap-3"><strong class="text-2xl">${ssrInterpolate(__props.value)}</strong>`);
      if (__props.trend) {
        _push(`<span class="text-xs font-bold text-emerald-600">${ssrInterpolate(__props.trend)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.hint) {
        _push(`<p class="mt-1 text-xs text-slate-400">${ssrInterpolate(__props.hint)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const auth = useAuthStore();
    const catalog = useCatalogStore();
    const lowStock = computed(() => catalog.products.filter((p) => p.stock <= 5).slice(0, 6));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_StatCard = _sfc_main$1;
      const _component_OrderStatusBadge = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm font-semibold text-violet-600">Vue d&#39;ensemble</p><h1 class="mt-1 text-3xl font-black">Bonjour, ${ssrInterpolate(unref(auth).user?.name.split(" ")[0])} 👋</h1></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/scanner",
        class: "rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`📷 Ouvrir le scanner`);
          } else {
            return [
              createTextVNode("📷 Ouvrir le scanner")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">`);
      _push(ssrRenderComponent(_component_StatCard, {
        label: "CA aujourd'hui",
        value: "428,50 €",
        trend: "+12,4 %",
        hint: "vs. hier"
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Commandes",
        value: "37",
        trend: "+8",
        hint: "depuis 08:00"
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "Stock faible",
        value: "6",
        hint: "produits à vérifier"
      }, null, _parent));
      _push(ssrRenderComponent(_component_StatCard, {
        label: "À préparer",
        value: "3",
        hint: "retraits en attente"
      }, null, _parent));
      _push(`</div><div class="mt-7 grid gap-5 xl:grid-cols-[1.3fr_.7fr]"><section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between"><h2 class="font-bold">Commandes récentes</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/orders",
        class: "text-sm font-semibold text-violet-600"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir tout`);
          } else {
            return [
              createTextVNode("Voir tout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-4 space-y-2"><!--[-->`);
      ssrRenderList(unref(orders), (order) => {
        _push(`<div class="flex items-center justify-between rounded-xl bg-slate-50 p-3"><div><strong class="text-sm">${ssrInterpolate(order.id)}</strong><p class="text-xs text-slate-500">${ssrInterpolate(order.customerName)} · ${ssrInterpolate(order.pickupSlot)}</p></div>`);
        _push(ssrRenderComponent(_component_OrderStatusBadge, {
          status: order.status
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 class="font-bold">Alertes stock</h2><div class="mt-4 space-y-2"><!--[-->`);
      ssrRenderList(unref(lowStock), (product) => {
        _push(`<div class="flex items-center justify-between rounded-xl bg-slate-50 p-3"><span class="text-sm font-medium">${ssrInterpolate(product.name)}</span><span class="${ssrRenderClass([product.stock <= 0 ? "text-red-600" : "text-orange-600", "text-xs font-bold"])}">${ssrInterpolate(product.stock)} en stock</span></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DRQ0UuKr.js.map
