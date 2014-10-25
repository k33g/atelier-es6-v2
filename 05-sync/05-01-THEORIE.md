#ES6 - Partie 5

##Les Promises!

```javascript
let doSomeThing = new Promise((resolve, reject) => {

  // faites quelque chose (asynchrone)

  let allisfine = true; // essayez avec false
  
  if (allisfine) {
    resolve("Hello World!");
  }
  else {
    reject(Error("Ouch"));
  }
});

doSomeThing
  .then((data) => { console.log(data); })
  .catch((err) => { console.log(err); });
```
  
**Voir cet article**: [http://www.html5rocks.com/en/tutorials/es6/promises/](http://www.html5rocks.com/en/tutorials/es6/promises/)



