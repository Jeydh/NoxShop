import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import { u as useCartStore, c as useCurrency, d as useRouter } from './server.mjs';
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
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const { formatPrice } = useCurrency();
    useRouter();
    const loading = ref(false);
    const slots = ["D'ici 15 min", "D'ici 30 min", "Dans 1 heure", "Plus tard"];
    const form = reactive({ firstName: "", lastName: "", phone: "", email: "", slot: slots[0] });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-10 lg:py-16" }, _attrs))}><h1 class="text-4xl font-black">Retrait express</h1><p class="mt-2 text-slate-400">Quelques informations et votre commande est r\xE9serv\xE9e.</p><form class="mt-8 space-y-5"><div class="grid gap-4 sm:grid-cols-2"><label>Pr\xE9nom<input${ssrRenderAttr("value", unref(form).firstName)} required class="field" placeholder="Jean"></label><label>Nom<input${ssrRenderAttr("value", unref(form).lastName)} required class="field" placeholder="Dupont"></label></div><label>T\xE9l\xE9phone<input${ssrRenderAttr("value", unref(form).phone)} required class="field" placeholder="06 12 34 56 78"></label><label>Email <span class="text-slate-500">(optionnel)</span><input${ssrRenderAttr("value", unref(form).email)} type="email" class="field" placeholder="jean@example.com"></label><div><p class="mb-2 font-semibold">Cr\xE9neau de retrait</p><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(slots, (slot) => {
        _push(`<button type="button" class="${ssrRenderClass(["rounded-2xl border p-4 text-left transition", unref(form).slot === slot ? "border-violet-400 bg-violet-500/10" : "border-white/10 bg-white/5"])}">${ssrInterpolate(slot)}</button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full rounded-2xl bg-white px-5 py-4 font-black text-slate-950 transition hover:scale-[1.01] disabled:opacity-60">${ssrInterpolate(unref(loading) ? "Confirmation..." : `Confirmer \xB7 ${unref(formatPrice)(unref(cart).subtotal)}`)}</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout-DU_KkMCc.mjs.map
