#ES6 - Partie 1

*Ou, tout ce dont vous avez besoin pour le 1er exercice.*

##Ce que nous attendions tous: les Classes

```javascript
class Dog {
  constructor (name="cookie") { /* mot-clé constructor + valeurs par défaut */
    this.name = name; /* propriétés définies dans le constructeur */
  }
  wouaf () { /* pas de mot-clé function */
    console.log(this.name + ": wouaf! wouaf!");
  }
}

let wolf = new Dog();
wolf.wouaf()
```
##Bien sûr, on peut "hériter"

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor (name="cookie") {
    super(name) /* on appelle le constructeur de la classe mère */
  }
  wouaf () {
    console.log(this.name + ": wouaf! wouaf!");
  }
}

let wolf = new Dog();
wolf.wouaf()
```

##Import / Export: ou la modularisation facile

###Classe Animal dans `Animal.js`

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}
export default Animal;
```

###Classe Dog dans `Dog.js`

```javascript
import Animal from './Animal'; /* pas d'extension .js */

class Dog extends Animal {
  constructor (name="cookie") {
    super(name) /* on appelle le constructeur de la classe mère */
  }
  wouaf () {
    console.log(this.name + ": wouaf! wouaf!");
  }
}
export default Dog;
```

###Utilisation de Dog dans `main.js`

```javascript
import Dog from './Dog'
let wolf = new Dog();
wolf.wouaf()    
```

##Fat Arrow `=>`

```javascript
/* Avant */
var sayHello = function(name) { return "hello " + name; }

/* Après */
var sayHello = (name) => "hello " + name
// ou var sayHello = (name) => { return "hello " + name; }
sayHello("Bob Morane");
```

Remarques:

- pas "newable"
- pas d'objet `arguments`, à la place : "rest parameters"

```javascript
var sayHello = (...people) => people.forEach((somebody) => console.log("Hello", somebody));

sayHello("Bob Morane", "John Doe", "Jane Doe");
```

###Fat Arrow + Lexical `this` binding 

La valeur de `this` est déterminée par l'endroit où se trouve la "Arrow function"

```javascript
/* Avant */
function Animal(friends) {
  this.friends = friends;
  this.hello = function(friend) {
    console.log("hello " + friend);
  }
  this.helloAll = function() {
    this.friends.forEach(function(friend) {
      this.hello(friend); /* error */
    });
  }
}

var wolf = new Animal(["rox", "rookie"]);
wolf.helloAll();


/* Correction : bind */
function Animal(friends) {
  this.friends = friends;
  this.hello = function(friend) {
    console.log("hello " + friend);
  }
  this.helloAll = function() {
    this.friends.forEach(function(friend) {
      this.hello(friend);
    }.bind(this)); // ou var that = this
  }
}

var wolf = new Animal(["rox", "rookie"]);
wolf.helloAll();


/* Après */
class Animal {
  constructor (friends=[]) {
    this.friends = friends;
  }
  hello(friend) { console.log("hello " + friend); }
  helloAll() {
    this.friends.forEach((friend) => this.hello(friend));
  }
}
```

##`let` versus `var`

###`var`

```javascript
var bob = {
  firstName:"Bob", lastName:"Morane"
}

var bob = { foo:"foo"}
```

###`let` : c'est plus propre

```javascript
let bob = {
  firstName:"Bob", lastName:"Morane"
}

let bob = { foo:"foo"} /* Duplicate declaration, bob */
```

##Exécuter du code ES6: Préparation de `index.html`

```html
<script src="node_modules/traceur/bin/traceur.js"></script>

<script>
  traceur.options.experimental = true;
</script>

<script>
  System.import('js/main').catch(function (e) {console.error(e);});
</script>
```

**PS**: il y a d'autres méthodes, mais pour apprendre, c'est la plus simple
