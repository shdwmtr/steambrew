# call_frontend_method()

Call a frontend method (Javascript Method) with list of params. The order of the parameters are important
###  Example usage:
    #### Backend Implementation
        ```py title="backend/main.py"
        value = Millennium.call_frontend_method("classname.method", params=[18, "USA"])
        print(value) -> "method called"
        ```
        
    #### Frontend Implementation:
        
        ```js title="frontend/index.jsx"
        class classname {
        static method(country: string, age: number) {
                console.log(`age: ${age}, country: ${country}`);
                return "method called"
            }
        }
        Millennium.exposeObj({ classname })
        ```
### Notes: 
        - `call_frontend_method` will not abide by your types set in a function in typescript. For example if your age param was a string
            `params=["18", "USA"]` undefined behaviour may occur. 
        - if in python you call this method with [bool, string] instead of [string, number] you will have to manage that yourself