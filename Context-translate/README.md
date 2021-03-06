# React Context
Cheat-sheet for React Context 👍🏻<br />
<br />


## Basic idea
It is used for communication between parent and nested children.
<br /><br />

## Relation of parent & children in Context
![alt text](./src/MdPics/Basic.png)

## Steps for working with Context
### Class Based:
1. Create a folder named `Context`  
2. Create your js file `ExampleContext.js`
3. Write the code below  

```javascript
import React from 'react'
export default React.createContext("INITIAL VALUE OF CONTEXT")
```

4. Wrap your parent root in `<NameofContext.Provider>`.
<br />The content of `value` is the value of context being set and sent to either deep or direct child.
```javascript
import LanguageContext from '...'


<LanguageContext.Provider value={language}>
    <UserCreate />
</LanguageContext.Provider>
```

5. Use context in children components:<br />
- `this.context`: Using `this.context` to retrieve data <br />
**Note:** `static` keyword is for letting a varibale to be initialized inside a `class`.

```javascript
class Field extends React.Component {
    static contextType = LanguageContext // contextType is reserved word

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam' // this.context is the context being fetched from parent 
        return (
            <div className="ui field">
             <label>{text}</label>
             <input />
         </div>
        )
    }
}
```
- `Consumer`: you also can use Consumer to fetch data. <br />
**Note:** The child of consumer is a function, not JSX component.

```javascript
renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
}

<LanguageContext.Consumer>
    {(value) => this.renderSubmit(value)} // only function is acceptable
</LanguageContext.Consumer>
```
- `useContext`: We can also use `useContext` to simply get data that is recieved from parent.

```javascript
import { useContext } from 'react'

const {name} = useContext(nameContext) // Getting the value with useContext

return (
    <div>Name : {name}</div>       
)
```

<hr>

**Note:** Accessing multiple context in one element

```javascript
<ColorContext.Consumer> // calling one Consumer
    {(color) => {
        return (
        <button className={`ui button ${color}`}>
            {
            <LanguageContext.Consumer> // Calling another consumer
                {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
            }
        </button>
        );
    }}
</ColorContext.Consumer>
```

<hr>

**Note:** We can use context with no `Provider`. In that case, the components will use the default value of context.

```javascript
<LanguageContext.Provider value={language}> // passing Language as value
    <UserCreate />
</LanguageContext.Provider>

<UserCreate /> // passing default value of context (in this case: "english")
```
<hr>

**Note:** Each element that is using context inside of itself, is somehow generating a seperate pipe for transmitting data

```javascript
<LanguageContext.Provider value={language}>
    <UserCreate />
</LanguageContext.Provider>

<LanguageContext.Provider value={'english'}>
    <UserCreate />
</LanguageContext.Provider>

<UserCreate />
```

![alt text](./src/MdPics/Pipes.png)

<hr>

### Function Based:
- For passing data: Exactly same as class based `Provider` <br>
- For receiving data: Use `useContext`
  - Using `this.context` is not allowed in function based
  - Using `consumer` makes the code dirty.
