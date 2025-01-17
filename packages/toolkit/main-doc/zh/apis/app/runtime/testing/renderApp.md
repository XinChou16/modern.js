---
title: renderApp
---

`render` 函数用于测试普通组件，`renderApp` 函数用于测试应用组件。

## 使用姿势

```ts
import { renderApp } from '@modern-js/runtime/testing';
```

应用组件指包含一些 Modern.js 上下文的组件，如 App 根组件，使用了 Model 的 Container 等。对于这类组件的测试，可以使用 `renderApp` 函数，会自动按照当前 `modern.config.js` 配置，包裹上对应的上下文信息。

## 函数签名

`renderApp` 和 [render](./render.md) 完全一致。

## 示例

```ts
import { renderApp } from '@modern-js/runtime/testing';
import App from './App';

describe('test', () => {
  it('test App', () => {
    const { getByText } = renderApp(<App />);
    expect(getByText('Hello Modern!')).toBeInTheDocument();
  });
});
```
