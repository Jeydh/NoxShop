import { b as useCatalogStore, a as __nuxt_component_0$1 } from './server.mjs';
import { _ as _sfc_main$1 } from './ProductCard-DkcW4_TE.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const catalog = useCatalogStore();
    const featuredProducts = computed(() => {
      return catalog.products.filter((product) => product.featured && product.stock > 0).map((product) => ({ ...product, slug: product.id })).slice(0, 8);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_ProductCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pb-20" }, _attrs))}><section class="relative overflow-hidden"><div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.18),transparent_35%),radial-gradient(circle_at_20%_50%,rgba(6,182,212,0.10),transparent_30%)]"></div><div class="mx-auto max-w-7xl px-4 pb-14 pt-12 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20"><div class="max-w-3xl"><div class="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-400"><span class="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span> Ouvert \u2014 ferme \xE0 02h00 </div><h1 class="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"> Tout ce qu&#39;il vous faut. <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"> Quand vous en avez besoin. </span></h1><p class="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg"> Commandez en quelques secondes et r\xE9cup\xE9rez vos achats sans attendre. </p><div class="mt-8 flex flex-col gap-3 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "rounded-2xl bg-white px-6 py-3.5 text-center text-sm font-black text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir tous les produits `);
          } else {
            return [
              createTextVNode(" Voir tous les produits ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products?category=drinks",
        class: "rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir les boissons `);
          } else {
            return [
              createTextVNode(" Voir les boissons ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex items-end justify-between gap-4"><div><p class="text-sm font-bold uppercase tracking-wider text-violet-400"> Les incontournables </p><h2 class="mt-1 text-2xl font-black text-white sm:text-3xl"> Les produits du moment </h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "hidden text-sm font-bold text-slate-400 transition hover:text-white sm:block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tout voir \u2192 `);
          } else {
            return [
              createTextVNode(" Tout voir \u2192 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(featuredProducts.value, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          product
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "mt-5 block rounded-2xl border border-white/10 bg-white/[0.03] py-3 text-center text-sm font-bold text-white sm:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir tous les produits `);
          } else {
            return [
              createTextVNode(" Voir tous les produits ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section><section class="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8"><div class="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-cyan-500/5 p-6 sm:p-8"><div class="max-w-2xl"><span class="text-3xl">\u26A1</span><h2 class="mt-4 text-2xl font-black text-white sm:text-3xl"> Votre commande pr\xEAte en 15 minutes. </h2><p class="mt-3 text-sm leading-6 text-slate-400"> Commandez depuis votre t\xE9l\xE9phone, choisissez votre cr\xE9neau et passez simplement r\xE9cup\xE9rer vos achats. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "mt-6 inline-flex rounded-xl bg-violet-500 px-5 py-3 text-sm font-black text-white transition hover:bg-violet-400 hover:scale-[1.02]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Commander maintenant `);
          } else {
            return [
              createTextVNode(" Commander maintenant ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-6h1WnNaO.mjs.map
