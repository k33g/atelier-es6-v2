import Human from 'js/app/models/Human';
import Humans from 'js/app/models/Humans';
import HumansList from 'js/app/views/HumansList';
import HumanForm from 'js/app/views/HumanForm';
import $q from 'js/skeleton/selector';

import Request from 'js/skeleton/Request';

/* exmples d'utilisation de Request */

QUnit.test("Get About message", ( assert ) => {
  stop();

  let request = new Request("/about").get()
    .then((data) => {
      assert.ok(data.message == "Hello World!", "message from server is 'Hello World!'");
      console.log("data", data)
      start()
    })
    .catch((error) => {})
});

QUnit.test("Bad Request", ( assert ) => {
  stop();

  let badRequest = new Request("/something").get()
    .then((data) => {

    })
    .catch((error) => {
      assert.ok(error.message=="Not Found", "error message is 'Not Found");
      console.error("error", error)
      start()
    })
});



QUnit.test("Add humans ...", ( assert ) => {
  stop();
  expect(5);

  let Olivia = new Human({firstName:"Olivia", lastName:"Dunham"});
  Olivia.save().then((data)=>{
    assert.ok(Olivia.id() !==undefined, `id of Olivia is ${Olivia.id()}`);
    console.log(1, "Olivia", data);
  });

  let Walter = new Human({firstName:"Walter", lastName:"Bishop"});
  Walter.save().then((data)=>{
    assert.ok(Walter.id() !==undefined, `id of Walter is ${Walter.id()}`);
    console.log(2, "Walter", data);
  });

  let Peter = new Human({firstName:"Peter", lastName:"Bishop"});
  Peter.save().then((data)=>{
    assert.ok(Peter.id() !==undefined, `id of Peter is ${Peter.id()}`);
    console.log(3, "Peter", data);
  });

  let Astrid = new Human({firstName:"Astrid", lastName:"Farnsworth"});
  Astrid.save().then((data)=>{
    assert.ok(Astrid.id() !==undefined, `id of Astrid is ${Astrid.id()}`);
    console.log(4, "Astrid", data);

  });

  let fringeDivision = new Humans();

  let humansList = new HumansList(fringeDivision);
  let humanForm = new HumanForm(fringeDivision);

  fringeDivision.fetch().then((data) => {
    console.log("All humans", data)
    assert.ok(
        fringeDivision.size() > 0
      , `size of fringeDivision collection ${fringeDivision.size()}`
    );
  });


  setTimeout(()=> {
    start();
  }, 1000);

});












