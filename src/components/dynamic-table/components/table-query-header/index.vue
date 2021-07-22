<template>
  <a-form layout="inline">
    <a-row :gutter="[24, 24]">
      <template v-for="slotItem in defaultShowSlots" :key="slotItem">
        <a-col :md="8" :sm="24">
          <a-form-item :label="labelMap[slotItem] || ''">
            <slot :name="slotItem" :setLabel="setLabel(slotItem)"></slot>
          </a-form-item>
        </a-col>
      </template>
      <template v-if="advanced">
        <template v-for="slotItem in advancedShowSlots" :key="slotItem">
          <a-col :md="8" :sm="24">
            <a-form-item :label="labelMap[slotItem] || ''">
              <slot :name="slotItem" :setLabel="setLabel(slotItem)"></slot>
            </a-form-item>
          </a-col>
        </template>
      </template>
      <a-col :md="(!advanced && 8) || 24" :sm="24">
        <span
          class="table-page-search-submitButtons"
          :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
        >
          <slot name="buttons"></slot>
          <a style="margin-left: 8px" @click="toggleAdvanced">
            {{ advanced ? '收起' : '展开' }}
            <component :is="advanced ? 'UpOutlined' : 'DownOutlined'" />
          </a>
        </span>
      </a-col>
    </a-row>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { UpOutlined, DownOutlined } from '@ant-design/icons-vue'

export default defineComponent({
  name: 'TableQueryHeader',
  components: { UpOutlined, DownOutlined },
  props: {
    /** 默认显示个数 */
    defaultShowItems: {
      type: Number,
      default: 2
    }
  },
  setup(props, { slots }) {
    const state = reactive({
      advanced: false,
      labelMap: {}
    })

    /**
     * @description 默认显示的插槽
     */
    const defaultShowSlots = computed(() => {
      return Object.keys(slots).slice(0, props.defaultShowItems)
    })

    /**
     * @description 显示更多的插槽
     */
    const advancedShowSlots = computed(() => {
      return Object.keys(slots)
        .slice(props.defaultShowItems)
        .filter((key) => key !== 'buttons')
    })

    /**
     * @description 设置表单项label
     */
    const setLabel = (slotItem) => {
      return (label) => {
        state.labelMap[slotItem] = label
      }
    }

    const toggleAdvanced = () => {
      state.advanced = !state.advanced
    }

    return {
      ...toRefs(state),
      defaultShowSlots,
      advancedShowSlots,
      setLabel,
      toggleAdvanced
    }
  }
})
</script>

<style lang="scss" scoped>
.table-page-search-submitButtons {
  display: block;
  margin-bottom: 24px;
  white-space: nowrap;
}

::v-deep .ant-row {
  width: 100%;
}

::v-deep .ant-form-item {
  margin-right: 0;
}
</style>
