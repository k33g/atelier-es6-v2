import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';

console.log("ES6 - Les Collections");

QUnit.test( "Bob, John and Jane are in a collection", ( assert ) => {

  let john = new Human();
  let bob = new Human({
    firstName:"Bob",
    lastName:"Morane"
  });

  let humans = new Humans([john, bob]);

  assert.ok(
      humans.size() == 2
    , "John and Bob are in a collection"
  );

  humans.add(new Human({ firstName: "Jane", lastName: "Doe"}))

  assert.ok(
      humans.size() == 3
    , "John, Bob and Jane are in a collection"
  );

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


QUnit.test( "Parsing Fringe division", ( assert ) => {

  let fringeDivision = new Humans([
    new Human({firstName:"Olivia", lastName:"Dunham"}),
    new Human({firstName:"Walter", lastName:"Bishop"}),
    new Human({firstName:"Peter", lastName:"Bishop"}),
    new Human({firstName:"Astrid", lastName:"Farnsworth"})
  ]);

  let team = "";
  fringeDivision.each(
    (human) => team += human.get("firstName")
  );

  assert.ok(
      team == "OliviaWalterPeterAstrid"
    , "the Fringe Division firstNames : OliviaWalterPeterAstrid"
  );

  let bishopFamily = fringeDivision.filter(
    (human) =>  human.get("lastName") == "Bishop"
  );

  assert.ok(bishopFamily.length == 2, "2 people in Bishop Family")

});