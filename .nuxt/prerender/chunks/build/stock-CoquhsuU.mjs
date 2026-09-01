import { b as useCatalogStore, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/destr/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unstorage/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'node:fs/promises';
import 'node:path';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/ohash/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/scule/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/jeydh/projects/nox-shop/node_modules/pathe/dist/index.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///home/jeydh/projects/nox-shop/node_modules/devalue/index.js';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/unhead/dist/utils.mjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///home/jeydh/projects/nox-shop/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "stock",
  __ssrInlineRender: true,
  setup(__props) {
    const catalog = useCatalogStore();
    const labels = { drinks: "Boissons", snacking: "Snacking", essential: "N\xE9cessaire", aperitif: "Ap\xE9ro", grocery: "\xC9picerie" };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap items-end justify-between gap-4"><div><h1 class="text-3xl font-black">Stock</h1><p class="mt-1 text-sm text-slate-500">Stocks r\xE9els, y compris les \xE9carts n\xE9gatifs.</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin/scanner",
        class: "rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u{1F4F7} Scanner`);
          } else {
            return [
              createTextVNode("\u{1F4F7} Scanner")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div class="overflow-x-auto"><table class="w-full min-w-[700px] text-left text-sm"><thead class="bg-slate-50 text-xs uppercase tracking-wider text-slate-400"><tr><th class="p-4">Produit</th><th>Code-barres</th><th>Cat\xE9gorie</th><th>Stock</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(catalog).products, (product) => {
        _push(`<tr class="border-t border-slate-100"><td class="p-4"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", product.image)} class="h-10 w-10 rounded-lg object-cover"><strong>${ssrInterpolate(product.name)}</strong></div></td><td class="font-mono text-xs text-slate-500">${ssrInterpolate(product.barcode)}</td><td class="text-slate-500">${ssrInterpolate(labels[product.category])}</td><td><span class="${ssrRenderClass([product.stock <= 0 ? "bg-red-50 text-red-700" : product.stock <= 5 ? "bg-orange-50 text-orange-700" : "bg-emerald-50 text-emerald-700", "rounded-full px-2.5 py-1 text-xs font-bold"])}">${ssrInterpolate(product.stock)}</span></td><td><div class="flex gap-2"><button class="rounded-lg bg-slate-100 px-2.5 py-1.5">\u22121</button><button class="rounded-lg bg-slate-900 px-2.5 py-1.5 text-white">+1</button><button class="rounded-lg bg-red-50 px-2.5 py-1.5 text-red-700">Rupture</button></div></td></tr>`);
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

export { _sfc_main as default };
//# sourceMappingURL=stock-CoquhsuU.mjs.map
