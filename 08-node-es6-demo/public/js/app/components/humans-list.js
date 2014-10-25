import Human from '../models/Human';
import Humans from '../models/Humans';

Polymer("humans-list", {
  ready: function() {
    this.humansCollection = new Humans();
    //humans-list is an observer
    this.humansCollection.addObserver(this);
    this.humansCollection.fetch();
    this.human = new Human();
  },
  update: function (context) { // called when collection is "fetched"
    this.humans = this.humansCollection.models;
  },
  add: function () {

    this.human.save().then(() => {
      this.human = new Human();
      this.humansCollection.fetch();
    });

  }

});