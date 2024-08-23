# ready()
Posts a message to millennium core, letting it know that the plugin is ready to be mounted.

This function should be called once and only once during plugin initialization.
It does not take any parameters and will always return True.


## Notes:
- This function is typically called within `_load()` or after all necessary 
components have been loaded to verify all plugin backends are loaded before starting up steam.


- returns `True`

#### Example: 
```py title="backend/main.py"
class Plugin:
    def _front_end_loaded(self):
        pass 

    def _load(self):     
        Millennium.ready()
        print("ready was called!")

    def _unload(self):
        pass
```
