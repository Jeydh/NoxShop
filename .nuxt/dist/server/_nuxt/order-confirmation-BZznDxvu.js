import { e as useRoute, a as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "order-confirmation",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const name = computed(() => String(route.query.name ?? "vous"));
    const code = computed(() => String(route.query.code ?? "7394"));
    const slot = computed(() => String(route.query.slot ?? "le créneau choisi"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-xl px-4 py-20 text-center" }, _attrs))}><div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-400/10 text-4xl text-emerald-300">✓</div><p class="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Commande confirmée</p><h1 class="mt-2 text-4xl font-black">À tout à l&#39;heure, ${ssrInterpolate(unref(name))} 👋</h1><p class="mt-4 text-slate-400">Votre commande est réservée pour <strong class="text-white">${ssrInterpolate(unref(slot))}</strong>.</p><div class="mx-auto mt-8 max-w-xs rounded-3xl border border-white/10 bg-white/[0.04] p-6"><p class="text-xs uppercase tracking-widest text-slate-500">Code de retrait</p><strong class="mt-2 block text-5xl tracking-[0.2em] text-violet-300">${ssrInterpolate(unref(code))}</strong></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "mt-8 inline-block rounded-2xl bg-white px-5 py-3 font-bold text-slate-950"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Retour au catalogue`);
          } else {
            return [
              createTextVNode("Retour au catalogue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/order-confirmation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=order-confirmation-BZznDxvu.js.map
