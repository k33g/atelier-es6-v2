class Collection {
  constructor (model, models = [], observers = []) {
    // on conserve le type de model utilisé : cela servira plus tard
    // par exemple pour vérifier ce que l'on ajoute
    this.model = model;

    // une collection a des modèles

    // une collection a des observers

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
    // ajouter un modèle à la collection

    // notifier les observers que l'on a ajouté un modèle
    // avec ceci : {event: "add", model: model}

    return this;
  }

  each (callbck) {
    // parcourir les modèles et effectuer un traitement pour chacun
    /* exemple d'utilisation
        humans.each((human) => console.log(human.get("firstName")))
    */

  }

  filter (callbck) {
    // retourner la liste des modèles qui correspondent filtre (predicat)
    /* exemple d'utilisation
      humans.filter((human) => human.get("firstName") == "Bob" ))
    */

  }

  size () {
    // retourner la taille de la collection
  }

}

export default Collection;