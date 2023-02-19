// call method
//In call method we can call the method of parent object with referencing to other object as below 
//we are trying to access person obj method for the peron1 obj. So we us call method for the below task
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"sidhanth",
    lastName: "kamble"
  }
  console.log(person.fullName.call(person1));

  //apply method
  //Apply method is same as call method. but we pass argument as array.

  const person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"akshya",
    lastName: "kumari"
  }
  
  console.log(person2.fullName.apply(person3, ["mumbai", "india"]));

  // bind method
  //In bind method we borrow function from other object class and use later when required.

  const person4 = {
    firstName:"akshay",
    lastName: "rao",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"raj",
    lastName: "kumar",
  }
  
  let fullName = person.fullName.bind(member);
  console.log(fullName());