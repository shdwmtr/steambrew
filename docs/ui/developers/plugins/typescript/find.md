# findElement()
Wait for and capture an element by querySelector

|Parameter|Type|Description|
|-----|:------:|-----------|
|privateDocument|string|specify the document to search from. This is usually `document`|
|querySelector|string|querySelector string to find the element. Works identical to `document.querySelectorAll`|
|timeOut?|number|reject the function return promise if the time to find this element surpases `timeOut` |


- type `method`
- returns `Promise<HTMLElement[]>`