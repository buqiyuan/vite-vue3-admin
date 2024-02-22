# 接口管理

在实际的开发中，联调永远都是比较麻烦的事情，尤其是在前后端分离之后，后端一般都需要维护一份文档来告诉我们具体的 API 有什么功能，具体的
字段信息，这些信息的维护成本还是比较高的。然后前端则需要频繁的查阅接口文档，并且前端还需要手动定义相关的接口请求，如果追求极致的开发体验，
我们还需要手动定义很多 ts 类型与注释，例如：请求参数类型、响应结果类型、字段描述等。这个过程即耗时又容易出错，并且在实际的对接过程中还会反复修改。

## 工程化管理

作为一名 `Coder`，我们对于日常 coding 过程中的一些重复劳动，应该始终考虑如何“偷懒”，如何通过工程化手段去解决这些繁琐的体力活，解放双手!
现在有很多成熟的`接口文档生成接口请求`的工具可以帮我们做到这件事情，如：[@umijs/openapi](https://github.com/chenshuai2144/openapi2typescript)、[swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) 等。本项目中采用的
是`@umijs/openapi`。

## 使用

通过在项目根目录下执行以下命令，会自动生成请求接口，默认生成到 `src/api/backend`文件夹中

```bash
pnpm openapi
```

## 配置

相关的配置在 `openapi.config.ts`，你可以根据自己的实际情况做调整，以下配置是本项目对接后端 [swagger](https://nest-api.buqiyuan.site/api-docs) 文档的一个实际用例：

```ts
import { generateService } from '@umijs/openapi'
import type { RequestOptions } from './src/utils/request'

const re = /controller[-_ .](\w)/gi

// 具体配置说明请查阅: https://github.com/chenshuai2144/openapi2typescript
generateService({
  // 后端 swagger json 的在线链接
  schemaPath: 'http://127.0.0.1:7001/api-docs-json',
  // 生成接口的文件夹的路径
  serversPath: './src/api/backend',
  requestOptionsType: 'RequestOptions',
  // 自定义网络请求函数路径
  requestImportStatement:
    'import { request, type RequestOptions } from "@/utils/request";',
  hook: {
    // @ts-ignore
    customFunctionName(operationObject, apiPath) {
      const { operationId } = operationObject

      if (!operationId) {
        console.warn('[Warning] no operationId', apiPath)
        return
      }

      const funcName = operationId.replace(re, (_all, letter) =>
        letter.toUpperCase()
      )

      operationObject.operationId = funcName

      return funcName
    },
    // @ts-ignore
    customFileNames(operationObject, apiPath) {
      const { operationId } = operationObject

      if (!operationId) {
        console.warn('[Warning] no operationId', apiPath)
        return
      }
      const controllerName = operationId.split(re)[0]
      const moduleName = operationObject.tags?.[0].split(' - ')[0]

      if (moduleName === controllerName) {
        return [controllerName]
      } else if (moduleName && moduleName !== controllerName) {
        return [`${moduleName}_${controllerName}`]
      }
      return
    },
    customType(schemaObject, namespace, defaultGetType) {
      const type = defaultGetType(schemaObject, namespace)
      // 提取出 data 的类型
      const regex = /API\.ResOp & { 'data'\?: (.+); }/
      return type.replace(regex, '$1')
    },
    customOptionsDefaultValue(data): RequestOptions {
      const { summary } = data

      if (summary?.startsWith('创建') || summary?.startsWith('新增')) {
        return { successMsg: '创建成功' }
      } else if (summary?.startsWith('更新')) {
        return { successMsg: '更新成功' }
      } else if (summary?.startsWith('删除')) {
        return { successMsg: '删除成功' }
      }

      return {}
    }
  }
})
```
