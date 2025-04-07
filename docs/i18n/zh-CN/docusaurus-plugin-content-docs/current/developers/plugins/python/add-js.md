# add_browser_js()
Add a JS module to the steam store/community

|Parameter|Type|Description|
|-----|:------:|-----------|
|js_relative_path|str|The desired JS modules relative path|

## Relative Paths

JS module path's are resolved from `%steam%/steamui` and all JS modules must reside there. 
#### Example: 
```py
# absolute path C:/Program Files (x86)/Steam/steamui/module.js
Millennium.add_browser_js("module.js")
```
