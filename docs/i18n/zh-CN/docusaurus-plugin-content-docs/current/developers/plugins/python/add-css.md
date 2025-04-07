# add_browser_css()
Add a CSS module to the steam store/community

|Parameter|Type|Description|
|-----|:------:|-----------|
|css_relative_path|str|The desired css modules relative path|

## Relative Paths

CSS module path's are resolved from `%steam%/steamui` and all CSS modules must reside there. 
#### Example: 
```py
# absolute path C:/Program Files (x86)/Steam/steamui/module.css
Millennium.add_browser_css("module.css")
```
