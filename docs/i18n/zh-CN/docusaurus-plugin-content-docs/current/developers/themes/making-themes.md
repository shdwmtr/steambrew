---
sidebar_position: 1
---

# 功能
了解如何在主题中实现不同功能

## 可实现的功能
### CSS 代码注入
- 向新版 Steam 客户端的所有页面/窗口添加自定义CSS
- 支持对 DOM html 中 classlist 及其父级元素使用 querySelector
- 可管理不同文件和窗口的功能
- 通过 querySelector 支持多语言窗口名称
- 支持 Steam 商店页面、社区及其他 URL 的皮肤定制
- 支持 Steam 大屏幕模式(BPM)

### 自定义 JS 代码注入
- 该选项在新客户端安装时默认禁用，若您的皮肤依赖 JS，请警告用户必须手动审查未经官方验证的代码，然后在 Millennium 设置模态窗口中启用 JS 注入功能
- 支持对 DOM html 中的 classlist 及其父元素使用 querySelector
- 向新版 Steam 客户端的所有页面/窗口添加自定义 JS
- 您可以管理哪些文件和窗口执行哪些操作
- 支持在任何页面 URL（包括商店、社区等）插入JS
- 支持 Steam 大屏幕模式(BPM)

## 开始使用

这是主题路径示例： `%SteamPath%/steamui/skins/skinName/skin.json`

本示例使用“skinName”作为主题名称示例（终端用户在 Millennium 中看到的并非此实际名称，仅作为您主题的 ID）。请注意，您的主题文件夹名称必须进行 URL 编码，且不能包含任何无效字符。允许的字符范围为[0-9, A-Z, a-z]，其他任何字符均被视为非法，可能导致主题功能异常。

这是一个[示例 `skin.json`](https://github.com/shdwmtr/millennium/blob/main/examples/theme/skin.json) 

## 属性节点索引

|字段|必需|描述|
|-----|:------:|-----------|
|[github](#github-property-node)|&#x2705;|用于定义 GitHub 属性的对象|
|name|&#x2705;|主题的纯文本名称|
|author|&#x2705;|开发者的名称|
|description|&#x2705;|插件功能的基础描述|
|header_image|&#x2705;|从[此处](https://millennium.web.app/themes)查看时显示的主题缩略图|
|splash_image|&#x2705;|从[此处](https://millennium.web.app/theme?id=F8h9ZhwOdoNygNcAfjIZ)查看时显示的背景启动图像|
|tags|&#x274C;|主题的标签列表|
|version|&#x274C;|表示当前更新级别的版本号。推荐使用[语义化版本控制](https://semver.org/)。|
|Steam-WebKit|&#x274C;|CSS 文件的相对路径，用于设置 Steam 商店、社区等页面的样式|
|[UseDefaultPatches](#default-patches)|&#x274C;|指示 Millennium 使用预定义的 `Patches` 架构，以减少 JSON 文件中的冗余内容。|
|[discord_support](#discord-property-node)|&#x274C;|用于定义 Discord 属性的对象|

### GitHub 属性节点

|字段|必需|描述|
|-----|:------:|-----------|
|owner|&#x2705;|仓库所有者账户下的账户名称。例如：https://github.com/ShadowMonster99/Simply-Dark/ -> ShadowMonster99|
|repo_name|&#x2705;|GitHub 仓库的所有者。例如：https://github.com/ShadowMonster99/Simply-Dark/ -> Simply-Dark|

### Discord 属性节点

|字段|必需|描述|
|-----|:------:|-----------|
|inviteCodeExcludingLink|&#x274C;|您 Discord 服务器的邀请令牌。例如：https://discord.com/invite/NcNMP6r2Cw -> NcNMP6r2Cw|

<!-- - `Steam-WebKit` (**Optional**): relative path to CSS file, styles Steam store, community, etc.
- `UseDefaultPatches` (**Optional**): tells Millennium to use a predefined schema of `Patches` for less clutter in your json. see more [here](/#default-patches)
- `author` (**Optional**): shows end-users who made the theme. Can be multiple words/developers/keywords.
- `description` (**Optional**): a description for your theme. 
- `name` (**Required**): a plain text name for your theme

- **Deployment property nodes**
  - If you plan on distributing your theme on the community website, you need the following & and a GitHub repository
  - `github` (**Required**)
    - `owner` (**Required**): the owner of the github repository
    - `repo_name` (**Required**): the name of the repository under the owners account
  - `discord_support` (**Optional**)
    - `inviteCodeExcludingLink` (**Optional**): invite token of your discord server. example: https://discord.com/invite/NcNMP6r2Cw -> NcNMP6r2Cw
  - `tags` (**Optional**): an array of n length of tags for your theme, best to keep < 5
  - `header_image` (**Required**): the thumbnail of your theme when viewing from [here](https://millennium.web.app/themes)
  - `splash_image` (**Required**): the background splash image when viewing from [here](https://millennium.web.app/theme?id=F8h9ZhwOdoNygNcAfjIZ) -->

## 示例样板代码

```json title="%steam%/steamui/skins/example/skin.json"
{
    "Steam-WebKit": "path/to/webkit.css",
    "Patches": [
        { 
            "MatchRegexString": ".*http.*steam.*",
            "TargetJs": "path/to/webkit.js"
        },
        {
            "MatchRegexString": "^Steam$",
            "TargetCss": "steam.css",
            "TargetJs": "steam.js"
        }
    ],
    "UseDefaultPatches": true,
    "author": "xxx",
    "description": "xxx",
    "name": "length <= 10",
    "version": "1.0.0", 
    "github": {
        "owner": "xxx",
        "repo_name": "xxx"
    },
    "discord_support": {
        "inviteCodeExcludingLink": "xxx"
    },
    "tags": [
        "a",
        "b"
    ],
    "header_image": "http://site.com/path/to/thumbnail.png",
    "splash_image": "http://site.com/path/to/thumbnail.png"
}
```


## 默认补丁

仅当 `UseDefaultPatches` 设置为 true 时才会生效，否则这些设置将被忽略。您无需手动添加这些内容，系统会自动为您生成此虚拟表。

```json title="%steam%/steamui/skins/example/skin.json"
{
  "Patches": [
    {
      "MatchRegexString": "https://.*.steampowered.com",
      "TargetCss": "webkit.css",
      "TargetJs": "webkit.js"
    },
    {
      "MatchRegexString": "https://steamcommunity.com",
      "TargetCss": "webkit.css",
      "TargetJs": "webkit.js"
    },
    {
      "MatchRegexString": "^Steam$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "^OverlayBrowser_Browser$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "^SP Overlay:",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "Supernav$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "^notificationtoasts_",
      "TargetCss": "notifications.custom.css",
      "TargetJs": "notifications.custom.js"
    },
    {
      "MatchRegexString": "^SteamBrowser_Find$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "^OverlayTab\\d+_Find$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": "^Steam Big Picture Mode$",
      "TargetCss": "bigpicture.custom.css",
      "TargetJs": "bigpicture.custom.js"
    },
    {
      "MatchRegexString": "^QuickAccess_",
      "TargetCss": "bigpicture.custom.css",
      "TargetJs": "bigpicture.custom.js"
    },
    {
      "MatchRegexString": "^MainMenu_",
      "TargetCss": "bigpicture.custom.css",
      "TargetJs": "bigpicture.custom.js"
    },
    {
      "MatchRegexString": ".friendsui-container",
      "TargetCss": "friends.custom.css",
      "TargetJs": "friends.custom.js"
    },
    {
      "MatchRegexString": "Menu$",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": ".ModalDialogPopup",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    },
    {
      "MatchRegexString": ".FullModalOverlay",
      "TargetCss": "libraryroot.custom.css",
      "TargetJs": "libraryroot.custom.js"
    }
  ]
}
```