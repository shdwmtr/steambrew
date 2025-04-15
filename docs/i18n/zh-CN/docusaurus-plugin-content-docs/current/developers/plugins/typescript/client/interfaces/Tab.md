[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: Tab

Defined in: [src/components/Tabs.tsx:17](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L17)

Individual tab objects for the Tabs component

`id` ID of this tab, can be used with activeTab to auto-focus a given tab
`title` Title shown in the header bar
`renderTabAddon` Return a ReactNode to render it next to the tab title, i.e. the counts for each tab on the Media page
`content` Content of the tab
`footer` Sets up button handlers and labels

## Properties

### content

```ts
content: ReactNode;
```

Defined in: [src/components/Tabs.tsx:21](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L21)

***

### footer?

```ts
optional footer: FooterLegendProps;
```

Defined in: [src/components/Tabs.tsx:22](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L22)

***

### id

```ts
id: string;
```

Defined in: [src/components/Tabs.tsx:18](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L18)

***

### renderTabAddon()?

```ts
optional renderTabAddon: () => ReactNode;
```

Defined in: [src/components/Tabs.tsx:20](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L20)

#### Returns

`ReactNode`

***

### title

```ts
title: string;
```

Defined in: [src/components/Tabs.tsx:19](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L19)
