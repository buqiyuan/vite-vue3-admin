import { getCurrentInstance } from 'vue'
import * as Antdv from 'ant-design-vue'

let installed = false

const styleMap = {
  'ant-design-vue': '__ANTDV_VERSION__/dist/reset.css',
  '@admin-pkg/components': '__ADMIN_PKG_VERSION__/dist/style.css'
}
await Promise.all(
  Object.entries(styleMap).map(async ([pkg, version]) => {
    await loadStyle(pkg, version)
  })
)

export function setupAntdv() {
  if (installed) return
  const instance = getCurrentInstance()
  instance?.appContext.app.use(Antdv)
  installed = true
}

function loadStyle(pkg: string, version: string) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = `https://cdn.jsdelivr.net/npm/${pkg}@${version}`
  document.head.append(link)
}
