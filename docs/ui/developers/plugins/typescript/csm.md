# callServerMethod()
Call a backend method (Python Method) with list of params.

### Notes
This function does not handle [Abstract Data Types](https://en.wikipedia.org/wiki/Abstract_data_type). `boolean`, `string`, and `integers` are the only accepted parameters and return types


|Parameter|Type|Description|
|-----|:------:|-----------|
|methodName|string|Name of the backend method|
|kwargs?|object|Keyword arguments passed to the Python API|


- type `method`
- returns `string|bool|number`