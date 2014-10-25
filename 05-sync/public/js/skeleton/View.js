class View {

  constructor (options={}) {
    /*
     exemple:
     options: {model,collection,element}
     */
    Object.assign(this, options);
  }

  html (code) {
    this.element.innerHTML = code;
  }

  // transformer la vue en observer
  listen (observable, callback) {
    observable.addObserver(this);
    // la vue devient un observer
    this.update = callback;
  }

}

export default View;
