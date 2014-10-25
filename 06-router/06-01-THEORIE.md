#ES6 - Partie 6

##Map

```javascript
let map = new Map();
map.set("one",{firstName:"John", lastName:"Doe"});
map.set("two",{firstName:"Jane", lastName:"Doe"});

console.log(map.has("one"));  // true
console.log(map.get("one"));  // Object {firstName: "John", lastName: "Doe"}
console.log(map.size);        // 2

for (let key of map.keys()) {
  console.log("Key: %s", key);
}
/*
 Key: one
 Key: two
*/

for (let value of map.values()) {
  console.log("Value: %s %s", value.firstName, value.lastName);
}
/*
 Value: John Doe
 Value: Jane Doe
*/

for (let item of map) {
  console.log("Key: %s, Value: %s", item[0], item[1].firstName, item[1].lastName);
}
/*
 Key: one, Value: John Doe
 Key: two, Value: Jane Doe
*/

/* Et aussi : */

let myOtherMap = new Map([
  ["one",{firstName:"John", lastName:"Doe"}],
  ["two",{firstName:"Jane", lastName:"Doe"}],
  ["three",{firstName:"Bob", lastName:"Morane"}]
]);

myOtherMap.delete("three")

myOtherMap.forEach((item)=>{
  console.log(item)
})
/*
 Object {firstName: "John", lastName: "Doe"}
 Object {firstName: "Jane", lastName: "Doe"}
*/

```

##Remarque

Vos classes peuvent hériter des types javascript (mais pas tout le temps :( )

