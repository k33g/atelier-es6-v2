// rendre la classe Model "observable"

class Model {

  constructor (fields={}, observers=[]) {
    this.fields = fields;

    // compléter
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