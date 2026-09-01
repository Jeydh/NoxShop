import { defineComponent, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';

const suppliers = [
  { id: "s1", name: "Distrib Express", contact: "commandes@distrib.example", status: "connected", products: 182 },
  { id: "s2", name: "Grossiste Local", contact: "03 00 00 00 01", status: "manual", products: 74 },
  { id: "s3", name: "Boissons & Co", contact: "api@boissons.example", status: "connected", products: 96 }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "suppliers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-black">Fournisseurs</h1><p class="mt-1 text-sm text-slate-500">Pr\xE9paration pour commandes et int\xE9grations API.</p><div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(suppliers), (supplier) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between"><h2 class="font-bold">${ssrInterpolate(supplier.name)}</h2><span class="rounded-full bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-700">${ssrInterpolate(supplier.status === "connected" ? "Connect\xE9" : "Manuel")}</span></div><p class="mt-3 text-sm text-slate-500">${ssrInterpolate(supplier.products)} produits</p><p class="mt-1 text-xs text-slate-400">${ssrInterpolate(supplier.contact)}</p><button class="mt-5 rounded-xl bg-slate-900 px-3 py-2 text-sm font-bold text-white">Nouvelle pr\xE9commande</button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/suppliers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=suppliers-Cyc_rWna.mjs.map
