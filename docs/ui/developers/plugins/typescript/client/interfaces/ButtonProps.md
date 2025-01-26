[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: ButtonProps

Defined in: [src/components/Button.ts:5](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Button.ts#L5)

## Extends

- [`DialogButtonProps`](DialogButtonProps.md)

## Properties

### actionDescriptionMap?

```ts
optional actionDescriptionMap: ActionDescriptionMap;
```

Defined in: [src/components/FooterLegend.ts:53](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L53)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`actionDescriptionMap`](DialogButtonProps.md#actiondescriptionmap)

***

### children?

```ts
optional children: ReactNode;
```

Defined in: [src/components/Dialog.ts:9](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L9)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`children`](DialogButtonProps.md#children)

***

### className?

```ts
optional className: string;
```

Defined in: [src/components/Dialog.ts:8](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L8)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`className`](DialogButtonProps.md#classname)

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [src/components/Dialog.ts:30](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L30)

Disables the button - assigned `on*` methods will not be invoked if clicked.

#### Note

Depending on where it is, it might still get focus. In such case it can be
partially disabled separately.

#### See

focusable.

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`disabled`](DialogButtonProps.md#disabled)

***

### focusable?

```ts
optional focusable: boolean;
```

Defined in: [src/components/Dialog.ts:40](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L40)

Enables/disables the navigation based focus on button - you won't be able to navigate to
it via the gamepad or keyboard.

#### Note

If set to `false`, it still can be clicked and **WILL** become focused until navigated away.
Depending on the context of where the button is, even a disabled button can focused.

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`focusable`](DialogButtonProps.md#focusable)

***

### key?

```ts
optional key: null | Key;
```

Defined in: node\_modules/@types/react/index.d.ts:137

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`key`](DialogButtonProps.md#key)

***

### noFocusRing?

```ts
optional noFocusRing: boolean;
```

Defined in: [src/components/Dialog.ts:19](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L19)

Enables/disables the focus around the button.

#### Note

Default value depends on context, so setting it to `false` will enable it.

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`noFocusRing`](DialogButtonProps.md#nofocusring)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onButtonDown`](DialogButtonProps.md#onbuttondown)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onButtonUp`](DialogButtonProps.md#onbuttonup)

***

### onCancelActionDescription?

```ts
optional onCancelActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:55](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L55)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onCancelActionDescription`](DialogButtonProps.md#oncancelactiondescription)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onCancelButton`](DialogButtonProps.md#oncancelbutton)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onGamepadBlur`](DialogButtonProps.md#ongamepadblur)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onGamepadDirection`](DialogButtonProps.md#ongamepaddirection)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onGamepadFocus`](DialogButtonProps.md#ongamepadfocus)

***

### onMenuActionDescription?

```ts
optional onMenuActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:58](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L58)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onMenuActionDescription`](DialogButtonProps.md#onmenuactiondescription)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onMenuButton`](DialogButtonProps.md#onmenubutton)

***

### onOKActionDescription?

```ts
optional onOKActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:54](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L54)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onOKActionDescription`](DialogButtonProps.md#onokactiondescription)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onOKButton`](DialogButtonProps.md#onokbutton)

***

### onOptionsActionDescription?

```ts
optional onOptionsActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:57](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L57)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onOptionsActionDescription`](DialogButtonProps.md#onoptionsactiondescription)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onOptionsButton`](DialogButtonProps.md#onoptionsbutton)

***

### onSecondaryActionDescription?

```ts
optional onSecondaryActionDescription: ReactNode;
```

Defined in: [src/components/FooterLegend.ts:56](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/FooterLegend.ts#L56)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onSecondaryActionDescription`](DialogButtonProps.md#onsecondaryactiondescription)

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

[`DialogButtonProps`](DialogButtonProps.md).[`onSecondaryButton`](DialogButtonProps.md#onsecondarybutton)

***

### ref?

```ts
optional ref: Ref<HTMLDivElement>;
```

Defined in: node\_modules/@types/react/index.d.ts:140

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`ref`](DialogButtonProps.md#ref)

***

### style?

```ts
optional style: CSSProperties;
```

Defined in: [src/components/Dialog.ts:7](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L7)

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`style`](DialogButtonProps.md#style)

## Methods

### onClick()?

```ts
optional onClick(e: MouseEvent): void
```

Defined in: [src/components/Dialog.ts:42](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L42)

#### Parameters

##### e

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onClick`](DialogButtonProps.md#onclick)

***

### onMouseDown()?

```ts
optional onMouseDown(e: MouseEvent): void
```

Defined in: [src/components/Dialog.ts:46](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L46)

#### Parameters

##### e

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onMouseDown`](DialogButtonProps.md#onmousedown)

***

### onMouseUp()?

```ts
optional onMouseUp(e: MouseEvent): void
```

Defined in: [src/components/Dialog.ts:47](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L47)

#### Parameters

##### e

`MouseEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onMouseUp`](DialogButtonProps.md#onmouseup)

***

### onPointerCancel()?

```ts
optional onPointerCancel(e: PointerEvent): void
```

Defined in: [src/components/Dialog.ts:45](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L45)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onPointerCancel`](DialogButtonProps.md#onpointercancel)

***

### onPointerDown()?

```ts
optional onPointerDown(e: PointerEvent): void
```

Defined in: [src/components/Dialog.ts:43](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L43)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onPointerDown`](DialogButtonProps.md#onpointerdown)

***

### onPointerUp()?

```ts
optional onPointerUp(e: PointerEvent): void
```

Defined in: [src/components/Dialog.ts:44](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L44)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onPointerUp`](DialogButtonProps.md#onpointerup)

***

### onSubmit()?

```ts
optional onSubmit(e: SubmitEvent): void
```

Defined in: [src/components/Dialog.ts:51](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L51)

#### Parameters

##### e

`SubmitEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onSubmit`](DialogButtonProps.md#onsubmit)

***

### onTouchCancel()?

```ts
optional onTouchCancel(e: TouchEvent): void
```

Defined in: [src/components/Dialog.ts:50](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L50)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onTouchCancel`](DialogButtonProps.md#ontouchcancel)

***

### onTouchEnd()?

```ts
optional onTouchEnd(e: TouchEvent): void
```

Defined in: [src/components/Dialog.ts:49](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L49)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onTouchEnd`](DialogButtonProps.md#ontouchend)

***

### onTouchStart()?

```ts
optional onTouchStart(e: TouchEvent): void
```

Defined in: [src/components/Dialog.ts:48](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Dialog.ts#L48)

#### Parameters

##### e

`TouchEvent`

#### Returns

`void`

#### Inherited from

[`DialogButtonProps`](DialogButtonProps.md).[`onTouchStart`](DialogButtonProps.md#ontouchstart)
