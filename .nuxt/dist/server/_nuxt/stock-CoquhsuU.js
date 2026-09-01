import { b as useCatalogStore, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    const catalog = useCatalogStore();
    const labels = { drinks: "Boissons", snacking: "Snacking", essential: "Nécessaire", aperitif: "Apéro", grocery: "Épicerie" };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap items-end justify-between gap-4"><div><h1 class="text-3xl font-black">Stock</h1><p class="mt-1 text-sm text-slate-500">Stocks réels, y compris les écarts négatifs.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/scanner",
        class: "rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`📷 Scanner`);
          } else {
            return [
              createTextVNode("📷 Scanner")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="overflow-x-auto"><table class="w-full min-w-[700px] text-left text-sm"><thead class="bg-slate-50 text-xs uppercase tracking-wider text-slate-400"><tr><th class="p-4">Produit</th><th>Code-barres</th><th>Catégorie</th><th>Stock</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(catalog).products, (product) => {
        _push(`<tr class="border-t border-slate-100"><td class="p-4"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", product.image)} class="h-10 w-10 rounded-lg object-cover"><strong>${ssrInterpolate(product.name)}</strong></div></td><td class="font-mono text-xs text-slate-500">${ssrInterpolate(product.barcode)}</td><td class="text-slate-500">${ssrInterpolate(labels[product.category])}</td><td><span class="${ssrRenderClass([product.stock <= 0 ? "bg-red-50 text-red-700" : product.stock <= 5 ? "bg-orange-50 text-orange-700" : "bg-emerald-50 text-emerald-700", "rounded-full px-2.5 py-1 text-xs font-bold"])}">${ssrInterpolate(product.stock)}</span></td><td><div class="flex gap-2"><button class="rounded-lg bg-slate-100 px-2.5 py-1.5">−1</button><button class="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">+1</button><button class="rounded-lg bg-red-50 px-2.5 py-1.5 text-red-700">Rupture</button></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/stock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=stock-CoquhsuU.js.map
