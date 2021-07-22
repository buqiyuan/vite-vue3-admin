import { ref } from 'vue'
// import Pagination from 'ant-design-vue/lib/pagination/Pagination'

export interface PageOption {
  current?: number
  pageSize?: number
  total?: number
  pageSizeOptions?: string[] // 指定每页可以显示多少条
  showSizeChanger?: boolean // 显示可改变每页数量
  showQuickJumper?: boolean // 是否显示跳转
  showTotal?: () => string
  onChange?: (current, pageSize) => void // 页码改变
  onShowSizeChange?: (current, pageSize) => void // pageSize变化
  pageChange?: (current, pageSize) => void // 页码或pageSize变化触发
  [key: string]: any
}

export function usePagination(pageOption?: PageOption) {
  // 分页配置参数
  const pageOptions = ref({
    current: 1,
    pageSize: 10,
    total: 0,
    pageSizeOptions: ['10', '20', '30', '40', '50'],
    showQuickJumper: true,
    showSizeChanger: true, // 显示可改变每页数量
    showTotal: (total) => `共 ${total} 条`, // 显示总数
    onChange: (current, pageSize) => pageOption?.pageChange?.(current, pageSize),
    onShowSizeChange: (current, pageSize) => pageOption?.pageChange?.(current, pageSize),
    ...pageOption
  })

  // 提供给ant-pagination组件的参数
  // const state = reactive({
  //     pageOption
  // })

  // 更新分页配置
  const updatePageOption = (options = {}) => {
    Object.assign(pageOptions.value, options)
    // Object.keys(options).forEach(key => pageOption.value[key] = options[key])
    console.log(pageOptions.value, '更新分页配置')
  }

  return {
    pageOptions,
    updatePageOption
  }
}
