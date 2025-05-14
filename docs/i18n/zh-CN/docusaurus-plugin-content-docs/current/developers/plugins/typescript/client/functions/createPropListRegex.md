[**@steambrew/client v4.2.1**](../README.md)

***

# Function: createPropListRegex()

```ts
function createPropListRegex(propList: string[], fromStart: boolean): RegExp
```

Defined in: [src/utils/react.ts:18](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/utils/react.ts#L18)

Create a Regular Expression to search for a React component that uses certain props in order.

## Parameters

### propList

`string`[]

Ordererd list of properties to search for

### fromStart

`boolean` = `true`

## Returns

`RegExp`

RegEx to call .test(component.toString()) on

## Export
