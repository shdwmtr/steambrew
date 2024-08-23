# AddWindowCreateHook()
Add a callback hook to receive information every time a new Steam window opens. 

### Example

```js title="frontend/index.tsx"
function windowCreated(_context: any) {
    const title = _context.m_strTitle // name of the window that opened
}

// Entry point on the front end of your plugin
export default async function PluginMain() {
    Millennium.AddWindowCreateHook(windowCreated)
}
```


|Parameter|Type|Description|
|-----|:------:|-----------|
|callback|(context: object) => void|callback of the hook|


- type `method`
- returns `void`