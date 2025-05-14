[**@steambrew/client v4.2.1**](../README.md)

***

# Function: beforePatch()

```ts
function beforePatch(
   object: any, 
   property: string, 
   handler: (args: any[]) => any, 
   options: PatchOptions): Patch
```

Defined in: [src/utils/patcher.ts:24](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/utils/patcher.ts#L24)

## Parameters

### object

`any`

### property

`string`

### handler

(`args`: `any`[]) => `any`

### options

[`PatchOptions`](../interfaces/PatchOptions.md) = `{}`

## Returns

[`Patch`](../interfaces/Patch.md)
