[**@steambrew/client v4.2.1**](../README.md)

***

# Type Alias: ReorderableListEntryProps\<T\>

```ts
type ReorderableListEntryProps<T> = {
  animate: boolean;
  children: ReactElement | null;
  entryData: ReorderableEntry<T>;
  fieldProps: FieldProps;
  listData: ReorderableEntry<T>[];
  reorderEnabled: boolean;
  reorderEntryFunc: CallableFunction;
};
```

Defined in: [src/custom-components/ReorderableList.tsx:105](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/custom-components/ReorderableList.tsx#L105)

Properties for a ReorderableItem component of type <T>

## Type Parameters

• **T**

## Type declaration

### animate

```ts
animate: boolean;
```

### children

```ts
children: ReactElement | null;
```

### entryData

```ts
entryData: ReorderableEntry<T>;
```

### fieldProps?

```ts
optional fieldProps: FieldProps;
```

### listData

```ts
listData: ReorderableEntry<T>[];
```

### reorderEnabled

```ts
reorderEnabled: boolean;
```

### reorderEntryFunc

```ts
reorderEntryFunc: CallableFunction;
```
