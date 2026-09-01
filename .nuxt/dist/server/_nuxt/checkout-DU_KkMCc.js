import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { u as useCartStore, d as useRouter, c as useCurrency } from "../server.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-10 lg:py-16" }, _attrs))}><h1 class="text-4xl font-black">Retrait express</h1><p class="mt-2 text-slate-400">Quelques informations et votre commande est réservée.</p><form class="mt-8 space-y-5"><div class="grid gap-4 sm:grid-cols-2"><label>Prénom<input${ssrRenderAttr("value", unref(form).firstName)} required class="field" placeholder="Jean"></label><label>Nom<input${ssrRenderAttr("value", unref(form).lastName)} required class="field" placeholder="Dupont"></label></div><label>Téléphone<input${ssrRenderAttr("value", unref(form).phone)} required class="field" placeholder="06 12 34 56 78"></label><label>Email <span class="text-slate-500">(optionnel)</span><input${ssrRenderAttr("value", unref(form).email)} type="email" class="field" placeholder="jean@example.com"></label><div><p class="mb-2 font-semibold">Créneau de retrait</p><div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(slots, (slot) => {
        _push(`<button type="button" class="${ssrRenderClass(["rounded-2xl border p-4 text-left transition", unref(form).slot === slot ? "border-violet-400 bg-violet-500/10" : "border-white/10 bg-white/5"])}">${ssrInterpolate(slot)}</button>`);
      });
      _push(`<!--]--></div></div><button${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="w-full rounded-2xl bg-white px-5 py-4 font-black text-slate-950 transition hover:scale-[1.01] disabled:opacity-60">${ssrInterpolate(unref(loading) ? "Confirmation..." : `Confirmer · ${unref(formatPrice)(unref(cart).subtotal)}`)}</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=checkout-DU_KkMCc.js.map
