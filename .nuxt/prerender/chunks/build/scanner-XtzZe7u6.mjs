import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import { b as useCatalogStore } from './server.mjs';
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
  __name: "scanner",
  __ssrInlineRender: true,
  setup(__props) {
    useCatalogStore();
    const barcode = ref("");
    const product = ref(null);
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl" }, _attrs))}><h1 class="text-3xl font-black">Scanner stock</h1><p class="mt-1 text-sm text-slate-500">D\xE9mo pr\xEAte \xE0 recevoir un scanner cam\xE9ra natif.</p><div class="mt-6 overflow-hidden rounded-3xl bg-slate-950 p-4 text-white shadow-xl"><div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-900"><div class="absolute inset-x-10 top-1/2 h-0.5 bg-violet-400 shadow-glow"></div><div class="text-center"><div class="text-6xl">\u{1F4F7}</div><p class="mt-4 font-bold">Cadrez un code-barres</p><p class="mt-1 text-sm text-slate-500">Cam\xE9ra r\xE9elle \xE0 connecter via BarcodeDetector / librairie d\xE9di\xE9e.</p></div></div><div class="mt-4 flex gap-2"><input${ssrRenderAttr("value", unref(barcode))} class="field-dark flex-1" placeholder="Entrer un code manuellement"><button class="rounded-xl bg-white px-4 font-bold text-slate-950">Rechercher</button></div></div>`);
      if (unref(product)) {
        _push(`<div class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex gap-4"><img${ssrRenderAttr("src", unref(product).image)} class="h-20 w-20 rounded-xl object-cover"><div><h2 class="font-bold">${ssrInterpolate(unref(product).name)}</h2><p class="text-sm text-slate-500">Stock : ${ssrInterpolate(unref(product).stock)}</p></div></div><div class="mt-5 flex gap-2"><button class="rounded-xl bg-emerald-600 px-4 py-2.5 font-bold text-white">+1 r\xE9ception</button><button class="rounded-xl bg-slate-100 px-4 py-2.5 font-bold">+10 r\xE9ception</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(message)) {
        _push(`<p class="mt-4 text-sm text-slate-500">${ssrInterpolate(unref(message))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/scanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=scanner-XtzZe7u6.mjs.map
