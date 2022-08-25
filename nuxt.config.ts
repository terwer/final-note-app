import {defineNuxtConfig} from 'nuxt'
// @ts-ignore
import vitePluginRequireTransform from 'vite-plugin-require-transform';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        preset: "vercel",
    },
    typescript: {
        strict: true
    },
    static: {
        prefix: false
    },
    publicRuntimeConfig: {
        SIYUAN_API_URL: process.env.SIYUAN_API_URL,
        SIYUAN_AUTH_TOKEN: process.env.SIYUAN_AUTH_TOKEN
    },
})
