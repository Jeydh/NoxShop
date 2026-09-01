import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import { o as orders } from './orders-Yc-VDwJ6.mjs';
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
    const orders$1 = orders.filter((order) => order.customerId === "c1");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl px-4 py-10 lg:py-16" }, _attrs))}><div class="flex flex-wrap items-end justify-between gap-4"><div><p class="text-sm text-violet-300">Espace client</p><h1 class="text-4xl font-black">Bonjour Jean \u{1F44B}</h1></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-sm text-slate-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u2190 Boutique`);
          } else {
            return [
              createTextVNode("\u2190 Boutique")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-8 grid gap-5 md:grid-cols-3"><div class="rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-6 text-white md:col-span-2"><p class="text-sm opacity-80">Carte fid\xE9lit\xE9</p><strong class="mt-3 block text-4xl">1 248</strong><span class="text-sm opacity-80">points disponibles</span><div class="mt-6 h-2 rounded-full bg-white/20"><div class="h-2 w-4/5 rounded-full bg-white"></div></div><p class="mt-2 text-xs opacity-80">252 points avant votre prochaine r\xE9compense</p></div><div class="rounded-3xl border border-white/10 bg-white/[0.04] p-6"><p class="text-sm text-slate-400">T\xE9l\xE9phone</p><strong class="mt-2 block">06 12 34 56 78</strong><p class="mt-5 text-sm text-slate-400">Membre depuis</p><strong class="mt-2 block">Mars 2026</strong></div></div><h2 class="mt-12 text-2xl font-black">Derni\xE8res commandes</h2><div class="mt-4 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"><!--[-->`);
      ssrRenderList(unref(orders$1), (order) => {
        _push(`<div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 p-5 last:border-0"><div><strong>${ssrInterpolate(order.id)}</strong><p class="text-sm text-slate-400">${ssrInterpolate(order.pickupSlot)}</p></div><span class="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">${ssrInterpolate(order.status === "ready" ? "Pr\xEAte" : "Retir\xE9e")}</span></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D1_fPtsG.mjs.map
