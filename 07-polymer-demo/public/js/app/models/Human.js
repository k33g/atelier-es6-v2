import Model from '../../skeleton/Model';

class Human  extends Model {
  constructor (fields = { firstName:"John", lastName:"Doe"  }) {
    //superclass's constructor invocation
    //super(fields);
    super(fields, "/humans");

    //Getters and Setters - Old ES5 Way
    /*
    Object.defineProperty(this, "firstName", {
      get: function (){ return this.fields["firstName"]} ,
      set: function (value) { this.fields["firstName"]=value; }
    });

    Object.defineProperty(this, "lastName", {
      get: function (){ return this.fields["lastName"]} ,
      set: function (value) { this.fields["lastName"]=value; }
    });
    */
  }

  /* new ES6 Way */
  get firstName () { return this.get("firstName"); }
  set firstName (value) { this.set("firstName", value); return this; }

  get lastName () { return this.get("lastName"); }
  set lastName (value) { this.set("lastName", value); return this; }
}

export default Human;
