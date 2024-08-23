# exposeObj()
Expose a function to mainworld so it can be called from the backend. The exposed object doesn't have to be in a class and it doesn't even have to be a function

### Tips
Exposed objects are stored in a private container on the SharedJSContext called `window.PLUGIN_LIST`. With this example it would be 
```js
window.PLUGIN_LIST['your_plugin'].classname
```

### Example

    ```js title="frontend/index.jsx"
    class classname {
    static method(country: string, age: number) {
            console.log(`age: ${age}, country: ${country}`);
            return "method called"
        }
    }
    Millennium.exposeObj({ classname })
    ```

#### Backend Implementation

```py title="backend/main.py"
value = Millennium.call_frontend_method("classname.method", params=[18, "USA"])
print(value) # "method called"
```