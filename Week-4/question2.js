var Person = function(){
    
};

Person.prototype.initialize = function (name,age){
    this.name=name;
    this.age=age;
}

var Teacher = function(){
};
Teacher.prototype.constructor=Teacher;

Teacher.prototype.teach = function (sub){
    this.sub=sub;
    return `${this.name} is teaching ${sub}`;
};

Object.setPrototypeOf(Teacher.prototype,Person.prototype);

var him = new Teacher('mumbai');
him.initialize('sid',23);
him.teach('math');
