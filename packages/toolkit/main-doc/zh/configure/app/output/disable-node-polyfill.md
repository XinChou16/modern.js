---
sidebar_label: disableNodePolyfill
---

# output.disableNodePolyfill

- 类型： `boolean`
- 默认值： `true`

该配置项用于控制是否在代码中注入 Node 模块的 Polyfill。

默认情况下，我们不会将 Node Polyfill 注入到代码中，以避免造成代码体积增大。如果你需要注入 Node Polyfill，可以将 `output.disableNodePolyfill` 设置为 `false`：

```ts title="modern.config.ts"
export default defineConfig({
  output: {
    disableNodePolyfill: false,
  },
});
```

该配置项基于 Modern.js Builder 的 Node Polyfill 插件实现，你可以阅读 [Modern.js Builder - Node Polyfill 插件](https://modernjs.dev/builder/zh/plugins/plugin-node-polyfill.html) 文档来了解详细信息。
