#Correction

##`Collection.js`

```javascript
/*--- collection ---*/

/* === Spécifications ===
 une classe Collection

 Paramètres du constructeur:

 - model : ce sera le type de la collection (une classe qui héritera de Model), pas de valeur par défaut
 - models : un tableau, contiendra les instances de modèles, valeur par défaut : []
 - observers, valeur par défaut []

 Propriétés:

 - model : initialisé par le paramètre correspondant du constructeur
 - models : initialisé par le paramètre correspondant du constructeur
 - observers : initialisé par le paramètre correspondant du constructeur

 Méthodes:

 - addObserver (observer)
 - notifyObservers (context)
 - toString (), retourne une représentation json de la propriété models
 - add (model), ajoute un model à models et notifie les observers avec un "contexte" égal à {event: "add", model: model}
 - each (callbck) : parcourir les models et exécuter callbck pour chacun (et passer le modèle en paramètre à callbck)
 - filter (callbck) : retourner un tableau de modèle filtré selon callbck
 - size () : retourner le nombre de modèles dans la collection
 
 un observer est juste un objet avec une méthode update
 donc notifyObservers execute la méthode update de tous les observers avec context en paramètre

 */


class Collection {
  constructor (model, models = [], observers = []) {
    this.model = model;
    this.models = models;
    this.observers = observers;
  }

  toString () {
    return JSON.stringify(this.models);
  }

  addObserver (observer) {
    this.observers.push(observer);
  }

  notifyObservers (context) {
    this.observers.forEach((observer) => {
      observer.update(context)
    })
  }

  add (model) {
    this.models.push(model);
    this.notifyObservers({event: "add", model: model});
    return this;
  }

  each (callbck) {
    this.models.forEach(callbck)
  }

  filter (callbck) {
    return this.models.filter(callbck)
  }

  size () { return this.models.length; }

}

export default Collection;

```

##`Humans.js`

```javascript
/* === Spécifications ===
une classe Humans qui hérite de Collection

Paramètres du constructeur:

- humans, un tableau de modèles

Propriétés:

- initialiser la propriété model de la classe mère avec le type Human
- initialiser la propriété models de la classe mère avec le paramètre humans du constructeur

Méthodes:

- sans objet
*/

import Collection from '../../skeleton/Collection';
import Human from './Human';

class Humans extends Collection{

  constructor (humans) {
    super(Human,humans);
  }
}

export default Humans;
```

