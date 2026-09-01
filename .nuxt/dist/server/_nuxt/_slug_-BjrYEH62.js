import { b as useCatalogStore, u as useCartStore, a as __nuxt_component_0, c as useCurrency } from "../server.mjs";
import { defineComponent, computed, mergeProps, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useRoute } from "vue-router";
import { a as useSeoMeta } from "./v3-BW50iGDy.js";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const catalog = useCatalogStore();
    useCartStore();
    const { formatPrice } = useCurrency();
    const product = computed(() => {
      return catalog.products.find(
        (item) => item.slug === route.params.slug
      );
    });
    useSeoMeta({
      title: () => product.value ? `${product.value.name} — Nox` : "Produit introuvable — Nox",
      description: () => product.value?.description ?? ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (product.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-6xl px-4 py-8 pb-28 sm:px-6 lg:px-8 lg:py-14" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "text-sm font-medium text-slate-400 transition hover:text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` ← Retour aux produits `);
            } else {
              return [
                createTextVNode(" ← Retour aux produits ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center"><div class="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"><div class="aspect-square"><img${ssrRenderAttr("src", product.value.image)}${ssrRenderAttr("alt", product.value.name)} class="h-full w-full object-cover"></div></div><div>`);
        if (product.value.featured) {
          _push(`<span class="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-black text-violet-400"> Produit populaire </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h1 class="mt-4 text-3xl font-black text-white sm:text-5xl">${ssrInterpolate(product.value.name)}</h1><p class="mt-4 text-3xl font-black text-white">${ssrInterpolate(unref(formatPrice)(product.value.price))}</p><p class="mt-6 leading-7 text-slate-400">${ssrInterpolate(product.value.description)}</p>`);
        if (product.value.stock > 0) {
          _push(`<div class="mt-6 flex items-center gap-2 text-sm font-bold text-emerald-400"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> Disponible en magasin </div>`);
        } else {
          _push(`<div class="mt-6 rounded-2xl border border-red-400/10 bg-red-400/5 p-4 text-sm font-bold text-red-300"> Ce produit est actuellement indisponible. </div>`);
        }
        _push(`<button type="button"${ssrIncludeBooleanAttr(product.value.stock <= 0) ? " disabled" : ""} class="mt-8 w-full rounded-2xl bg-white px-5 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.01] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40">${ssrInterpolate(product.value.stock > 0 ? "Ajouter au panier" : "Indisponible")}</button></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl px-4 py-20 text-center" }, _attrs))}><h1 class="text-2xl font-black text-white"> Produit introuvable </h1>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/products",
          class: "mt-5 inline-block text-violet-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Retour au catalogue `);
            } else {
              return [
                createTextVNode(" Retour au catalogue ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-BjrYEH62.js.map
