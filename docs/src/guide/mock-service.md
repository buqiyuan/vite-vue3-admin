# Mock 服务

采用 [msw](https://mswjs.io/) 作为 mock 数据服务。

## 优点

- 集成于前端，不需要写 node 中间件（比如 express, koa）
- 语法基本和 express 一致
- 直接通过 chrome 快速 debugger
- 不存在跨域问题

## 缺点

由于浏览器 service Worker API 使用限制：只能在 https（已安装证书）、localhost、127.0.0.1 等服务下使用，否则控制台会出现 [MSW] Mocking enabled (fallback mode) 日志，也就是说 http 域名服务，包括本地 IP 服务，例如：http://192.168.31.171:8088/ 等服务下不可用。

> [!NOTE]
> 由于项目中使用到了 [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert) 插件，该插件使用 mkcert 为 vite https 开发服务提供证书支持，所以上述的缺点在本地开发中理论上不会出现不可用的问题。但若要在生产环境中使用 mock，则服务端需要开启 https, 同时也要安装证书，没有证书 msw 会直接报错！

## 如何使用 msw

具体的使用，可以参考[Msw Docs](https://mswjs.io/)
