# Dynamic Patching

## Introduction

Dynamic patching is a feature that allows themes to conditionally inject Css/Js into Steam depending on user configuration.

## Properties

|Field|Type|Description|
|-----|:------:|-----------|
|default|`Any`|The preselected default option from `values`|
|description|`String`|A basic description of the what the config does. Supports [BB code][guide]|
|values|`Object`|An object containing keys `yes`/`no` for checkbox config, and other string values for combobox|
|`values` item|`Object`|Contains a `TargetCss` and/or a `TargetJs` object|
|`TargetJs` & `TargetCss`|`Object`|Contains an `affects` key, and a `src` key|
|`affects`|`List<String>`|A list of regex strings that are matched against all open Steam windows. If there is a match, the TargetCss/Js will be injected into the window|
|`src`|`List<String>`|A relative path to the target Js/Css module|



## Example

In the following example, the `Conditions` key is a property top-level in your skin.json (It should be on the same level as `Patches`)

:::info
Note you must remove all comments from the following JSON, as they are not valid. They are simply for verbosity.
:::


```json
"Conditions": {
    // name of the checkbox in the theme editor
    "A Boolean Checkbox": {
        "default": "yes",
        "description": "A simple boolean checkbox",
        "values": {
            // since "values" only contains "yes" and "no" keys, it will be rendered as a checkbox
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
    // name of the combobox in the theme editor
    "A ComboBox Item": {
        "description": "A simple combo box",
        "default": "Dark",
        "values": {
            // since "values" doesn't contains "yes" or "no", it will be rendered as a combo box with "Dark", "Amoled", and "Nord"
            "Dark": {
                "TargetCss": {
                    "affects": ["^Steam$", "^Steam Big Picture Mode$"], // injects into Steam window, and BPM only.
                    "src": "dark.css"
                }
            },
            "Amoled": {
                "TargetCss": {
                    "affects": [".*"], // injects into all Steam windows.
                    "src": "amoled.css"
                }
            },
            "Nord": {
                "TargetCss": {
                    "affects": [".*"], // injects into all Steam windows.
                    "src": "nord.css"
                }
            }
        }
    }
},
"Patches": ...
```

[guide]: https://steamcommunity.com/sharedfiles/filedetails/?id=2807121939
