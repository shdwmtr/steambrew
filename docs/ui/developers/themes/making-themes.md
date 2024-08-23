---
sidebar_position: 1
---

# Features
Learn how to implement different features in your theme

## Features you can implement
### CSS code insertion
- Add custom CSS to all pages/windows in the new steam client
- Supports querySelector on the classlist in the DOM html and its parents
- You can manage what files and what windows do what
- Multi Language window names are supported with querySelector
- Supports skinning of the Steam Store page, Community, and any other URL's
- Supports Steam Big Picture (BPM)

### Custom JS code insertion
- This option is disabled by default on a new client install so if your skin depends on JS warn the user that they must review the code manually if it has not been officially verified, then to enable JS insertion on Millennium in the Settings modal.
- Supports querySelector on the classlist in the DOM html and its parents
- Add custom JS to all pages/windows in the new Steam Client
- you can manage what files and what windows do what
- supports insertion on any page URL including the Store, Community and anything else.
- Supports Steam Big Picture (BPM)

## Getting Started

Here's an example theme path: `%SteamPath%/steamui/skins/skinName/skin.json`

in this case we use "skinName" as an example skin name (this is not the actual name end-users see in Millennium, simply a pseudo name for your theme). keep in mind the folder name of your skin MUST be URL-encoded and CANNOT contain any invalid characters. The accepted range is [0-9, A-Z, a-z] any other characters are deemed illegal and your skin may not function as it should.

Here's an [example `skin.json`](https://github.com/SteamClientHomebrew/ThemeTemplate/blob/master/skin.json) 

## Index of property nodes

|Field|Required|Description|
|-----|:------:|-----------|
|[github](#github-property-node)|&#x2705;|An object defining GitHub properties|
|name|&#x2705;|A plain text name for your theme|
|author|&#x2705;|The name of you the developer.|
|description|&#x2705;|A basic description of the what the addon does.|
|header_image|&#x2705;|the thumbnail of your theme when viewing from [here](https://millennium.web.app/themes)|
|splash_image|&#x2705;|the background splash image when viewing from [here](https://millennium.web.app/theme?id=F8h9ZhwOdoNygNcAfjIZ)|
|tags|&#x274C;|A list of tags describing your theme|
|version|&#x274C;|Version representing the current update level. [Semantic versioning](https://semver.org/) recommended.|
|Steam-WebKit|&#x274C;|relative path to CSS file, styles Steam store, community, etc.|
|[UseDefaultPatches](#default-patches)|&#x274C;|tells Millennium to use a predefined schema of `Patches` for less clutter in your json.|
|[discord_support](#discord-property-node)|&#x274C;|An object defining discord properties|

### GitHub Property Node

|Field|Required|Description|
|-----|:------:|-----------|
|owner|&#x2705;|the account name of the repository under the owners account. Ex: https://github.com/ShadowMonster99/Simply-Dark/ -> ShadowMonster99|
|repo_name|&#x2705;|the owner of the github repository. Ex: https://github.com/ShadowMonster99/Simply-Dark/ -> Simply-Dark |

### Discord Property Node

|Field|Required|Description|
|-----|:------:|-----------|
|inviteCodeExcludingLink|&#x274C;|invite token of your discord server. example: https://discord.com/invite/NcNMP6r2Cw -> NcNMP6r2Cw|

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

## Example Boilerplate 

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


## Default Patches
 
This is only specified when `UseDefaultPatches` is set to true, otherwise these are ignored. You don't add these anywhere, this is just a virtual table that is added for you. 

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