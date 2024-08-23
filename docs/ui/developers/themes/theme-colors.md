# Theme Colors

## Introduction
Adding theme colors is a simple and effective way to let the end-user change CSS color variables within the theme editor, without having to directly touch any code. 

To use theme colors, implement a `RootColors` key in your `skin.json` and assign a relative path to a CSS file that **ONLY** has `:root` inside it

```json title="Example skin.json"
{
    "RootColors": "path/to/colors.css",
}
```

And thats it! The rest will be handled for you automatically. the Colors will be globally available from any other CSS file! End-users can now customize these colors from **Settings -> Themes -> Edit**.

## Formatting

* ### Supported Color Formats
  * Raw RGB channels 
  * Raw RGBA channels
  * RGB channels
  * RGBA channels
  * Hex 
* ### Adding Exta Information
  * Add a custom name for a color with a comment above the color, and a `@name` selector
  * Add a custom description for a color with a comment above the color, and a `@description` selector

## Adding 

```css
:root {
    /* 
    * @name this is a name 
    * @description this is a description 
    */
    --raw-rgb: 123, 123, 123; 
    /*
    * @name this is a name 1
    */
    --raw-rgba: 123, 123, 123, 0.5;
    --rgb: rgb(123, 123, 123);
    --rgba: rgba(123, 123, 123, 0.5);
    --hex: #123456;

    /* these are examples of invalid, unparsable colors */
    --invalid-1: hsl(123, 50%, 50%);
    --invalid-2: blue;
}
```

## 