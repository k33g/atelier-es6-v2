#ES6 - Exercice 1: Models

##Le minimum pour commencer

###Côté serveur

- on fonctionne en "mode http", il nous faut donc un serveur http, j'ai pris node + express
- j'utilise NeDb pour "simuler" une base de données, c'est un MongoDb-like avec du fichier plat
- j'ai besoin de npm

####`package.json`

    {
      "name": "es6",
      "description": "es6",
      "version": "0.0.0",
      "dependencies": {
        "body-parser": "1.0.2",
        "express": "4.1.x",
        "nedb": "0.10.5"
      }
    }

Et je vous ai préparé un ficihier `app.js` avec les API REST qui vont bien pour faire du CRUD

###Côté client

Notre webapp sera dans le répertoire `/public`

Elle sera composée de:

- `index.html` dans `/public`, déjà préparée pour vous
- `main.js` dans `public/js` qui contiendra le code principal de notre application (essentiellement des tests qui sont déjà **codés**)
- `Model.js` dans `public/js/skeleton` : **vous allez devoir le coder** pour que les tests fonctionnent
- `Human.js` dans `public/js/app/models` : **vous allez devoir le coder** pour que les tests fonctionnent

Là aussi j'ai besoin de npm pour installer les dépendances :

- **Traceur**, qui va donc nous permettre d'exécuter du code ES6 (nous allons faire de la "transpilation online")
- **QUnit**, pour faire nos tests unitaires

####`package.json`

    {
      "name": "es6",
      "description": "es6 formation",
      "author": "@k33g_org",
      "license": "MIT",
      "dependencies": {
        "traceur": "0.0.65"
      },
      "devDependencies": {
        "qunitjs": "^1.15.0"
      }
    }

##Exercice

Créer nos 1ers modèles

- `public/js/skeleton/Model.js`
- `public/js/app/models/Human.js`

**Remarque**: les spécifications sont décrites dans les fichiers

    cd 01-models
    node app.js
    http://localhost:3000
