import Human from '../models/Human';

import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class HumanForm extends View {

  constructor (humansCollection) {

    super({
      collection: humansCollection,
      element: $q("#human-form")
    });

    // afficher le formulaire
    this.render();

    let button = this.element.find("button");

    this.firstName = this.element.find("#firstName");
    this.lastName = this.element.find("#lastName");

    button.addEventListener("click", (event) => this.click(event), false);

  }



  click (event) {
    event.preventDefault();

    let human = new Human({
      firstName: this.firstName.value,
      lastName : this.lastName.value
    });

    human.save().then((data)=>{
      console.log(data)
      this.element.find("b").innerHTML = "new human:" + JSON.stringify(data) ;
      this.collection.fetch()
    });

  }

  template () {
    return `
      <b></b>
      <hr>
      <form>
        <input id="firstName" placeholder="firstName"/>
        <input id="lastName" placeholder="lastName"/>
        <button>add</button>
      </form>
      <hr>
    `;
  }

  render () {
    this.html(this.template());
  }

}

export default HumanForm;