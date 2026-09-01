import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "OrderStatusBadge",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    const props = __props;
    const labels = { pending: "À préparer", preparing: "En préparation", ready: "Prête", completed: "Retirée", cancelled: "Annulée" };
    const classes = computed(() => ({ pending: "bg-amber-50 text-amber-700", preparing: "bg-violet-50 text-violet-700", ready: "bg-emerald-50 text-emerald-700", completed: "bg-slate-100 text-slate-600", cancelled: "bg-red-50 text-red-700" })[props.status]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["inline-flex rounded-full px-2.5 py-1 text-xs font-bold", unref(classes)]
      }, _attrs))}>${ssrInterpolate(labels[__props.status])}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OrderStatusBadge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=OrderStatusBadge-CXF5wSxY.js.map
