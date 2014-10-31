import Observable from './Observable';
import Request from './Request';

class Model extends Observable {

  // ajout de l'url
  constructor (fields={}, url="/", observers=[]) {

    this.fields = fields;
    this.url = url;

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

  /*--- sync ---*/

  /*
   NeDb retourne un id se cette manière : _id:""
   */
  id() { return this.get("_id");}

  save () {

    if (this.id() == undefined) {
      // create (insert)
      return new Request(this.url).post(this.fields)
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "create", model: this});
          return data;
        })
        .catch((error) => error)
    } else {
      // update
      return new Request(`${this.url}/${this.id()}`).put(this.fields)
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "update", model: this});
          return data;
        })
        .catch((error) => error)
    }

  }

  fetch (id) {

    if (id == undefined) {
      return new Request(`${this.url}/${this.id()}`).get()
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "fetch", model: this});
          return data;
        })
        .catch((error) => error)
    } else {
      return new Request(`${this.url}/${id}`).get()
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "fetch", model: this});
          return data;
        })
        .catch((error) => error)
    }

  }

  delete (id) {
    if (id == undefined) {
      return new Request(`${this.url}/${this.id()}`).delete()
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "delete", model: this});
          return data;
        })
        .catch((error) => error)
    } else {
      return new Request(`${this.url}/${id}`).delete()
        .then((data) => {
          this.fields = data;
          this.notifyObservers({event: "delete", model: this});
          return data;
        })
        .catch((error) => error)
    }

  }


}

export default Model;