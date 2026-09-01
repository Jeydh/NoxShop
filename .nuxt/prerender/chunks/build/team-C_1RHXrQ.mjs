import { defineComponent, unref, useSSRContext } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'file:///home/jeydh/projects/nox-shop/node_modules/vue/server-renderer/index.mjs';
import { u as users, r as roleLabels } from './users-CW0tpuyF.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-3xl font-black">\xC9quipe</h1><p class="mt-1 text-sm text-slate-500">Comptes et permissions mock\xE9s.</p><div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(users), (user) => {
        _push(`<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center gap-3"><div class="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">${ssrInterpolate(user.name.split(" ").map((x) => x[0]).join(""))}</div><div><strong>${ssrInterpolate(user.name)}</strong><p class="text-sm text-slate-500">${ssrInterpolate(unref(roleLabels)[user.role])}</p></div></div><div class="mt-5 flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(user.permissions.slice(0, 5), (permission) => {
          _push(`<span class="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">${ssrInterpolate(permission)}</span>`);
        });
        _push(`<!--]-->`);
        if (user.permissions.length > 5) {
          _push(`<span class="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-500">+${ssrInterpolate(user.permissions.length - 5)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/team.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=team-C_1RHXrQ.mjs.map
