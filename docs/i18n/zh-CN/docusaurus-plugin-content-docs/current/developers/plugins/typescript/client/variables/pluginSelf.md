---
component: Core
---

[**@steambrew/client v4.2.1**](../README.md)

***

# Variable: pluginSelf

```ts
const pluginSelf: any = m_private_context;
```

Defined in: [src/api/index.ts:108](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/api/index.ts#L108)

`pluginSelf` is a sandbox for data specific to your plugin. 
You can't access other plugins sandboxes and they can't access yours.

pluginSelf can be referenced from any js/ts file and it will point to the same object. 
pluginSelf is normally used as a way to store "global" variables to prevent having to pass redundant parameters.

```typescript
pluginSelf.var = "Hello"
console.log(pluginSelf.var) // Hello
```
