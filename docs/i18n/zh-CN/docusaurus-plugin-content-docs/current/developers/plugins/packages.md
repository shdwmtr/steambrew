---
title: 包管理
---
# 包管理

Python 包管理通过 PIP 实现。Millennium 会从插件根目录的 `requirements.txt` 文件中读取所需的 Python 包。
该文件语法与 PIP 常规管理方式类似，但存在细微差异。

## 示例

每个所需包需独占一行写入文件。
`|` 符号用于指定该包应安装的特定平台。

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

将包添加至 requirements.txt 后，即可在 Python 代码中调用。