<script setup lang="ts">
import Header from './components/Header.vue'
import { Repl, ReplProps } from '@vue/repl'
import { ref, onMounted, computed } from 'vue'
import Monaco from '@vue/repl/monaco-editor'
import { useStore } from './store/'

const { store, productionMode, antdVersion, adminPkgVersion } = useStore()

const replRef = ref<InstanceType<typeof Repl>>()

console.log('replRef', replRef)

const setVH = () => {
  document.documentElement.style.setProperty(
    '--vh',
    window.innerHeight + `px`
  )
}
window.addEventListener('resize', setVH)
setVH()

// console.log('store', store)

const previewOptions = computed<ReplProps['previewOptions']>(() => {
  return {
    customCode: {
      importCode: `import { initCustomFormatter } from 'vue'`,
      useCode: `initCustomFormatter()`
    }
  }
})

function reloadPage() {
  replRef.value?.reload()
}

const theme = ref<'dark' | 'light'>('dark')
function toggleTheme(isDark: boolean) {
  theme.value = isDark ? 'dark' : 'light'
}
onMounted(() => {
  const cls = document.documentElement.classList
  toggleTheme(cls.contains('dark'))
})
</script>

<template>
  <Header
    :store="store"
    v-model:antdVersion="antdVersion"
    v-model:adminPkgVersion="adminPkgVersion"
    :prod="productionMode"
    @toggle-theme="toggleTheme"
    @reload-page="reloadPage"
  />
  <Repl
    ref="replRef"
    :theme="theme"
    :editor="Monaco"
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
    :store="store"
    :showCompileOutput="true"
    :autoResize="true"
    :clearConsole="false"
    :preview-options="previewOptions"
  />
</template>

<style>
.dark {
  color-scheme: dark;
}

body {
  --base: #444;
  --nav-height: 50px;

  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 13px;
}

.vue-repl {
  height: calc(var(--vh) - var(--nav-height)) !important;
}

button {
  margin: 0;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
