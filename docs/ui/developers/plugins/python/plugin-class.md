# Plugin class

:::important
This class is required if you have a python backend in your plugin. If you chose to not have a python backend, set `useBackend` to `false` in your `plugin.json`
:::

Hosts functions for millennium core to call, when the state of the plugin changes.

|Method|Description|
|------|-----------|
|\_front\_end\_loaded|Called to signal that the frontend part of the plugin has been loaded|
|\_load|Called when the plugin is being loaded|
|\_unload|Called when the plugin is being unloaded (shut down)|


## Notes:
- The `_unload` function is not guaranteed to be called on Windows operating systems.

#### Example: 
```py title="backend/main.py"
class Plugin:
    def _front_end_loaded(self):
        pass

    def _load(self):
        Millennium.ready()
        print("Plugin loaded!")

    def _unload(self):
        pass
```
