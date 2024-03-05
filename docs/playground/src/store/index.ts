import {
  useStore as useReplStore,
  File,
  compileFile,
  useVueImportMap,
  mergeImportMap
} from '@vue/repl'
import type { Store, OutputModes, SFCOptions } from '@vue/repl'
import { computed, ref, watch, watchEffect } from 'vue'
import mainCode from '../template/main.vue?raw'
import setupCode from '../template/setup?raw'
import welcomeCode from '../template/welcome.vue?raw'
import { Modal } from 'ant-design-vue'

// retrieve some configuration options from the URL
const query = new URLSearchParams(location.search)
const MAIN_FILE = 'src/PlaygroundMain.vue'
const APP_FILE = 'src/App.vue'
const SETUP_FILE = 'src/setup.ts'
const IMPORT_MAP_FILE = 'import-map.json'

const isBuiltinFile = (filename: string) => {
  return [MAIN_FILE, APP_FILE, SETUP_FILE, IMPORT_MAP_FILE].includes(
    filename
  )
}

export const useStore = () => {
  const typescriptVersion = ref('5.2.2')
  const antdVersion = ref('4.1.2')
  const adminPkgVersion = ref('latest')
  const files = ref<Record<string, File>>({
    [APP_FILE]: new File(APP_FILE, welcomeCode)
  })
  const template = ref({
    welcomeSFC: welcomeCode
  })

  const {
    importMap: builtinImportMap,
    vueVersion,
    productionMode,
    defaultVersion
  } = useVueImportMap({
    vueVersion: '3.4.19',
    // specify the default URL to import Vue runtime from in the sandbox
    // default is the CDN link from jsdelivr.com with version matching Vue's version
    // from peerDependency
    runtimeDev:
      'https://unpkg.com/vue@latest/dist/vue.runtime.esm-browser.js',
    runtimeProd:
      'https://unpkg.com/vue@latest/dist/vue.runtime.esm-browser.prod.js',
    serverRenderer:
      'https://unpkg.com/vue@latest/dist/server-renderer.esm-browser.js'
  })

  const sfcOptions = ref<SFCOptions>({
    script: {
      inlineTemplate: productionMode.value,
      isProd: productionMode.value,
      propsDestructure: true
    },
    style: {
      isProd: productionMode.value
    },
    template: {
      isProd: productionMode.value,
      compilerOptions: {
        isCustomElement: (tag: string) => tag === 'mjx-container'
      }
    }
  })

  const store = useReplStore(
    {
      // pre-set import map
      builtinImportMap,
      vueVersion,
      typescriptVersion,
      template,
      files,
      sfcOptions,
      // starts on the output pane (mobile only) if the URL has a showOutput query
      showOutput: ref(query.has('showOutput')),
      // starts on a different tab on the output pane if the URL has a outputMode query
      // and default to the "preview" tab
      outputMode: ref(
        (query.get('outputMode') as OutputModes) || 'preview'
      ),
      dependencyVersion: computed(() => ({
        '@admin-pkg/components': adminPkgVersion.value,
        'ant-design-vue': antdVersion.value
      }))
    },
    // initialize repl with previously serialized state
    location.hash
  )

  store.deleteFile = (filename) => {
    if (isBuiltinFile(filename)) {
      return Modal.warning({
        title: '内置文件，不允许删除',
        centered: true
      })
    }

    Modal.confirm({
      title: 'Delete File',
      centered: true,
      content: `Are you sure you want to delete ${filename.replace(
        /^src\//,
        ''
      )}?`,
      onOk() {
        if (store.activeFile.filename === filename) {
          store.setActive(APP_FILE)
        }
        Reflect.deleteProperty(files.value, filename)
      }
    })
  }

  const initFiles = () => {
    const mainFile = new File(MAIN_FILE, mainCode, true)
    store.addFile(mainFile)
    compileFile(store, mainFile)
    store.mainFile = MAIN_FILE
  }

  const genSetupCode = () => {
    return setupCode
      .replace('__ANTDV_VERSION__', antdVersion.value)
      .replace('__ADMIN_PKG_VERSION__', adminPkgVersion.value)
  }

  watchEffect(() => history.replaceState({}, '', store.serialize()))

  watch(
    [antdVersion, adminPkgVersion],
    async ([antdVer, adminPkgVer]) => {
      const importMapCode = mergeImportMap(
        { ...builtinImportMap.value },
        {
          imports: {
            'ant-design-vue': `https://cdn.jsdelivr.net/npm/ant-design-vue@${antdVer}/dist/antd.esm.js`,
            '@admin-pkg/components': `https://cdn.jsdelivr.net/npm/@admin-pkg/components@${adminPkgVer}/dist/index.es.js`
          }
        }
      )
      const importMapFile = new File(
        IMPORT_MAP_FILE,
        JSON.stringify(importMapCode, null, 2),
        true
      )
      store.addFile(importMapFile)

      const setupFile = new File(SETUP_FILE, genSetupCode(), true)
      store.addFile(setupFile)
      await compileFile(store, setupFile)
    },
    { immediate: true }
  )

  initFiles()

  return {
    vueVersion,
    typescriptVersion,
    antdVersion,
    adminPkgVersion,
    productionMode,
    defaultVersion,
    template,
    store,
    sfcOptions
  }
}
