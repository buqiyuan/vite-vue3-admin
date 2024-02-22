import { defineConfig } from 'vitepress'
import path from 'node:path'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? '/vue3-antdv-admin-docs' : '',
  title: 'Vue3 Antdv Admin',
  description: '一个优雅、清新、漂亮的中后台模版',
  ignoreDeadLinks: [
    // 自定义函数，忽略所有包含 "/playground/" 的链接
    (url) => {
      return url.toLowerCase().includes('/playground/')
    }
  ],
  head: [
    ['meta', { name: 'author', content: 'Vue3 Antdv Admin' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'buqiyuan, vue3-antdv-admin, vite, vue, vue3, vue3-antdv-admin docs'
      }
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  srcDir: `${path.resolve(process.cwd())}/src`,
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    editLink: {
      text: '为此页提供修改建议',
      pattern:
        'https://github.com/buqiyuan/vue3-antdv-admin-docs/tree/main/src/:path'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/buqiyuan/vue3-antdv-admin'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT buqiyuan'
    },
    nav: [
      {
        text: '项目指南',
        link: '/guide/getting-started',
        activeMatch: '/guide/'
      },
      {
        text: '相关链接',
        items: [
          {
            text: '预览地址',
            link: 'https://buqiyuan.gitee.io/vue3-antdv-admin'
          },
          {
            text: '前端源码',
            link: 'https://github.com/buqiyuan/vue3-antdv-admin'
          },
          {
            text: '后端源码',
            link: 'https://github.com/buqiyuan/nest-admin'
          },
          {
            text: '文档源码',
            link: 'https://github.com/buqiyuan/vue3-antdv-admin-docs'
          },
          {
            text: '更新日志',
            link: 'https://github.com/buqiyuan/vue3-antdv-admin/blob/main/CHANGELOG.md'
          }
        ]
      },
      {
        text: '赞助',
        link: '/other/donate'
      }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          {
            text: '介绍',
            link: '/guide/introduction'
          },
          {
            text: '开始',
            link: '/guide/getting-started'
          },
          { text: 'mock服务', link: '/guide/mock-service' },
          { text: '接口管理', link: '/guide/api-manage' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'Table', link: '/components/table' },
          { text: 'Form', link: '/components/form' }
        ]
      }
    ]
  }
})
