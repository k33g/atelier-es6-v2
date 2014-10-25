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
    return new Promise((resolve, reject) => {

      if (this.id() == undefined) {
        // create (insert) -> notifier les observers avec {event: "create", model: this}

        /* compléter */

      } else {
        // update -> notifier les observers avec {event: "update", model: this}

        /* compléter */
      }
    });

  }

  fetch (id) {

    return new Promise((resolve, reject) => {
      if (id == undefined) {
        new Request(`${this.url}/${this.id()}`).get()
          .then((data) => {
            this.fields = data;
            this.notifyObservers({event: "fetch", model: this});
            resolve(data)
          })
          .catch((error) => reject(error))
      } else {
        new Request(`${this.url}/${id}`).get()
          .then((data) => {
            this.fields = data;
            this.notifyObservers({event: "fetch", model: this});
            resolve(data)
          })
          .catch((error) => reject(error))
      }
    });

  }

  delete (id) {
    return new Promise((resolve, reject) => {
      if (id == undefined) {
        new Request(`${this.url}/${this.id()}`).delete()
          .then((data) => {
            this.fields = data;
            this.notifyObservers({event: "delete", model: this});
            resolve(data)
          })
          .catch((error)=>reject(error))
      } else {
        new Request(`${this.url}/${id}`).delete()
          .then((data) => {
            this.fields = data;
            this.notifyObservers({event: "delete", model: this});
            resolve(data)
          })
          .catch((error)=>reject(error))
      }
    });
  }


}

export default Model;