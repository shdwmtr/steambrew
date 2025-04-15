[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: DropdownProps

Defined in: [src/components/Dropdown.ts:28](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L28)

## Extended by

- [`DropdownItemProps`](DropdownItemProps.md)

## Properties

### contextMenuPositionOptions?

```ts
optional contextMenuPositionOptions: DropdownMenuPositionOptions;
```

Defined in: [src/components/Dropdown.ts:35](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L35)

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/components/Dropdown.ts:31](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L31)

***

### focusable?

```ts
optional focusable: boolean;
```

Defined in: [src/components/Dropdown.ts:39](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L39)

***

### menuLabel?

```ts
optional menuLabel: string;
```

Defined in: [src/components/Dropdown.ts:36](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L36)

***

### rgOptions

```ts
rgOptions: DropdownOption[];
```

Defined in: [src/components/Dropdown.ts:29](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L29)

***

### selectedOption

```ts
selectedOption: any;
```

Defined in: [src/components/Dropdown.ts:30](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L30)

***

### strDefaultLabel?

```ts
optional strDefaultLabel: string;
```

Defined in: [src/components/Dropdown.ts:37](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L37)

## Methods

### onChange()?

```ts
optional onChange(data: SingleDropdownOption): void
```

Defined in: [src/components/Dropdown.ts:34](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L34)

#### Parameters

##### data

[`SingleDropdownOption`](SingleDropdownOption.md)

#### Returns

`void`

***

### onMenuOpened()?

```ts
optional onMenuOpened(): void
```

Defined in: [src/components/Dropdown.ts:33](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L33)

#### Returns

`void`

***

### onMenuWillOpen()?

```ts
optional onMenuWillOpen(showMenu: () => void): void
```

Defined in: [src/components/Dropdown.ts:32](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L32)

#### Parameters

##### showMenu

() => `void`

#### Returns

`void`

***

### renderButtonValue()?

```ts
optional renderButtonValue(element: ReactNode): ReactNode
```

Defined in: [src/components/Dropdown.ts:38](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L38)

#### Parameters

##### element

`ReactNode`

#### Returns

`ReactNode`
