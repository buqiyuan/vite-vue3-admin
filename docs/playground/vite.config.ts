import fs from 'node:fs'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? 'vue3-antdv-admin-docs/playground' : '',
  plugins: [
    vue({
      script: {
        fs: {
          fileExists: fs.existsSync,
          readFile: (file) => fs.readFileSync(file, 'utf-8')
        }
      }
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false // css in js
        })
      ]
    }),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, './dist/*'),
          dest: resolve(__dirname, '../.vitepress/dist/playground')
        }
      ]
    })
  ],
  define: {
    __VUE_PROD_DEVTOOLS__: JSON.stringify(true)
  },
  optimizeDeps: {
    exclude: ['@vue/repl']
  }
})
