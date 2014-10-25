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