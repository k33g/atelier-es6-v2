import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';

console.log("ES6 - Observables");

QUnit.test( "Olivia is watched by September and December", ( assert ) => {

  let olivia = new Human({firstName:"Olivia", lastName:"Dunham"})

  /* September is an Observer */
  let september = {
    update: (context) => {
      assert.ok(
          context.message == "hello" &&
          context.from == "Olivia"
        , "Olivia say hello to September"
      );
    }
  };

  /* December is an Observer */
  let december = {
    update: (context) => {
      assert.ok(
          context.message == "hello" &&
          context.from == "Olivia"
        , "Olivia say hello to December"
      );
    }
  };


  olivia.addObserver(september);
  olivia.addObserver(december);

  olivia.notifyObservers({message:"hello", from:"Olivia"})
});


QUnit.test( "Fringe division is watched by September", ( assert ) => {

  // initialize collection
  let fringeDivision = new Humans([
    new Human({firstName:"Olivia", lastName:"Dunham"}),
    new Human({firstName:"Walter", lastName:"Bishop"}),
    new Human({firstName:"Peter", lastName:"Bishop"})
  ]);

  /* September is an Observer */
  let september = {
    update: (context) => {
      assert.ok(
          context.event == "add"
        , "a model was added"
      );
      assert.ok(
          context.model.get("firstName") == "Astrid"
          && context.model.get("lastName") == "Farnsworth"
        , "this model is Astrid Farnsworth"
      );
    }
  };

  fringeDivision.addObserver(september);

  fringeDivision.add(new Human({firstName:"Astrid", lastName:"Farnsworth"}));

});
