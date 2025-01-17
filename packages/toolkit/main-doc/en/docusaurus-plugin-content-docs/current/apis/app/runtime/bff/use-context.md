---
title: useContext
---

Used to get the request context in the BFF function.

## Usage

according to the framework extend plugin, export from the corresponding namespace:

```ts
import { useContext } from '@modern-js/runtime/{namespace}';
```

## Function Signature

`function useContext(): any`

## Example

Developers can get more request information through `context`, such as browser UA(an example is when using the koa framework):

```ts
import { useContext } from '@modern-js/runtime/koa';

export async function get() {
  const ctx = useContext();
  return ctx.req.headers['user-agent'];
}
```

:::caution
only in BFF function, `useContext` API can be used.
:::

Although the `useContext` API is supported in any framework extend plugin, the types of return values are different.
