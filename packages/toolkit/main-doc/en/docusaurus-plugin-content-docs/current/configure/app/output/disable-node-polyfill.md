---
sidebar_label: disableNodePolyfill
---

# output.disableNodePolyfill

- Type: `boolean`
- Default: `true`

This config is used to control whether to inject the Polyfill of the Node module into the code.

By default, we will not inject Node Polyfill into the code to avoid bundle size increase. If you need to inject Node Polyfill, you can set `output.disableNodePolyfill` to `false`:

```ts title="modern.config.ts"
export default defineConfig({
  output: {
    disableNodePolyfill: false,
  },
});
```

This config is implemented based on the Node Polyfill plugin of Modern.js Builder, you can read [Modern.js Builder - Node Polyfill Plugin](https://modernjs.dev/builder/en/plugins/plugin-node-polyfill.html) documentation for details.
