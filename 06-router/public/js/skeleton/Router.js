
class Router {

  constructor () {
    this.routes = new Map();
  }

  add (uri, action) {

  }

  match (uri) {
    console.log(uri)
  }

  listen () {
    // une fois le routeur en mode écoute
    // lui faire vérifier une 1ère fois l'url pour déterminer quoi faire
    this.match(window.location.hash);

    /* s'abonner à onpopstate */
    window.onpopstate = (event) => {
      this.match(window.location.hash);
    };
  }

}

export default Router