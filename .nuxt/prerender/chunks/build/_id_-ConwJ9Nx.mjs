import { e as useRoute, b as useCatalogStore, u as useCartStore, c as useCurrency, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta } from './v3-BW50iGDy.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const catalog = useCatalogStore();
    useCartStore();
    const { formatPrice } = useCurrency();
    const product = computed(() => catalog.products.find((p) => p.id === route.params.id));
    const labels = { drinks: "Boissons", snacking: "Snacking", essential: "N\xE9cessaire", aperitif: "Ap\xE9ro", grocery: "\xC9picerie" };
    const categoryLabel = computed(() => product.value ? labels[product.value.category] : "");
    if (product.value) useSeoMeta({ title: `${product.value.name} | Nox`, description: product.value.description });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-16" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-sm text-slate-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u2190 Catalogue`);
            } else {
              return [
                createTextVNode("\u2190 Catalogue")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-6 grid gap-8 md:grid-cols-2"><img${ssrRenderAttr("src", unref(product).image)}${ssrRenderAttr("alt", unref(product).name)} class="aspect-square w-full rounded-[2rem] object-cover"><div class="self-center"><p class="text-sm font-bold uppercase tracking-widest text-violet-300">${ssrInterpolate(unref(categoryLabel))}</p><h1 class="mt-2 text-4xl font-black">${ssrInterpolate(unref(product).name)}</h1><p class="mt-5 text-lg leading-8 text-slate-400">${ssrInterpolate(unref(product).description)}</p><strong class="mt-8 block text-3xl">${ssrInterpolate(unref(formatPrice)(unref(product).price))}</strong><button${ssrIncludeBooleanAttr(unref(product).stock <= 0) ? " disabled" : ""} class="mt-6 rounded-2xl bg-white px-6 py-4 font-black text-slate-950 disabled:opacity-40">Ajouter au panier</button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-ConwJ9Nx.mjs.map
