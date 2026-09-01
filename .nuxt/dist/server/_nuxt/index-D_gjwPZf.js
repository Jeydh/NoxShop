import { _ as _sfc_main$1 } from "./ProductCard-DkcW4_TE.js";
import { defineComponent, ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { e as useRoute, d as useRouter, b as useCatalogStore, _ as _export_sfc } from "../server.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const catalog = useCatalogStore();
    const search = ref(
      typeof route.query.q === "string" ? route.query.q : ""
    );
    const selectedCategory = ref(
      typeof route.query.category === "string" ? route.query.category : "all"
    );
    const showAvailableOnly = ref(false);
    const sort = ref(
      "featured"
    );
    const categories = [
      {
        id: "all",
        name: "Tout",
        icon: "✨"
      },
      {
        id: "drinks",
        name: "Boissons",
        icon: "🥤"
      },
      {
        id: "snacking",
        name: "Snacking",
        icon: "🍿"
      },
      {
        id: "essential",
        name: "Nécessaire",
        icon: "🧰"
      },
      {
        id: "aperitif",
        name: "Apéro",
        icon: "🥜"
      },
      {
        id: "grocery",
        name: "Épicerie",
        icon: "🛒"
      }
    ];
    const filteredProducts = computed(() => {
      const query = search.value.trim().toLowerCase();
      const result = catalog.products.filter((product) => {
        const matchesCategory = selectedCategory.value === "all" || product.category === selectedCategory.value;
        const matchesSearch = !query || product.name.toLowerCase().includes(query);
        const matchesAvailability = !showAvailableOnly.value || product.stock > 0;
        return matchesCategory && matchesSearch && matchesAvailability;
      });
      return [...result].sort((a, b) => {
        switch (sort.value) {
          case "price-asc":
            return a.price - b.price;
          case "price-desc":
            return b.price - a.price;
          case "name":
            return a.name.localeCompare(b.name);
          case "featured":
          default:
            return Number(b.featured) - Number(a.featured);
        }
      }).map((product) => ({
        ...product,
        slug: product.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      }));
    });
    watch(
      [search, selectedCategory],
      () => {
        router.replace({
          query: {
            ...search.value ? { q: search.value } : {},
            ...selectedCategory.value !== "all" ? { category: selectedCategory.value } : {}
          }
        });
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-7xl px-4 py-8 pb-28 sm:px-6 lg:px-8" }, _attrs))} data-v-54530043><header data-v-54530043><p class="text-sm font-bold uppercase tracking-wider text-violet-400" data-v-54530043> Catalogue </p><div class="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-v-54530043><div data-v-54530043><h1 class="text-3xl font-black text-white sm:text-4xl" data-v-54530043> Tous les produits </h1><p class="mt-2 text-sm text-slate-400" data-v-54530043>${ssrInterpolate(filteredProducts.value.length)} ${ssrInterpolate(filteredProducts.value.length > 1 ? "produits" : "produit")}</p></div></div></header><div class="mt-8" data-v-54530043><label for="product-search" class="sr-only" data-v-54530043> Rechercher un produit </label><div class="relative" data-v-54530043><span class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-500" data-v-54530043> 🔎 </span><input id="product-search"${ssrRenderAttr("value", search.value)} type="search" placeholder="Rechercher un produit..." class="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-12 pr-12 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500/50 focus:bg-white/[0.06]" data-v-54530043>`);
      if (search.value) {
        _push(`<button type="button" class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white" data-v-54530043> ✕ </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="mt-5 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" data-v-54530043><div class="flex min-w-max gap-2" data-v-54530043><!--[-->`);
      ssrRenderList(categories, (category) => {
        _push(`<button type="button" class="${ssrRenderClass([
          "rounded-full px-4 py-2.5 text-sm font-bold transition-all duration-200",
          selectedCategory.value === category.id ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20 scale-[1.02]" : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.07] hover:text-white"
        ])}" data-v-54530043>${ssrInterpolate(category.icon)} ${ssrInterpolate(category.name)}</button>`);
      });
      _push(`<!--]--></div></div><div class="mt-6 flex flex-wrap items-center justify-between gap-3" data-v-54530043><label class="flex items-center gap-2 text-sm text-slate-400" data-v-54530043><input${ssrIncludeBooleanAttr(Array.isArray(showAvailableOnly.value) ? ssrLooseContain(showAvailableOnly.value, null) : showAvailableOnly.value) ? " checked" : ""} type="checkbox" class="h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-500" data-v-54530043> Disponibles uniquement </label><select class="rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-slate-300 outline-none focus:border-violet-500/50" data-v-54530043><option value="featured" data-v-54530043${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "featured") : ssrLooseEqual(sort.value, "featured")) ? " selected" : ""}> Pertinence </option><option value="price-asc" data-v-54530043${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "price-asc") : ssrLooseEqual(sort.value, "price-asc")) ? " selected" : ""}> Prix croissant </option><option value="price-desc" data-v-54530043${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "price-desc") : ssrLooseEqual(sort.value, "price-desc")) ? " selected" : ""}> Prix décroissant </option><option value="name" data-v-54530043${ssrIncludeBooleanAttr(Array.isArray(sort.value) ? ssrLooseContain(sort.value, "name") : ssrLooseEqual(sort.value, "name")) ? " selected" : ""}> Nom </option></select></div><div${ssrRenderAttrs({
        name: "products",
        class: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      })} data-v-54530043>`);
      ssrRenderList(filteredProducts.value, (product) => {
        _push(ssrRenderComponent(_component_ProductCard, {
          key: product.id,
          product
        }, null, _parent));
      });
      _push(`</div>`);
      if (filteredProducts.value.length === 0) {
        _push(`<div class="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center" data-v-54530043><div class="text-4xl" data-v-54530043> 🔎 </div><h2 class="mt-4 text-xl font-black text-white" data-v-54530043> Aucun produit trouvé </h2><p class="mx-auto mt-2 max-w-sm text-sm text-slate-400" data-v-54530043> Essayez une autre recherche ou sélectionnez une autre catégorie. </p><button type="button" class="mt-6 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]" data-v-54530043> Réinitialiser les filtres </button></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-54530043"]]);
export {
  index as default
};
//# sourceMappingURL=index-D_gjwPZf.js.map
