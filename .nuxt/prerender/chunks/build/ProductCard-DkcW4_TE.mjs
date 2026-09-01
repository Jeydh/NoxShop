import { u as useCartStore, c as useCurrency, a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode, unref, toDisplayString, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    useCartStore();
    const { formatPrice } = useCurrency();
    const isAdding = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.055] hover:shadow-xl hover:shadow-violet-950/20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/products/${__props.product.slug}`,
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative aspect-square overflow-hidden bg-slate-800"${_scopeId}><img${ssrRenderAttr("src", __props.product.image)}${ssrRenderAttr("alt", __props.product.name)} loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105"${_scopeId}>`);
            if (__props.product.stock <= 0) {
              _push2(`<div class="absolute inset-0 flex items-center justify-center bg-slate-950/65 backdrop-blur-[2px]"${_scopeId}><span class="rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-black text-red-300"${_scopeId}> Indisponible </span></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (__props.product.featured && __props.product.stock > 0) {
              _push2(`<span class="absolute left-3 top-3 rounded-full bg-violet-500 px-2.5 py-1 text-[10px] font-black text-white shadow-lg shadow-violet-500/30"${_scopeId}> POPULAIRE </span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative aspect-square overflow-hidden bg-slate-800" }, [
                createVNode("img", {
                  src: __props.product.image,
                  alt: __props.product.name,
                  loading: "lazy",
                  class: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
                }, null, 8, ["src", "alt"]),
                __props.product.stock <= 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "absolute inset-0 flex items-center justify-center bg-slate-950/65 backdrop-blur-[2px]"
                }, [
                  createVNode("span", { class: "rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1.5 text-xs font-black text-red-300" }, " Indisponible ")
                ])) : createCommentVNode("", true),
                __props.product.featured && __props.product.stock > 0 ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "absolute left-3 top-3 rounded-full bg-violet-500 px-2.5 py-1 text-[10px] font-black text-white shadow-lg shadow-violet-500/30"
                }, " POPULAIRE ")) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `/products/${__props.product.slug}`,
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h3 class="line-clamp-2 min-h-10 text-sm font-bold text-white transition group-hover:text-violet-300"${_scopeId}>${ssrInterpolate(__props.product.name)}</h3><p class="mt-1 text-base font-black text-white"${_scopeId}>${ssrInterpolate(unref(formatPrice)(__props.product.price))}</p>`);
          } else {
            return [
              createVNode("h3", { class: "line-clamp-2 min-h-10 text-sm font-bold text-white transition group-hover:text-violet-300" }, toDisplayString(__props.product.name), 1),
              createVNode("p", { class: "mt-1 text-base font-black text-white" }, toDisplayString(unref(formatPrice)(__props.product.price)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button type="button"${ssrIncludeBooleanAttr(__props.product.stock <= 0 || isAdding.value) ? " disabled" : ""} class="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-xs font-black text-white transition hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/20 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white/10">`);
      if (isAdding.value) {
        _push(`<span> \u2713 Ajout\xE9 </span>`);
      } else if (__props.product.stock <= 0) {
        _push(`<span> Rupture </span>`);
      } else {
        _push(`<span> + Ajouter </span>`);
      }
      _push(`</button></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ProductCard-DkcW4_TE.mjs.map
