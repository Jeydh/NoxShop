import { _ as _sfc_main$1 } from "./OrderStatusBadge-CXF5wSxY.js";
import { defineComponent, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { o as orders } from "./orders-Yc-VDwJ6.js";
import "/home/jeydh/projects/nox-shop/node_modules/hookable/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "orders",
  __ssrInlineRender: true,
  setup(__props) {
    const actionLabel = (status) => ({ pending: "Commencer", preparing: "Marquer prête", ready: "Remettre au client", completed: "Terminée", cancelled: "Annulée" })[status];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_OrderStatusBadge = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-black">Commandes</h1><p class="mt-1 text-sm text-slate-500">Préparation et suivi des retraits.</p><div class="mt-6 grid gap-4"><!--[-->`);
      ssrRenderList(unref(orders), (order) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex flex-wrap items-center justify-between gap-3"><div><strong>${ssrInterpolate(order.id)}</strong><p class="mt-1 text-sm text-slate-500">${ssrInterpolate(order.customerName)} · ${ssrInterpolate(order.phone)}</p></div>`);
        _push(ssrRenderComponent(_component_OrderStatusBadge, {
          status: order.status
        }, null, _parent));
        _push(`</div><div class="mt-4 grid gap-4 md:grid-cols-[1fr_auto]"><div class="rounded-xl bg-slate-50 p-4"><p class="text-xs uppercase tracking-widest text-slate-400">Retrait</p><strong class="mt-1 block">${ssrInterpolate(order.pickupSlot)}</strong><p class="mt-3 text-xs uppercase tracking-widest text-slate-400">Code</p><strong class="mt-1 block text-xl tracking-widest text-violet-600">${ssrInterpolate(order.pickupCode)}</strong></div><div class="flex items-end gap-2"><button class="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white">${ssrInterpolate(actionLabel(order.status))}</button></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/orders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=orders-Btc5rahc.js.map
