# pluginSelf
pluginSelf is a sandbox for data specific to your plugin. 
You can't access other plugins sandboxes and they can't access yours 

```js title="frontend/index.tsx"
pluginSelf.var = "Hello"
console.log(pluginSelf.var) // Hello
```

## Notes
pluginSelf can be refrenced from any js/ts file and its guaranteed to be the same object. It is normally used to prevent having to pass redundant parameters.