#ES6 - Exercice 6: Router

Le routeur a plusieurs routes

Routes : une url danssle navigateur que l'on associe à un traitement (ex afficher une vue)
Du coup les fonctionnalités de ma webapp sont bookmarkables

Ma classe Router a une propriété `routes` qui est une `Map`

Donc si je veux créer un routeur et rajouter des routes :

     let router = new Router();
    
     router.routes.set("humans", (args) => {
      // faire quelque chose
     });
    
     router.routes.set("animals", (args) => {
      // faire quelque chose
     });
    
     router.routes.set("/", (args) => {
     // faire quelque chose
     });

- Ajouter une méthode `add(uri, action)` à la classe `Router`
- Ajouter une méthode `match(uri)` qui servira à vérifier les urls saisies dans le navigateur ou les liens cliqués et déclencher les méthodes associées

uri peut prendre différents types de valeurs :

- `#/humans`
- `#/humans/1234`
- etc...

Donc `match(uri)` va "retraiter" `uri` : enlever le `#/` et:

- `#/humans`      devient humans
- `#/humans/1234` devient humans/1234

Ensuite

- "spliter" `uri` : on sépare tous les éléments entre les `"/"`
- on obtient un tableau que l'on filtre pour ne garder que les éléments dont la taille > 0

- **le 1er élément du tableau** devient **la clé** à rechercher dans la map
- les éléments restants représentent **les paramètres** que l'on passera à la méthode correspondant à la clé

Par exemple si je saisis `#/humans/bob/morane`, cela deviendra :

    ["humans", "bob", "morane"]

*et j'irais chercher dans mon instance de Router la clé `"humans"` qui va me retourner une méthode à laquelle je passerais (si elle existe) les paramètres `["bob", "morane"]` (donc sous forme d'un tableau) et je l'exécuterais*

*(allez voir `main.js` pour les exemples)*

**J'ai ajouté une méthode `listen()`**

Elle va une 1ère fois au lancement vérifier l'url pour déterminer s'il y a un traitement à lancer, la méthode `match` du routeur sera appelé avec `window.location.hash` en paramètre.

`window.location.hash` : retourne la partie de l'url qui correspond à "anchor" : `http://localhost:3000/#/humans` donnera `#/humans`

Cette 1ère vérification est utile si on a bookmarké une fonctionnalité de l'application

Ensuite on va s'abonner à l'évènement `onpopstate` (déclenché lorsque l'utilisateur "navigue", ultilise le bouton back, etc...)

et à chaque fois que l'évènement `onpopstate` sera déclenché, la méthode `match` du routeur sera appelé avec `window.location.hash` en paramètre.


##Exercice

- complétez `public/js/skeleton/Router.js` en complétant les méthodeq `add()` et `match()`


**Remarque**: les spécifications sont décrites dans les fichiers

    cd 06-router
    node app.js
    http://localhost:3000
