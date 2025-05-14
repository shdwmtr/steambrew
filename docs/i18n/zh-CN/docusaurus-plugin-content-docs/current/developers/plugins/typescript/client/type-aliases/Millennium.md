---
component: Core
---

[**@steambrew/client v4.2.1**](../README.md)

***

# Type Alias: Millennium

```ts
type Millennium = {
  AddWindowCreateHook: (callback: (context: object) => void) => void;
  callServerMethod: (methodName: string, kwargs?: object) => Promise<any>;
  exposeObj: <T>(obj: T) => any;
  findElement: (privateDocument: Document, querySelector: string, timeOut?: number) => Promise<NodeListOf<Element>>;
};
```

Defined in: [src/api/index.ts:5](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/api/index.ts#L5)

## Type declaration

### AddWindowCreateHook()?

```ts
optional AddWindowCreateHook: (callback: (context: object) => void) => void;
```

```typescript
// (1/25/2025) There will eventually be types on the parameters, but for now we just use `any`.
function windowCreated(context: PopupProps) {
   // window create event. 
   // you can interact directly with the document and monitor it with dom observers
   // you can then render components in specific pages. 
   console.log(context)
}

// Entry point on the front end of your plugin
export default async function PluginMain() {
   Millennium.AddWindowCreateHook(windowCreated)
}
```

#### Parameters

##### callback

(`context`: `object`) => `void`

A callback function that will be called when a window is created

#### Returns

`void`

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

### exposeObj()?

```ts
optional exposeObj: <T>(obj: T) => any;
```

Expose a function to the SharedJSContext so it can be viewed from the backend.

```typescript
class classname {
   static method(country: string, age: number) {
       console.log(`age: ${age}, country: ${country}`);
       return "method called"
   }
}
Millennium.exposeObj({ classname })
```

From the backend
```python
Millennium.call_frontend_method("classname.method", params=[18, "USA", False])
```

#### Type Parameters

• **T** *extends* `object`

#### Parameters

##### obj

`T`

The object to be exposed

#### Returns

`any`

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
