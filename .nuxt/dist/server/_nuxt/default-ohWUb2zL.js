import { u as useCartStore, a as __nuxt_component_0 } from "../server.mjs";
import { ref, computed, defineComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, Transition, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
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
const useShopStatus = () => {
  const now = ref(/* @__PURE__ */ new Date());
  const isOpen = computed(() => {
    const hour = now.value.getHours();
    return hour >= 8 || hour < 2;
  });
  const statusText = computed(() => isOpen.value ? "Ouvert — ferme à 02h00" : "Fermé — ouvre demain à 08h00");
  return { isOpen, statusText };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const cart = useCartStore();
    const { isOpen, statusText } = useShopStatus();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-nox-950 text-slate-100" }, _attrs))}><header class="sticky top-0 z-40 border-b border-white/5 bg-nox-950/85 backdrop-blur-xl"><div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "group flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black shadow-glow transition-transform group-hover:scale-105"${_scopeId}> N</div><div${_scopeId}><div class="font-black tracking-tight"${_scopeId}>NOX</div><div class="text-[10px] uppercase tracking-[0.2em] text-slate-500"${_scopeId}>Night Shop</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black shadow-glow transition-transform group-hover:scale-105" }, " N"),
              createVNode("div", null, [
                createVNode("div", { class: "font-black tracking-tight" }, "NOX"),
                createVNode("div", { class: "text-[10px] uppercase tracking-[0.2em] text-slate-500" }, "Night Shop")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-3"><span class="${ssrRenderClass(["hidden rounded-full px-3 py-1.5 text-xs font-semibold sm:inline-flex", unref(isOpen) ? "bg-emerald-400/10 text-emerald-300" : "bg-red-400/10 text-red-300"])}"><span class="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-current"></span>${ssrInterpolate(unref(statusText))}</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/cart",
        class: "relative rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:scale-105 hover:bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 🛒 `);
            if (unref(cart).count) {
              _push2(`<span class="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold"${_scopeId}>${ssrInterpolate(unref(cart).count)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createTextVNode(" 🛒 "),
              createVNode(Transition, { name: "pop" }, {
                default: withCtx(() => [
                  unref(cart).count ? (openBlock(), createBlock("span", {
                    key: unref(cart).count,
                    class: "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-[10px] font-bold"
                  }, toDisplayString(unref(cart).count), 1)) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header><main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-white/5 py-10 text-center text-xs text-slate-500"> © 2026 Nox · Démonstration · `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/admin",
        class: "relative rounded-2xl border border-white/10 bg-white/5 p-2.5 transition hover:scale-105 hover:bg-white/10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 🔑 `);
          } else {
            return [
              createVNode(Transition, { name: "pop" }, {
                default: withCtx(() => [
                  createTextVNode(" 🔑 ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-ohWUb2zL.js.map
