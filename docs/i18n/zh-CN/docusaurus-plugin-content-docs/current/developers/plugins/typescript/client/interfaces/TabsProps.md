[**@steambrew/client v4.2.1**](../README.md)

***

# Interface: TabsProps

Defined in: [src/components/Tabs.tsx:61](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L61)

Props for the [Tabs](../functions/Tabs.md)

`tabs` array of [Tab](Tab.md)
`activeTab` tab currently active, needs to be one of the tabs [Tab.id](Tab.md#id), must be set using a `useState` in the `onShowTab` handler
`onShowTab` Called when the active tab should change, needs to set `activeTab`. See example.
`autoFocusContents` Whether to automatically focus the tab contents or not.
`footer` Sets up button handlers and labels

## Example

```ts
const Component: FC = () => {
const [currentTab, setCurrentTab] = useState<string>("Tab1");

return (
  <Tabs
    title="Theme Manager"
    activeTab={currentTabRoute}
    onShowTab={(tabID: string) => {
       setCurrentTabRoute(tabID);
    }}
    tabs={[
      {
        title: "Tab 1",
        content: <Tab1Component />,
        id: "Tab1",
      },
      {
        title: "Tab 2",
        content: <Tab2Component />,
        id: "Tab2",
      },
    ]}
  />
 );
};
```

## Properties

### activeTab

```ts
activeTab: string;
```

Defined in: [src/components/Tabs.tsx:63](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L63)

***

### autoFocusContents?

```ts
optional autoFocusContents: boolean;
```

Defined in: [src/components/Tabs.tsx:65](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L65)

***

### onShowTab()

```ts
onShowTab: (tab: string) => void;
```

Defined in: [src/components/Tabs.tsx:64](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L64)

#### Parameters

##### tab

`string`

#### Returns

`void`

***

### tabs

```ts
tabs: Tab[];
```

Defined in: [src/components/Tabs.tsx:62](https://github.com/shdwmtr/plugutil/blob/b52230e3bd417b9353d983856323dee8a90c4f70/client/src/components/Tabs.tsx#L62)
