<template>
  <div>
    <table-query-header>
      <template #item="{ setLabel }">
        <div :label="setLabel('账号名称')">
          <a-input v-model:value="queryParam.name" placeholder="" />
        </div>
      </template>
      <template #item2="{ setLabel }">
        <div :label="setLabel('状态')">
          <a-select v-model:value="queryParam.status" placeholder="请选择" default-value="">
            <a-select-option value="">请选择</a-select-option>
            <a-select-option value="0">已停用</a-select-option>
            <a-select-option value="1">已启用</a-select-option>
          </a-select>
        </div>
      </template>
      <template #item3="{ setLabel }">
        <div :label="setLabel('开始日期')">
          <a-date-picker
            v-model:value="queryParam.startDate"
            style="width: 100%"
            placeholder="开始日期"
          />
        </div>
      </template>
      <template #item4="{ setLabel }">
        <div :label="setLabel('结束日期')">
          <a-date-picker
            v-model:value="queryParam.endDate"
            style="width: 100%"
            placeholder="结束日期"
          />
        </div>
      </template>
      <template #buttons>
        <a-button type="primary" @click="tableRef?.refreshTableData({}, true)">查询</a-button>
        <a-button style="margin-left: 8px" @click="() => (queryParam = {})">重置</a-button>
      </template>
    </table-query-header>
    <dynamic-table
      ref="tableRef"
      :columns="columns"
      :get-list-func="loadData"
      rowKey="id"
      :row-selection="rowSelection"
    >
      <template #title>
        <a-button
          v-permission="{ action: 'create', effect: 'disabled' }"
          type="primary"
          @click="addItem"
        >
          添加
        </a-button>
        <a-button
          v-permission="{ action: 'delete' }"
          :disabled="isDisabled"
          type="primary"
          @click="deleteItems"
        >
          删除
        </a-button>
      </template>
    </dynamic-table>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, createVNode, computed, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import { QuestionCircleOutlined } from '@ant-design/icons-vue'
import { DynamicTable, TableQueryHeader } from '@/components/dynamic-table'
import { delAdminAccount, getAdminAccount, postAdminAccount } from '@/api/system/account'
import { columns } from './columns'
import { useFormModal } from '@/hooks/useFormModal'
import { getFormSchema } from './form-schema'

export default defineComponent({
  name: 'SystemAccount',
  components: {
    DynamicTable,
    TableQueryHeader
  },
  setup() {
    const tableRef = ref<InstanceType<typeof DynamicTable>>()

    const state = reactive({
      queryParam: {
        // 表格查询参数
        name: '',
        status: '',
        startDate: '',
        endDate: ''
      } as any,
      tableLoading: false,
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          state.rowSelection.selectedRowKeys = selectedRowKeys
        },
        selectedRowKeys: []
      }
    })

    /**
     * @description 加载表格数据
     */
    const loadData = (params) => {
      const myParams = { ...params, ...state.queryParam }
      console.log(myParams, '查询参数')
      return getAdminAccount(myParams)
    }

    // 删除多项
    const deleteItems = () => {
      Modal.confirm({
        title: '提示',
        icon: createVNode(QuestionCircleOutlined),
        content: '您确定要删除所有选中吗？',
        onOk: async () => {
          await delAdminAccount(state.rowSelection.selectedRowKeys.toString())
          tableRef.value?.refreshTableData()
          state.rowSelection.selectedRowKeys = []
        }
      })
    }
    // 添加账号
    const addItem = () => {
      useFormModal({
        title: '添加账号',
        formSchema: getFormSchema(),
        handleOk: async (modelRef, state) => {
          const { username, password, roles } = modelRef

          const params = {
            username,
            password,
            roles: roles.toString()
          }
          await postAdminAccount(params)
          tableRef.value?.refreshTableData()
        }
      })
    }
    const isDisabled = computed(() => state.rowSelection.selectedRowKeys.length == 0)

    return {
      ...toRefs(state),
      columns,
      tableRef,
      isDisabled,
      loadData,
      addItem,
      deleteItems
    }
  }
})
</script>
