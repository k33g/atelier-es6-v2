
import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class HumansList extends View {

  constructor (humansCollection) {

    super({
      collection: humansCollection,
      element: $q("#humans-list")
    });

    // afficher la liste lorsque la collection est "chargée"
    // ou lorsque l'on ajoute un modèle
    this.listen(humansCollection, (context) => {
      if (context.event == "loaded" || context.event == "add") {
        this.render();
      }
    })

  }

  template (humans) {
    return `
      <ul>${
        humans.models.map(
          (human) => `<li>${human.get("firstName")}, ${human.get("lastName")}</li>`
        ).join("")
      }</ul>
    `;
  }

  render () {
    this.html(this.template(this.collection));
  }

}

export default HumansList;