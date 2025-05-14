[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: Router

Defined in: [src/modules/Router.ts:89](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L89)

## Properties

### WindowStore?

```ts
optional WindowStore: WindowStore;
```

Defined in: [src/modules/Router.ts:90](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L90)

## Accessors

### MainRunningApp

#### Get Signature

```ts
get MainRunningApp(): undefined | AppOverview
```

Defined in: [src/modules/Router.ts:101](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L101)

##### Returns

`undefined` \| [`AppOverview`](../type-aliases/AppOverview.md)

***

### RunningApps

#### Get Signature

```ts
get RunningApps(): AppOverview[]
```

Defined in: [src/modules/Router.ts:100](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L100)

##### Returns

[`AppOverview`](../type-aliases/AppOverview.md)[]

## Methods

### CloseSideMenus()

```ts
CloseSideMenus(): void
```

Defined in: [src/modules/Router.ts:91](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L91)

#### Returns

`void`

***

### Navigate()

```ts
Navigate(path: string): void
```

Defined in: [src/modules/Router.ts:92](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L92)

#### Parameters

##### path

`string`

#### Returns

`void`

***

### NavigateToAppProperties()

```ts
NavigateToAppProperties(): void
```

Defined in: [src/modules/Router.ts:93](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L93)

#### Returns

`void`

***

### NavigateToChat()

```ts
NavigateToChat(): void
```

Defined in: [src/modules/Router.ts:96](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L96)

#### Returns

`void`

***

### NavigateToExternalWeb()

```ts
NavigateToExternalWeb(url: string): void
```

Defined in: [src/modules/Router.ts:94](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L94)

#### Parameters

##### url

`string`

#### Returns

`void`

***

### NavigateToInvites()

```ts
NavigateToInvites(): void
```

Defined in: [src/modules/Router.ts:95](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L95)

#### Returns

`void`

***

### NavigateToLayoutPreview()

```ts
NavigateToLayoutPreview(e: unknown): void
```

Defined in: [src/modules/Router.ts:98](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L98)

#### Parameters

##### e

`unknown`

#### Returns

`void`

***

### NavigateToLibraryTab()

```ts
NavigateToLibraryTab(): void
```

Defined in: [src/modules/Router.ts:97](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L97)

#### Returns

`void`

***

### OpenPowerMenu()

```ts
OpenPowerMenu(unknown?: any): void
```

Defined in: [src/modules/Router.ts:99](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/modules/Router.ts#L99)

#### Parameters

##### unknown?

`any`

#### Returns

`void`
