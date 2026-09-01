import { u as useCartStore, b as useCatalogStore, c as useCurrency, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
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
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const catalog = useCatalogStore();
    const { formatPrice } = useCurrency();
    const cartLines = computed(() => {
      return Object.entries(cart.items).map(([id, quantity]) => {
        const product = catalog.products.find(
          (item) => item.id === id
        );
        if (!product) {
          return null;
        }
        return {
          product,
          quantity
        };
      }).filter(
        (item) => item !== null
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-5xl px-4 py-8 pb-20 sm:px-6 lg:px-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/products",
        class: "inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u2190 Continuer mes achats `);
          } else {
            return [
              createTextVNode(" \u2190 Continuer mes achats ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-6"><p class="text-sm font-bold uppercase tracking-wider text-violet-400"> Commande </p><h1 class="mt-1 text-3xl font-black text-white sm:text-4xl"> Votre panier </h1></div>`);
      if (cartLines.value.length === 0) {
        _push(`<div class="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center"><div class="text-5xl"> \u{1F6D2} </div><h2 class="mt-5 text-xl font-black text-white"> Votre panier est vide </h2><p class="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-400"> Ajoutez quelques produits et votre commande appara\xEEtra ici. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "mt-6 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Voir les produits `);
            } else {
              return [
                createTextVNode(" Voir les produits ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="mt-8 grid gap-6 lg:grid-cols-[1fr_340px]"><section class="space-y-3"><div class="space-y-3"><!--[-->`);
        ssrRenderList(cartLines.value, (item) => {
          _push(`<article class="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 sm:gap-4 sm:p-4">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/products/${item.product.slug}`,
            class: "h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-800 sm:h-28 sm:w-28"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", item.product.image)}${ssrRenderAttr("alt", item.product.name)} class="h-full w-full object-cover transition duration-300 hover:scale-105"${_scopeId}>`);
              } else {
                return [
                  createVNode("img", {
                    src: item.product.image,
                    alt: item.product.name,
                    class: "h-full w-full object-cover transition duration-300 hover:scale-105"
                  }, null, 8, ["src", "alt"])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<div class="min-w-0 flex-1"><div class="flex items-start justify-between gap-3"><div class="min-w-0">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/products/${item.product.slug}`,
            class: "line-clamp-2 text-sm font-bold text-white transition hover:text-violet-300 sm:text-base"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.product.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.product.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(formatPrice)(item.product.price))} / unit\xE9 </p></div><button type="button" class="shrink-0 text-xs text-slate-600 transition hover:text-red-400" aria-label="Supprimer le produit"> \u2715 </button></div><div class="mt-4 flex items-center justify-between gap-3"><div class="flex items-center rounded-xl border border-white/10 bg-white/[0.03]"><button type="button" class="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:text-white"> \u2212 </button><span class="min-w-8 text-center text-sm font-black text-white">${ssrInterpolate(item.quantity)}</span><button type="button" class="flex h-9 w-9 items-center justify-center text-slate-400 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"${ssrIncludeBooleanAttr(item.quantity >= item.product.stock) ? " disabled" : ""}> + </button></div><strong class="text-sm font-black text-white sm:text-base">${ssrInterpolate(unref(formatPrice)(
            item.product.price * item.quantity
          ))}</strong></div></div></article>`);
        });
        _push(`<!--]--></div><button type="button" class="text-xs font-bold text-slate-600 transition hover:text-red-400"> Vider le panier </button></section><aside class="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-5 lg:sticky lg:top-24"><h2 class="font-black text-white"> R\xE9capitulatif </h2><div class="mt-5 space-y-3 text-sm"><div class="flex justify-between gap-4 text-slate-400"><span>${ssrInterpolate(unref(cart).count)} ${ssrInterpolate(unref(cart).count > 1 ? "articles" : "article")}</span><span class="text-white">${ssrInterpolate(unref(formatPrice)(unref(cart).subtotal))}</span></div><div class="flex justify-between gap-4 text-slate-400"><span> Retrait en magasin </span><span class="font-bold text-emerald-400"> Gratuit </span></div></div><div class="my-5 h-px bg-white/10"></div><div class="flex items-end justify-between gap-4"><span class="text-sm font-bold text-slate-400"> Total </span><span class="text-2xl font-black text-white">${ssrInterpolate(unref(formatPrice)(unref(cart).subtotal))}</span></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/checkout",
          class: "mt-6 block rounded-2xl bg-violet-500 px-5 py-4 text-center text-sm font-black text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400 hover:scale-[1.01] active:scale-[0.98]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Choisir le retrait \u2192 `);
            } else {
              return [
                createTextVNode(" Choisir le retrait \u2192 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="mt-3 text-center text-[11px] leading-5 text-slate-600"> Votre commande sera pr\xE9par\xE9e avant votre arriv\xE9e. </p></aside></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-r3Foe3mL.mjs.map
