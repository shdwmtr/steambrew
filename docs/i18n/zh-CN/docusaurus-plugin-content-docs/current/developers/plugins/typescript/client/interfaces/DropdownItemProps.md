[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: DropdownItemProps

Defined in: [src/components/Dropdown.ts:47](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L47)

## Extends

- [`DropdownProps`](DropdownProps.md).`ItemProps`

## Properties

### bottomSeparator?

```ts
optional bottomSeparator: "standard" | "thick" | "none";
```

Defined in: [src/components/Item.ts:9](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L9)

#### Inherited from

```ts
ItemProps.bottomSeparator
```

***

### children?

```ts
optional children: ReactNode;
```

Defined in: [src/components/Item.ts:6](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L6)

#### Inherited from

```ts
ItemProps.children
```

***

### contextMenuPositionOptions?

```ts
optional contextMenuPositionOptions: DropdownMenuPositionOptions;
```

Defined in: [src/components/Dropdown.ts:35](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L35)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`contextMenuPositionOptions`](DropdownProps.md#contextmenupositionoptions)

***

### description?

```ts
optional description: ReactNode;
```

Defined in: [src/components/Item.ts:5](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L5)

#### Inherited from

```ts
ItemProps.description
```

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/components/Dropdown.ts:31](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L31)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`disabled`](DropdownProps.md#disabled)

***

### focusable?

```ts
optional focusable: boolean;
```

Defined in: [src/components/Dropdown.ts:39](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L39)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`focusable`](DropdownProps.md#focusable)

***

### highlightOnFocus?

```ts
optional highlightOnFocus: boolean;
```

Defined in: [src/components/Item.ts:12](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L12)

#### Inherited from

```ts
ItemProps.highlightOnFocus
```

***

### icon?

```ts
optional icon: ReactNode;
```

Defined in: [src/components/Item.ts:8](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L8)

#### Inherited from

```ts
ItemProps.icon
```

***

### indentLevel?

```ts
optional indentLevel: number;
```

Defined in: [src/components/Item.ts:10](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L10)

#### Inherited from

```ts
ItemProps.indentLevel
```

***

### label?

```ts
optional label: ReactNode;
```

Defined in: [src/components/Item.ts:4](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L4)

#### Inherited from

```ts
ItemProps.label
```

***

### layout?

```ts
optional layout: "below" | "inline";
```

Defined in: [src/components/Item.ts:7](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L7)

#### Inherited from

```ts
ItemProps.layout
```

***

### menuLabel?

```ts
optional menuLabel: string;
```

Defined in: [src/components/Dropdown.ts:36](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L36)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`menuLabel`](DropdownProps.md#menulabel)

***

### rgOptions

```ts
rgOptions: DropdownOption[];
```

Defined in: [src/components/Dropdown.ts:29](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L29)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`rgOptions`](DropdownProps.md#rgoptions)

***

### selectedOption

```ts
selectedOption: any;
```

Defined in: [src/components/Dropdown.ts:30](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L30)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`selectedOption`](DropdownProps.md#selectedoption)

***

### strDefaultLabel?

```ts
optional strDefaultLabel: string;
```

Defined in: [src/components/Dropdown.ts:37](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L37)

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`strDefaultLabel`](DropdownProps.md#strdefaultlabel)

***

### tooltip?

```ts
optional tooltip: string;
```

Defined in: [src/components/Item.ts:11](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Item.ts#L11)

#### Inherited from

```ts
ItemProps.tooltip
```

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

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`onChange`](DropdownProps.md#onchange)

***

### onMenuOpened()?

```ts
optional onMenuOpened(): void
```

Defined in: [src/components/Dropdown.ts:33](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dropdown.ts#L33)

#### Returns

`void`

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`onMenuOpened`](DropdownProps.md#onmenuopened)

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

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`onMenuWillOpen`](DropdownProps.md#onmenuwillopen)

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

#### Inherited from

[`DropdownProps`](DropdownProps.md).[`renderButtonValue`](DropdownProps.md#renderbuttonvalue)
