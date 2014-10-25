import Human from 'js/app/models/Human';

console.log("ES6 - Les Modèles");

QUnit.test( "john is John Doe", ( assert ) => {

  let john = new Human();

  assert.ok(
      john.get("firstName") == "John" &&
      john.get("lastName") == "Doe"
    , "Default values of a Human are 'John Doe'"
  );

  john.set("lastName", "DOE");
  assert.ok(
      john.get("firstName") == "John" &&
      john.get("lastName") == "DOE"
    , "john.field.lastName is DOE"
  );

});


QUnit.test( "bob is Bob Morane", ( assert ) => {

  let bob = new Human({firstName:"Bob", lastName:"Morane"});

  assert.ok(
      bob.get("firstName") == "Bob" &&
      bob.get("lastName") == "Morane"
    , "bob.fields.firstName is Bob and bob.fields.lastName is Morane"
  );

});


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

