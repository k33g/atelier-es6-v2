#Correction

##`Model.js`

```javascript
/*--- model ---*/

/* === Spécifications ===
une classe Model

Paramètres du constructeur:

- fields, valeur par défaut {}, contiendra les "champs" du model, ex: {firstName:"Bob", lastName:"Morane"}
- observers, valeur par défaut []

Propriétés:

- fields : initialisé par le paramètre correspondant du constructeur
- observers : initialisé par le paramètre correspondant du constructeur

Méthodes:

- addObserver (observer)
- notifyObservers (context)
- get (fieldName), va lire la valeur d'un champ dans fields
- set (fieldName, value), va modifier la valeur d'un champ dans fields
- toString (), retourne une représentation json de fields

un observer est juste un objet avec une méthode update
donc notifyObservers execute la méthode update de tous les observers avec context en paramètre

*/

class Model {
  constructor (fields={}, observers=[]) {
    this.fields = fields;
    this.observers = observers;
  }

  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers (context) {
    this.observers.forEach((observer) => {
      observer.update(context)
    })
  }

  get (fieldName) {
    return this.fields[fieldName];
  }

  set (fieldName, value) {
    this.fields[fieldName] = value;
    return this;
  }

  toString () {
    return JSON.stringify(this.fields)
  }

}

export default Model;

```

##`Human.js`

```javascript
/* === Spécifications ===
 une classe Human qui hérite de Model
 
 Paramètres du constructeur:

 - fields, valeur par défaut {firstName:"John", lastName:"Doe"}, 
 
 Propriétés:
 
 - initialiser la propriété fields de la classe mère avec le paramètre du constructeur
 
 Méthodes:

 - sans objet

 */
import Model from '../../skeleton/Model';

class Human  extends Model {
  constructor (fields = {firstName:"John", lastName:"Doe"}) {
    //superclass's constructor invocation
    super(fields);

  }
}

export default Human;
```


