
import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class HumansList extends View {

  constructor (humansCollection) {
    /*
     HumansList aura une propriété collection = humansCollection
     HumansList aura une propriété element correspondant au div
     avec un id = "humans-list"
    */
    super({});

    /*
      écouter la collection et raffraîchir la liste (la vue)
      lorsque que la collection est chargée
      ou lorsque l'on ajoute un modèle
    */

    this.listen(humansCollection, null) // <-- corriger cette ligne

  }

  template (humans) {

    /*
      faire un template qui retourne les firstName et lastName
      de chacun des items dans humans:
      <ul>
        <li> ... </li>
        <li> ... </li>
      </ul>
     */

    return `mon template viendra ici`;
  }

  render () {
    this.html(this.template(this.collection));
  }

}

export default HumansList;