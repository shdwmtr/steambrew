---
title: Package Management
---
# Package Management

Package Management for python is managed by PIP. Millennium reads required python packages from `requirements.txt` in the base directory of the plugin. 
This file has similar, but slightly different syntax then how PIP normally manages it. 

## Example

For every required package, format its name on a new line in the file. 
`|` denotes a specific platform the package should be installed on. 

```json title="Example format"
package_name_to_be_installed_on_all_platforms
windows_package | Windows
macos_package | Darwin
linux_package | Linux
```

```json title="Example requirements.txt"
psutil
pywin32 | Windows
```

Once you put your package in the requirements.txt, it will be accessible from your python code. 