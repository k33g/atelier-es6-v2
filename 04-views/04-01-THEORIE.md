#ES6 - Partie 4

##Interpolations de chaînes

###Template strings

```javascript
let firstName = "Bob", lastName = "Morane";
console.log(`Hello I'm ${firstName} ${lastName}`); // Hello I'm Bob Morane
```

###Multiline strings

```javascript
let firstName = "Bob", lastName = "Morane";
console.log(`
Hello I'm 
  ${firstName} 
  ${lastName}
`
); 
/*
Hello I'm 
  Bob 
  Morane
*/
```

###Tagged template strings

```javascript
let upper = (strings, ...values) => {
  console.log(strings); // ["Hello I'm ", " ", "", raw: Array[3]]
  console.log(values);  // ["Bob", "Morane"] 
  let result = "";
  for(var i = 0; i < strings.length; i++) {
      result = result + strings[i];
      if (i < values.length) {
          result = result + values[i];
      }
  }
  return result.toUpperCase();
}
let firstName = "Bob", lastName = "Morane";
console.log(upper `Hello I'm ${firstName} ${lastName}`)
/*
HELLO I'M BOB MORANE
*/
```

##Mixin d'objets

```javascript
let tonyStark = {
  firstName:"Tony", lastName:"Stark"
};
let armorAbilities = {
  fly:() => console.log("I'm flying")
};
Object.assign(tonyStark, armorAbilities);

tonyStark.fly(); // I'm flying

```

##Array.from

Exemple:

Avant pour parcourir comme un tableau le résultat d'un `document.querySelectorAll`, il fallait d'abord transformer ce résultat en tableau :

```javascript
var items = [].slice.apply(document.querySelectorAll("li"));
// ou var items = Array.prototype.slice.apply(document.querySelectorAll("li"));
items.forEach(function(item) { ... });
```

Maintenant :

```javascript
Array.from(document.querySelectorAll("li")).forEach((item) => {})
```


