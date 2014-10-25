// Rendre la classe "observable"

class Collection  {
  constructor (model, models = [], observers = []) {
    this.model = model;
    this.models = models;

    // compléter
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