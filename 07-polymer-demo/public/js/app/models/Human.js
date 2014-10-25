import Model from '../../skeleton/Model';

class Human  extends Model {
  constructor (fields = { firstName:"John", lastName:"Doe"  }) {
    //superclass's constructor invocation
    //super(fields);
    super(fields, "/humans");

    //Getters and Setters
    Object.defineProperty(this, "firstName", {
      get: function (){ return this.fields["firstName"]} ,
      set: function (value) { this.fields["firstName"]=value; }
    });

    Object.defineProperty(this, "lastName", {
      get: function (){ return this.fields["lastName"]} ,
      set: function (value) { this.fields["lastName"]=value; }
    });
  }
}

export default Human;
