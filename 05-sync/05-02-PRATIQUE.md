#ES6 - Exercice 5: Request

##Remarque : `Request.js`

vous avez une classe pour faire des requêtes ajax : `public/js/skeleton/Request.js`

qui s'utilise comme ceci:

```javascript

let request = new Request("/about").get()
  .then((data) => {
    console.log("data", data)
  })
  .catch((error) => {
    console.log("error", error)
  })
    
new Request("/humans").post({firstName:"JOHN", lastName:"DOE"})
  .then((data) => {
    console.log("data", data)
  })
  .catch((error) => {
    console.log("error", error)
  })    
    
```

##Exercice

- complétez `public/js/skeleton/Model.js` en complétant la méthode `save()`
- complétez `public/js/app/views/HumansList.js` pour afficher la liste des humains quand la collection est modifiée
- testez `public/js/app/views/HumanForm.js` pour vérifier que la liste des humains se met à jour

**Remarque**: les spécifications sont décrites dans les fichiers

    cd 05-sync
    node app.js
    http://localhost:3000
