#Correction

##`Observable.js`

```javascript
class Observable {

  constructor (observers=[]) {
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
}

export default Observable;
```


##`Model.js`

```javascript
import Observable from './Observable';

class Model extends Observable {

  constructor (fields={}, observers=[]) {
    this.fields = fields;
    super(observers);
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

##`Collection.js`

```javascript
import Observable from './Observable';

class Collection extends Observable {
  constructor (model, models = [], observers = []) {
    this.model = model;
    this.models = models;
    super(observers);
  }

  toString () {
    return JSON.stringify(this.models);
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

