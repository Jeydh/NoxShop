import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "invoices",
  __ssrInlineRender: true,
  setup(__props) {
    const invoices = [{ id: "FAC-2026-0084", customer: "Jean Dupont", date: "25/08/2026", amount: "8,20 €" }, { id: "FAC-2026-0083", customer: "Sophie Martin", date: "25/08/2026", amount: "6,90 €" }];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-black">Facturation</h1><p class="mt-1 text-sm text-slate-500">Factures mockées, prête à être reliée à une API de paiement/comptabilité.</p><div class="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><!--[-->`);
      ssrRenderList(invoices, (invoice) => {
        _push(`<div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-4 last:border-0"><div><strong>${ssrInterpolate(invoice.id)}</strong><p class="text-sm text-slate-500">${ssrInterpolate(invoice.customer)} · ${ssrInterpolate(invoice.date)}</p></div><strong>${ssrInterpolate(invoice.amount)}</strong><button class="rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold">Aperçu</button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/invoices.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=invoices-447S6UcH.js.map
