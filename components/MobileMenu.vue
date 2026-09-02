<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="mobile-overlay">
      <div
        v-if="open"
        class="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
        aria-hidden="true"
        @click="close"
      />
    </Transition>

    <!-- Drawer -->
    <Transition name="mobile-drawer">
      <aside
        v-if="open"
        class="fixed inset-y-0 right-0 z-[90] flex w-[85vw] max-w-sm flex-col bg-slate-950 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <!-- Header du menu -->
        <div
          class="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-black text-white"
            >
              N
            </div>

            <div>
              <div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {{ eyebrow }}
              </div>

              <div class="font-black text-white">
                {{ title }}
              </div>
            </div>
          </div>

          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-2xl text-slate-300 transition hover:bg-white/10 hover:text-white active:scale-95"
            aria-label="Fermer le menu"
            @click="close"
          >
            ×
          </button>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto p-4">
          <div class="space-y-2">
            <NuxtLink
              v-for="item in items"
              :key="item.to"
              :to="item.to"
              class="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all duration-200"
              :class="
                isActive(item.to)
                  ? 'bg-violet-500/15 text-white'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              "
              @click="close"
            >
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200"
                :class="
                  isActive(item.to)
                    ? 'bg-gradient-to-br from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/20'
                    : 'bg-white/5 group-hover:bg-white/10'
                "
              >
                {{ item.icon }}
              </span>

              <div class="min-w-0 flex-1">
                <div class="font-semibold">
                  {{ item.label }}
                </div>

                <div
                  v-if="item.description"
                  class="mt-0.5 truncate text-xs text-slate-500"
                >
                  {{ item.description }}
                </div>
              </div>

              <span
                class="text-slate-700 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-slate-400"
              >
                →
              </span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Footer optionnel -->
        <div
          v-if="$slots.footer"
          class="shrink-0 border-t border-white/10 p-4"
        >
          <slot name="footer" />
        </div>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface MenuItem {
  label: string
  to: string
  icon?: string
  description?: string
}

const props = withDefaults(
  defineProps<{
    open: boolean
    items: MenuItem[]
    title?: string
    eyebrow?: string
  }>(),
  {
    title: 'Menu',
    eyebrow: 'Navigation',
  },
)

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()

const close = () => {
  emit('close')
}

const isActive = (to: string) => {
  if (to === '/') {
    return route.path === '/'
  }

  return route.path === to || route.path.startsWith(`${to}/`)
}

/*
 * Ferme automatiquement le menu lorsqu'une route change.
 */
watch(
  () => route.fullPath,
  () => {
    if (props.open) {
      close()
    }
  },
)

/*
 * Fermeture avec Escape.
 */
const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.open) {
    close()
  }
}

/*
 * Empêche le scroll de la page lorsque le drawer est ouvert.
 */
watch(
  () => props.open,
  (isOpen) => {
    if (!import.meta.client) {
      return
    }

    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)

  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
.mobile-overlay-enter-active,
.mobile-overlay-leave-active {
  transition: opacity 200ms ease;
}

.mobile-overlay-enter-from,
.mobile-overlay-leave-to {
  opacity: 0;
}

.mobile-drawer-enter-active,
.mobile-drawer-leave-active {
  transition:
    transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 200ms ease;
}

.mobile-drawer-enter-from,
.mobile-drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>