<template>
  <div class="tabs-view">
    <a-tabs
      v-model:activeKey="activeKey"
      hide-add
      type="editable-card"
      class="tabs"
      @change="changePage"
      @edit="editTabItem"
    >
      <template v-for="(pageItem, index) in tabsList" :key="pageItem.fullPath">
        <a-tab-pane>
          <template #tab>
            <a-dropdown :trigger="['contextmenu']">
              <div style="display: inline-block">
                {{ pageItem.meta?.title }}
              </div>
              <template #overlay>
                <a-menu style="user-select: none">
                  <a-menu-item
                    key="1"
                    :disabled="activeKey !== pageItem.fullPath"
                    @click="reloadPage"
                  >
                    <reload-outlined />
                    刷新
                  </a-menu-item>
                  <a-menu-item key="2" @click="removeTab(pageItem)">
                    <close-outlined />
                    关闭
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="3" @click="closeLeft(pageItem, index)">
                    <vertical-right-outlined />
                    关闭左侧
                  </a-menu-item>
                  <a-menu-item key="4" @click="closeRight(pageItem, index)">
                    <vertical-left-outlined />
                    关闭右侧
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="5" @click="closeOther(pageItem)">
                    <column-width-outlined />
                    关闭其他
                  </a-menu-item>
                  <a-menu-item key="6" @click="closeAll">
                    <minus-outlined />
                    关闭全部
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <!--          <span @contextmenu="rightClick" style="display: inline-block" :pagekey="pageItem.fullPath">{{pageItem.meta.title}}</span>-->
          </template>
        </a-tab-pane>
      </template>

      <template #tabBarExtraContent>
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click.prevent>
            <down-outlined :style="{ fontSize: '20px' }" />
          </a>
          <template #overlay>
            <a-menu style="user-select: none">
              <a-menu-item key="1" :disabled="activeKey !== route.fullPath" @click="reloadPage">
                <reload-outlined />
                刷新
              </a-menu-item>
              <a-menu-item key="2" @click="removeTab(route)">
                <close-outlined />
                关闭
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="5" @click="closeOther(route)">
                <column-width-outlined />
                关闭其他
              </a-menu-item>
              <a-menu-item key="6" @click="closeAll">
                <minus-outlined />
                关闭全部
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </template>
    </a-tabs>
    <div class="tabs-view-content">
      <a-card>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, unref, provide, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import components from '@/layout/tabs/components'
import { Storage } from '@/utils/Storage'
import { TABS_ROUTES } from '@/store/mutation-types'
import { useStore } from '@/store'
import { RouteItem } from '@/store/modules/tabs-view/state'

import { message } from 'ant-design-vue'

export default defineComponent({
  name: 'TabsView',
  components: {
    ...components
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    // const tabsViewMutations = mapMutations(['addTabs','closeLeftTabs','closeRightTabs','closeOtherTabs','initTabs','closeCurrentTabs','closeAllTabs'])

    // 获取简易的路由对象
    const getSimpleRoute = (route): RouteItem => {
      const { fullPath, hash, meta, name, params, path, query } = route
      return { fullPath, hash, meta, name, params, path, query }
    }

    let routes: RouteItem[] = []

    try {
      const routesStr = Storage.get(TABS_ROUTES) as string | null | undefined
      routes = routesStr ? JSON.parse(routesStr) : [getSimpleRoute(route)]
    } catch (e) {
      routes = [getSimpleRoute(route)]
    }

    // 初始化标签页
    store.commit('tabsView/initTabs', routes)
    // tabsViewMutations.initTabs(routes)

    const state = reactive({
      activeKey: route.fullPath
    })

    // 移除缓存组件名称
    const delKeepAliveCompName = () => {
      if (route.meta.keepAlive) {
        const name = router.currentRoute.value.matched.find((item) => item.name == route.name)
          ?.components?.default.name
        if (name) {
          store.state.asyncRoute.keepAliveComponents =
            store.state.asyncRoute.keepAliveComponents.filter((item) => item != name)
        }
      }
    }

    // 标签页列表
    const tabsList = computed(() => store.state.tabsView.tabsList)
    console.log(tabsList.value, 'tabsList')

    watch(
      () => route.fullPath,
      () => {
        // 不存在的路由
        const notFondRoutes: string[] = []
        tabsList.value.forEach((item) => {
          if (!router.hasRoute(item.name)) {
            notFondRoutes.push(item.name)
          }
        })
        // 过滤不存在的路由
        if (notFondRoutes.length) {
          store.commit(
            'tabsView/initTabs',
            tabsList.value.filter((item) => !notFondRoutes.includes(item.name))
          )
        }
      }
    )

    const whiteList = ['Redirect', 'login']

    watch(
      () => route.fullPath,
      (to, from) => {
        if (whiteList.includes(route.name as string)) return
        state.activeKey = to
        // tabsViewMutations.addTabs(getSimpleRoute(route))
        store.commit('tabsView/addTabs', getSimpleRoute(route))
      },
      { immediate: true }
    )

    // 在页面关闭或刷新之前，保存数据
    window.addEventListener('beforeunload', () => {
      Storage.set(TABS_ROUTES, JSON.stringify(tabsList.value))
    })

    // 关闭当前页面
    const removeTab = (route) => {
      if (tabsList.value.length === 1) {
        return message.warning('这已经是最后一页，不能再关闭了！')
      }
      delKeepAliveCompName()
      // tabsViewMutations.closeCurrentTabs(route)
      store.commit('tabsView/closeCurrentTab', route)
      // 如果关闭的是当前页
      if (state.activeKey === route.fullPath) {
        const currentRoute = tabsList.value[Math.max(0, tabsList.value.length - 1)]
        state.activeKey = currentRoute.fullPath
        router.push(currentRoute)
      }
    }
    // tabs 编辑（remove || add）
    const editTabItem = (targetKey, action: string) => {
      if (action == 'remove') {
        removeTab(tabsList.value.find((item) => item.fullPath == targetKey))
      }
    }
    // 切换页面
    const changePage = (key) => {
      state.activeKey = key
      router.push(key)
    }

    // 刷新页面
    const reloadPage = () => {
      delKeepAliveCompName()
      router.push({
        path: '/redirect' + unref(route).fullPath
      })
    }
    // 注入刷新页面方法
    provide('reloadPage', reloadPage)

    // 关闭左侧
    const closeLeft = (route, index) => {
      // tabsViewMutations.closeLeftTabs(route)
      store.commit('tabsView/closeLeftTabs', route)
      state.activeKey = route.fullPath
      router.replace(route.fullPath)
    }

    // 关闭右侧
    const closeRight = (route, index) => {
      // tabsViewMutations.closeRightTabs(route)
      store.commit('tabsView/closeRightTabs', route)
      state.activeKey = route.fullPath
      router.replace(route.fullPath)
    }

    // 关闭其他
    const closeOther = (route) => {
      // tabsViewMutations.closeOtherTabs(route)
      store.commit('tabsView/closeOtherTabs', route)
      state.activeKey = route.fullPath
      router.replace(route.fullPath)
    }

    // 关闭全部
    const closeAll = () => {
      localStorage.removeItem('routes')
      // tabsViewMutations.closeAllTabs()
      store.commit('tabsView/closeAllTabs')
      router.replace('/')
    }

    return {
      ...toRefs(state),
      route,
      tabsList,
      changePage,
      editTabItem,
      removeTab,
      closeLeft,
      closeRight,
      closeOther,
      closeAll,
      reloadPage
    }
  }
})
</script>

<style lang="scss" scoped>
.tabs-view {
  border-top: 1px solid #eee;

  ::v-deep(.tabs) {
    .ant-tabs-bar {
      padding: 4px 20px 0 10px;
      margin: 0;
      background-color: white;
      user-select: none;
    }

    .ant-tabs-tabpane {
      display: none;
    }

    .ant-tabs-tab:not(.ant-tabs-tab-active) {
      .anticon-close {
        width: 0;
        transition: width 0.3s;
      }

      &:hover .anticon-close {
        width: 16px;
      }
    }
  }

  .tabs-view-content {
    /* height: calc(100vh - #{$header-height}); */
    height: calc(100vh - 110px);
    padding: 20px 14px 0;
    overflow: auto;
  }
}
</style>
