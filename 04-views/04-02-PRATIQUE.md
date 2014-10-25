#ES6 - Exercice 4: Views

##Remarque : `selector.js`

vous avez un mini sélecteur "à la jquery" ici : `public/js/skeleton/selector.js`

```javascript
let q = (selector) => {

  var nodes = Array.from(document.querySelectorAll(selector));

  if (nodes.length == 1) {
    nodes = nodes[0];
  } else {

    Object.assign(nodes, {
      first ()  { return this[0]; },
      last () { return this[this.length-1]; }
    });
  }

  nodes.find = q;

  return nodes;
}

export default q;
```

qui s'utilise comme ceci:

```javascript
import $q from 'js/skeleton/selector';

$q("h1");

$q("form").find("button").innerHTML = "HELLO";

/* etc. ... */
```

##Exercice

- complétez `public/js/skeleton/View.js` pour que `public/js/app/views/Title.js` s'affiche
- complétez `public/js/skeleton/View.js` pour que `public/js/app/views/HumanForm.js` s'affiche
- complétez `public/js/app/views/HumansList.js` pour afficher la liste des humains
- testez `public/js/app/views/HumanForm.js` pour vérifier que la liste des humains se met à jour

**Remarque**: les spécifications sont décrites dans les fichiers

    cd 04-views
    node app.js
    http://localhost:3000
