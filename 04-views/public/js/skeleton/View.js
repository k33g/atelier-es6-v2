class View {

  constructor (options={}) {
    /*
     les options doivent "devenir" des propriétés de la vue
     ex:
     let myView = new View({collection: myColl, element: $q("#my-list")})

     on aura ensuite une vue avec une propriéte collection
     et une propriété element
     */

  }

  html (code) {
    this.element.innerHTML = code;
  }


  listen (observable, callback) {

    // 1- transformer la vue en observer (elle devient observer de l'observable)

    // 2- callback devient la méthode update de la vue (callback sera exécuté quand
    //    la vue sera notifiée)


  }

}

export default View;
