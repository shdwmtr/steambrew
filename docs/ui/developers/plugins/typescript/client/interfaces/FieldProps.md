[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: FieldProps

Defined in: [src/components/Field.ts:6](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L6)

## Extends

- [`FooterLegendProps`](FooterLegendProps.md)

## Properties

### actionDescriptionMap?

```ts
optional actionDescriptionMap: ActionDescriptionMap;
```

Defined in: [src/components/FooterLegend.ts:53](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L53)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`actionDescriptionMap`](FooterLegendProps.md#actiondescriptionmap)

***

### bottomSeparator?

```ts
optional bottomSeparator: "standard" | "thick" | "none";
```

Defined in: [src/components/Field.ts:9](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L9)

***

### children?

```ts
optional children: ReactNode;
```

Defined in: [src/components/Field.ts:7](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L7)

***

### childrenContainerWidth?

```ts
optional childrenContainerWidth: "min" | "max" | "fixed";
```

Defined in: [src/components/Field.ts:15](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L15)

***

### childrenLayout?

```ts
optional childrenLayout: "below" | "inline";
```

Defined in: [src/components/Field.ts:14](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L14)

***

### className?

```ts
optional className: string;
```

Defined in: [src/components/Field.ts:18](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L18)

***

### description?

```ts
optional description: ReactNode;
```

Defined in: [src/components/Field.ts:10](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L10)

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/components/Field.ts:11](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L11)

***

### focusable?

```ts
optional focusable: boolean;
```

Defined in: [src/components/Field.ts:22](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L22)

***

### highlightOnFocus?

```ts
optional highlightOnFocus: boolean;
```

Defined in: [src/components/Field.ts:19](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L19)

***

### icon?

```ts
optional icon: ReactNode;
```

Defined in: [src/components/Field.ts:12](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L12)

***

### indentLevel?

```ts
optional indentLevel: number;
```

Defined in: [src/components/Field.ts:20](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L20)

***

### inlineWrap?

```ts
optional inlineWrap: "keep-inline" | "shift-children-below";
```

Defined in: [src/components/Field.ts:13](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L13)

***

### label?

```ts
optional label: ReactNode;
```

Defined in: [src/components/Field.ts:8](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L8)

***

### onActivate()?

```ts
optional onActivate: (e: MouseEvent | CustomEvent) => void;
```

Defined in: [src/components/Field.ts:23](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L23)

#### Parameters

##### e

`MouseEvent` | `CustomEvent`

#### Returns

`void`

***

### onButtonDown()?

```ts
optional onButtonDown: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:59](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L59)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonDown`](FooterLegendProps.md#onbuttondown)

***

### onButtonUp()?

```ts
optional onButtonUp: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:60](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L60)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onButtonUp`](FooterLegendProps.md#onbuttonup)

***

### onCancelActionDescription?

```ts
optional onCancelActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:55](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L55)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelActionDescription`](FooterLegendProps.md#oncancelactiondescription)

***

### onCancelButton()?

```ts
optional onCancelButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:62](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L62)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onCancelButton`](FooterLegendProps.md#oncancelbutton)

***

### onClick()?

```ts
optional onClick: (e: MouseEvent | CustomEvent) => void;
```

Defined in: [src/components/Field.ts:24](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L24)

#### Parameters

##### e

`MouseEvent` | `CustomEvent`

#### Returns

`void`

***

### onGamepadBlur()?

```ts
optional onGamepadBlur: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:67](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L67)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadBlur`](FooterLegendProps.md#ongamepadblur)

***

### onGamepadDirection()?

```ts
optional onGamepadDirection: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:65](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L65)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadDirection`](FooterLegendProps.md#ongamepaddirection)

***

### onGamepadFocus()?

```ts
optional onGamepadFocus: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:66](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L66)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onGamepadFocus`](FooterLegendProps.md#ongamepadfocus)

***

### onMenuActionDescription?

```ts
optional onMenuActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:58](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L58)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuActionDescription`](FooterLegendProps.md#onmenuactiondescription)

***

### onMenuButton()?

```ts
optional onMenuButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:68](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L68)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onMenuButton`](FooterLegendProps.md#onmenubutton)

***

### onOKActionDescription?

```ts
optional onOKActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:54](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L54)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKActionDescription`](FooterLegendProps.md#onokactiondescription)

***

### onOKButton()?

```ts
optional onOKButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:61](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L61)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOKButton`](FooterLegendProps.md#onokbutton)

***

### onOptionsActionDescription?

```ts
optional onOptionsActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:57](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L57)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsActionDescription`](FooterLegendProps.md#onoptionsactiondescription)

***

### onOptionsButton()?

```ts
optional onOptionsButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:64](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L64)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onOptionsButton`](FooterLegendProps.md#onoptionsbutton)

***

### onSecondaryActionDescription?

```ts
optional onSecondaryActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:56](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L56)

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryActionDescription`](FooterLegendProps.md#onsecondaryactiondescription)

***

### onSecondaryButton()?

```ts
optional onSecondaryButton: (evt: GamepadEvent) => void;
```

Defined in: [src/components/FooterLegend.ts:63](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L63)

#### Parameters

##### evt

[`GamepadEvent`](../type-aliases/GamepadEvent.md)

#### Returns

`void`

#### Inherited from

[`FooterLegendProps`](FooterLegendProps.md).[`onSecondaryButton`](FooterLegendProps.md#onsecondarybutton)

***

### padding?

```ts
optional padding: "standard" | "none" | "compact";
```

Defined in: [src/components/Field.ts:17](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L17)

***

### spacingBetweenLabelAndChild?

```ts
optional spacingBetweenLabelAndChild: "none";
```

Defined in: [src/components/Field.ts:16](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L16)

***

### verticalAlignment?

```ts
optional verticalAlignment: "none" | "center";
```

Defined in: [src/components/Field.ts:21](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Field.ts#L21)
