import { defineNuxtConfig } from "nuxt/config";
import { enabled } from "virtual:nuxt-pwa-configuration";
import fs from 'node:fs'
import path from 'node:path'

const baseURL = '/NoxShop/'

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vite-pwa/nuxt", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  app: {
    baseURL: baseURL,
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: `${baseURL}brand/icons/noxshop_icon_x48.png` },
        { rel: 'apple-touch-icon', href: `${baseURL}brand/icons/noxshop_icon_x192.png` }
      ]
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  runtimeConfig: {
    public: {
      appName: "Nox",
    },
  },
  routeRules: {
    "/admin/**": { ssr: false },
    "/account/**": { ssr: false },
  },
  pwa: {
    registerType: 'autoUpdate',
    scope: baseURL,
    base: baseURL,
    devOptions: { enabled: true },
    manifest: {
      short_name: "Nox",
      name: "Nox Shop",
      lang: "fr",
      background_color: "#080a0f",
      theme_color: "#080a0f",
      display: "standalone",
      icons: [
        {
          src: `${baseURL}/brand/icons/noxshop_icon_x192.png`,
          sizes: '192x192',
          type: 'image/png',
          purpose: "any"
        },
        {
          src: `${baseURL}/brand/icons/noxshop_icon_x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src:`${baseURL}/brand/icons/maskable_noxshop_icon_x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    },

  },
  hooks: {
    'nitro:build:public-assets': (nitro) => {
      // Déplace ou copie le manifest dans le bon dossier de destination static
      const outputDir = nitro.options.output.publicDir
      const manifestPath = path.join(outputDir, 'manifest.webmanifest')
      const targetDir = path.join(outputDir, baseURL)
      const targetPath = path.join(targetDir, 'manifest.webmanifest')

      if (fs.existsSync(manifestPath)) {
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true })
        }
        fs.copyFileSync(manifestPath, targetPath)
      }
    }
  }
})