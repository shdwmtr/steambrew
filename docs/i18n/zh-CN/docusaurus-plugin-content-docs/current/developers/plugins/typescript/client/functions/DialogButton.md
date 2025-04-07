---
component: UI Components
---

[**@steambrew/client v4.2.1**](../README.md)

***

# Function: DialogButton()

```ts
function DialogButton(props: PropsWithChildren<DialogButtonProps>, context?: any): null | ReactElement
```

Defined in: [src/components/Dialog.ts:104](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L104)

## Parameters

### props

`PropsWithChildren`\<[`DialogButtonProps`](../interfaces/DialogButtonProps.md)\>

### context?

`any`

## Returns

`null` \| `ReactElement`

## Brief

This is the "main" button. The Primary can act as a submit button,
therefore secondary is chosen (also for backwards comp. reasons)
