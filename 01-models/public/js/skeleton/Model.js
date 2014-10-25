class Model {
  constructor (fields={}, observers=[]) {
    // définir les propriétés de la classe

  }

  addObserver (observer) {
    // ajouter un observer à la liste des observers du modèle
  }

  notifyObservers (context) {
    // notifier les observers : appeler la méthode update de tous les observers
    // en lui passant context en paramètre
  }

  get (fieldName) {
    // retourne la valeur du champ nommé fieldname
  }

  set (fieldName, value) {
    // modifie la valeur du champ nommé fieldname
  }

  toString () {
    return JSON.stringify(this.fields)
  }

}

export default Model;