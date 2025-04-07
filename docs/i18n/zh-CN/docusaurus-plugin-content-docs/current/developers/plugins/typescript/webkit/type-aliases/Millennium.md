---
component: Core
---

[**@steambrew/webkit v4.2.1**](../README.md)

***

# Type Alias: Millennium

```ts
type Millennium = {
  callServerMethod: (methodName: string, kwargs?: object) => Promise<any>;
  findElement: (privateDocument: Document, querySelector: string, timeOut?: number) => Promise<NodeListOf<Element>>;
};
```

Defined in: [index.ts:11](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/webkit/src/index.ts#L11)

## Type declaration

### ~~callServerMethod()~~

```ts
callServerMethod: (methodName: string, kwargs?: object) => Promise<any>;
```

```typescript
// Call methodName on the backend. Ensure that methodName is defined in the entry point of the backend.
// i.e methodName is defined in `method.py`, make sure `method.py` is imported in your entry point `main.py`
const result = await Millennium.callServerMethod('methodName', { arg1: 'value' });
```

#### Parameters

##### methodName

`string`

##### kwargs?

`object`

#### Returns

`Promise`\<`any`\>

#### Deprecated

Use [callable](../functions/callable.md) instead.

### findElement()

```ts
findElement: (privateDocument: Document, querySelector: string, timeOut?: number) => Promise<NodeListOf<Element>>;
```

```typescript
// Find an elements on the document
const elements = await Millennium.findElement(document, '.my-class');
```

#### Parameters

##### privateDocument

`Document`

The document to find the element on.

##### querySelector

`string`

The query selector to find the element with, identical to the syntax of document.querySelector.

##### timeOut?

`number`

findElement will wait for n milliseconds for the element to be found (i.e if the node hasn't appeared yet). If the element is not found within the timeOut, the promise will be rejected.

#### Returns

`Promise`\<`NodeListOf`\<`Element`\>\>
