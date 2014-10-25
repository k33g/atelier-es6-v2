#Correction

##`View.js`

```javascript
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
```


##`Title.js`

```javascript
import View from '../../skeleton/View';
import $q from '../../skeleton/selector';

class Title extends View {

  constructor (title) {

    super({
      element: $q("#my-title")
    });

    this.title = title;

    // afficher le titre
    this.render();
  }

  template (title) {
    return `<h1 style="color:green;">${title}</h1>`;
  }

  render () {
    this.html(this.template(this.title));
  }

}

export default Title;
```

##`HumansList.js`

```javascript

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
```


