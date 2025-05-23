[**@steambrew/client v4.2.1**](../README.md)

***

# Type Alias: ReorderableEntry\<T\>

```ts
type ReorderableEntry<T> = {
  data: T;
  label: ReactNode;
  position: number;
};
```

Defined in: [src/custom-components/ReorderableList.tsx:11](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/custom-components/ReorderableList.tsx#L11)

A ReorderableList entry of type <T>.

## Type Parameters

• **T**

## Type declaration

### data?

```ts
optional data: T;
```

### label

```ts
label: ReactNode;
```

### position

```ts
position: number;
```

## Param

The name of this entry in the list.

## Param

Optional data to connect to this entry.

## Param

The position of this entry in the list.
