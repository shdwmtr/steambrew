[**@steambrew/client v4.2.1**](../README.md)

***

# Type Alias: ReorderableListProps\<T\>

```ts
type ReorderableListProps<T> = {
  animate: boolean;
  entries: ReorderableEntry<T>[];
  fieldProps: FieldProps;
  interactables: JSXElementConstructor<{
     entry: ReorderableEntry<T>;
    }>;
  onSave: (entries: ReorderableEntry<T>[]) => void;
};
```

Defined in: [src/custom-components/ReorderableList.tsx:22](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/custom-components/ReorderableList.tsx#L22)

Properties for a ReorderableList component of type <T>.

## Type Parameters

• **T**

## Type declaration

### animate?

```ts
optional animate: boolean;
```

### entries

```ts
entries: ReorderableEntry<T>[];
```

### fieldProps?

```ts
optional fieldProps: FieldProps;
```

### interactables?

```ts
optional interactables: JSXElementConstructor<{
  entry: ReorderableEntry<T>;
}>;
```

### onSave()

```ts
onSave: (entries: ReorderableEntry<T>[]) => void;
```

#### Parameters

##### entries

[`ReorderableEntry`](ReorderableEntry.md)\<`T`\>[]

#### Returns

`void`

## Param

If the list should animate.

## Default

```ts
true
```
