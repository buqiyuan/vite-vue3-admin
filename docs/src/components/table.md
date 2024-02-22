# Table

<a href="/vue3-antdv-admin-docs/playground/" target="_blank">在线演练场</a> <br><br>
基于 `ant-design-vue` [Table](https://antdv.com/components/table-cn#api) 的二次封装，减少项目中的样板代码，对常用的逻辑进行封装。

## 基本使用

可参考项目内的[使用示例](https://github.com/buqiyuan/vue3-antdv-admin/tree/main/src/views/demos/tables)

## 基本配置

配置表格的预设行为与逻辑 <br>
文件位置：[src/components/core/dynamic-table/src/dynamic-table.config.ts](https://github.com/buqiyuan/vue3-antdv-admin/blob/main/src/components/core/dynamic-table/src/dynamic-table.config.ts)

```ts
/** 表格配置 */
export default {
  fetchConfig: {
    // The field name of the current page passed to the background
    pageField: 'page',
    // The number field name of each page displayed in the background
    sizeField: 'pageSize',
    // Field name of the form data returned by the interface
    listField: 'items',
    // Total number of tables returned by the interface field name
    totalField: 'meta.totalItems'
  },
  // Number of pages that can be selected
  pageSizeOptions: ['10', '50', '80', '100'],
  // Default display quantity on one page
  defaultPageSize: 10,
  // Default layout of table cells
  defaultAlign: 'center' as AlignType,
  // Custom general sort function
  defaultSortFn: (sortInfo: SorterResult) => {
    const { field, order } = sortInfo
    if (field && order) {
      return {
        // The sort field passed to the backend you
        field,
        // Sorting method passed to the background asc/desc
        order
      }
    } else {
      return {}
    }
  },
  // Custom general filter function
  defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
    return data
  }
} as const
```

### 搜索表单

默认情况下，表格会根据 `TableColumn` 配置自动生成搜索表单。其配置方式与[动态表单](/components/form)一致。 <br>
以下是搜索表单相关的基本使用方式：

- **关闭搜索表单**

表格的 `search` 属性为 `false` 时，将不再生成和显示搜索表单。

```vue
<DynamicTable :search="false" />
```

- **通过`TableColumn`配置生成**

自定义搜索表单项，可通过`formItemProps`属性配置，具体配置方式与[动态表单](/components/form)一致

```ts
const columns: TableColumn<ListItemType>[] = [
  {
    title: '状态',
    dataIndex: 'status',
    /** 搜索表单项配置 */
    formItemProps: {
      component: 'Select',
      componentProps: {
        options: [
          {
            label: '启用',
            value: 1
          },
          {
            label: '禁用',
            value: 0
          }
        ]
      }
    }
  }
]
```

- **通过表格`formProps`属性配置生成**

使用 `formProps` 相当于是直接对 [动态表单组件](/components/form) 本身进行配置

```ts
const searchFormSchemas: FormSchema[] = [
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '启用',
          value: 1
        },
        {
          label: '禁用',
          value: 0
        }
      ]
    }
  }
]

const [DynamicTable, dynamicTableInstance] = useTable({
  formProps: {
    /** 搜索表单 formSchemas 配置 */
    schemas: searchFormSchemas,
    /** 搜索表单初始值 */
    initialValues: { typeId: typeId.value },
    /** 表单重置事件 */
    onReset(model) {
      if (Number.isInteger(model?.typeId)) {
        typeId.value = model.typeId
      }
    }
  }
})
```
