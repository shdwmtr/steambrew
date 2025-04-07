# 动态补丁

## 介绍

动态补丁是一项允许主题根据用户配置条件性地向 Steam 注入 CSS/JS 的功能。

## 属性

|字段|类型|描述|
|-----|:------:|-----------|
|default|`Any`|从 `values` 中预设的默认选项|
|description|`String`|配置功能的基础描述。支持 [BB code][指南]|
|tab|`String`|自定义设置标签页的标题（该选项将显示在此标签页下）。（可选）|
|values|`Object`|一个包含复选框配置的 `yes`/`no` 键值，以及组合框其他字符串值的对象|
|`values` item|`Object`|包含一个 `TargetCss` 和/或 `TargetJs` 对象|
|`TargetJs` & `TargetCss`|`Object`|包含一个 `affects` 键值，和一个 `src`键值|
|`affects`|`List<String>`|一个正则表达式字符串列表，用于匹配所有打开的Steam窗口。若匹配成功，则会将 TargetCss/Js 注入该窗口|
|`src`|`List<String>`|目标 Js/Css 模块的相对路径|

## 示例

在以下示例中，`Conditions` 键是 skin.json 中的顶级属性（应与 `Patches` 同级）

:::info
请注意必须移除以下 JSON 中的所有注释，因为它们无效，仅用于详细说明。
:::


```json
"Conditions": {
    // 主题编辑器中复选框的名称
    "A Boolean Checkbox": {
        "default": "yes",
        "description": "A simple boolean checkbox",
        "tab": "General",
        "values": {
            // 由于“values”仅包含“yes”和“no”键，因此将呈现为复选框
            "no": {
                "TargetCss": {
                    "affects": [".*"],  "src": "no.css"
                }
            },
            "yes": {
                "TargetCss": {
                    "affects": [".*"], "src": "yes.css" 
                }
            }
        }
    },
    // 主题编辑器中组合框的名称
    "A ComboBox Item": {
        "description": "A simple combo box",
        "tab": "Theme",
        "default": "Dark",
        "values": {
            // 由于“values”不包含“yes”或“no”，它将呈现为包含“Dark”、“Amoled”和“Nord”的组合框
            "Dark": {
                "TargetCss": {
                    "affects": ["^Steam$", "^Steam Big Picture Mode$"], // 仅注入 Steam 窗口和 BPM。
                    "src": "dark.css"
                }
            },
            "Amoled": {
                "TargetCss": {
                    "affects": [".*"], // 注入所有 Steam 窗口。
                    "src": "amoled.css"
                }
            },
            "Nord": {
                "TargetCss": {
                    "affects": [".*"], // 注入所有 Steam 窗口。
                    "src": "nord.css"
                }
            }
        }
    }
},
"Patches": ...
```

[指南]: https://steamcommunity.com/sharedfiles/filedetails/?id=2807121939
