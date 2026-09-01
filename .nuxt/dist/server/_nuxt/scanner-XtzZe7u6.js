import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
import { b as useCatalogStore } from "../server.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/jeydh/projects/nox-shop/node_modules/unctx/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/jeydh/projects/nox-shop/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/jeydh/projects/nox-shop/node_modules/ufo/dist/index.mjs";
import "/home/jeydh/projects/nox-shop/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scanner",
  __ssrInlineRender: true,
  setup(__props) {
    useCatalogStore();
    const barcode = ref("");
    const product = ref(null);
    const message = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-3xl" }, _attrs))}><h1 class="text-3xl font-black">Scanner stock</h1><p class="mt-1 text-sm text-slate-500">Démo prête à recevoir un scanner caméra natif.</p><div class="mt-6 overflow-hidden rounded-3xl bg-slate-950 p-4 text-white shadow-xl"><div class="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-slate-900"><div class="absolute inset-x-10 top-1/2 h-0.5 bg-violet-400 shadow-glow"></div><div class="text-center"><div class="text-6xl">📷</div><p class="mt-4 font-bold">Cadrez un code-barres</p><p class="mt-1 text-sm text-slate-500">Caméra réelle à connecter via BarcodeDetector / librairie dédiée.</p></div></div><div class="mt-4 flex gap-2"><input${ssrRenderAttr("value", unref(barcode))} class="field-dark flex-1" placeholder="Entrer un code manuellement"><button class="rounded-xl bg-white px-4 font-bold text-slate-950">Rechercher</button></div></div>`);
      if (unref(product)) {
        _push(`<div class="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex gap-4"><img${ssrRenderAttr("src", unref(product).image)} class="h-20 w-20 rounded-xl object-cover"><div><h2 class="font-bold">${ssrInterpolate(unref(product).name)}</h2><p class="text-sm text-slate-500">Stock : ${ssrInterpolate(unref(product).stock)}</p></div></div><div class="mt-5 flex gap-2"><button class="rounded-xl bg-emerald-600 px-4 py-2.5 font-bold text-white">+1 réception</button><button class="rounded-xl bg-slate-100 px-4 py-2.5 font-bold">+10 réception</button></div></div>`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=scanner-XtzZe7u6.js.map
