import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import Title from 'js/app/views/Title';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';

import $q from 'js/skeleton/selector';

QUnit.test("Verifiy if my-title exists", ( assert ) => {

  let myTitle = new Title("Hello World!");

  assert.ok($q("#my-title > h1").innerText == "Hello World!");
});


QUnit.test("Add humans ...", ( assert ) => {

  // initialize collection
  let fringeDivision = new Humans([
    new Human({firstName:"Olivia", lastName:"Dunham"}),
    new Human({firstName:"Walter", lastName:"Bishop"}),
    new Human({firstName:"Astrid", lastName:"Farnsworth"}),
    new Human({firstName:"Peter", lastName:"Bishop"})
  ]);

  let humansList = new HumansList(fringeDivision);
  let humanForm = new HumanForm(fringeDivision);

  fringeDivision.notifyObservers({event:"loaded"})

  let lst = $q("#humans-list > * li");
  assert.ok(lst.first() !== undefined, `first li: ${lst.first().innerText}`);
  assert.ok(lst.last() !== undefined, `last li: ${lst.last().innerText }`);

});






