---
component: Core
---

[**@steambrew/webkit v4.2.1**](../README.md)

***

# Function: callable()

```ts
function callable<Args, T>(route: string): (...args: Args) => Promise<T>
```

Defined in: [index.ts:56](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/webkit/src/index.ts#L56)

Make reusable IPC call declarations

frontend:
```typescript
// declare a method with arg1 as a string and a return type of boolean
const method = callable<[{ arg1: string }], boolean>("methodName");

const result1 = await method({ arg1: 'value1' });
const result2 = await method({ arg1: 'value2' });
```

backend:
```python
def methodName(arg1: str):
   pass
```

## Type Parameters

• **Args** *extends* `any`[] = \[\]

• **T** = [`IPC_types`](../type-aliases/IPC_types.md)

## Parameters

### route

`string`

## Returns

`Function`

### Parameters

#### args

...`Args`

### Returns

`Promise`\<`T`\>
