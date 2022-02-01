console.log("hello,😊");
console.log(22+22);

//diff types of declaration:var,char,let

var a = 10;
console.log(a);

//datatypes
//we can get typeof also like number,boolean,string
console.log(typeof a);


var b = [3,5,6];
//typeof object
console.log(typeof b);

var x1 = 7;
var x2 ="2";
console.log(x1 + x2);
console.log(x1 - x2);
//72 and 5
//converting a number into string is caleed typecasting or coercion

var t1 = "hello";
var t2 = "how are you";
var t3 = "how is your classes going on";
console.log(t1 + "," +  t2 + "," + t3);


console.log (typeof null);
var t3 = "abc" - 6;
console.log(t3);
console.log(typeof t3 );



var x1 = 10;
var x2 = "20";
console.log(x1 + parseInt(x2));
console.log(x1 + +x2);
console.log(-a,typeof -a);


var t3 = "abc" - 8;
console.log(t3,typeof t3);
console.log(Number.isNaN(t3),Number.isNaN(4));
console.log(!(t3==t3));


var g1 = 5;
var g2 = "9";
console.log(g1==g2);
console.log(g1===g2);


var v1 = 4;
var v2 = 4;
var y1 = [100,200];
var y2 = [100,200];
var y3 = y1;
console.log(v1 === v2);
console.log(y1 === y2);
console.log(y1 === y3);



y2.push(5);
y1.push(10);
y3.push(40);
console.log(y1);
console.log(y2);
console.log(y3);


var q1 = [100,200];
var q3 =[...q1];
console.log(q1,q3);
console.log(q1 === q3);

var q1 = [100,200];
var q3 = [...q1];
var q4 = [...q1,300,400];
console.log(q4);
var q5 = [700, 800];
var q6 = [...q1,...q5];
console.log(q6);
var q7 =[80,...q1,300,400];
console.log(q7);

var marks =[10,20,30,40,50];

for (var i = 0;i < marks.length; i++){
console.log("i is",i, "value is",marks[i]);
}


for(var mark of marks) {
    console.log("mark is",mark);
}

for(var index in marks){
    console.log("index is ", index, "mark is",marks[index]);
}
console.log(marks.join());

var student = {
    Name: "naveen",
    batch: "b31wd",
    gender: "male",
    //key:"naveen",
};
console.log(student.Name);

for (var key in student){
    console.log("key is",key,"value is",student.key);
}


var o1 = 4;
var o2 = 10;
var result = o1 + o2;
console.log(result);

function sum(num1, num2){
   return  num1 + num2;
}

console.log(sum(4, 10));
console.log(sum(50, 100));
console.log(sum(70, 100));

const names = [
    {
      marks: 32,
      name: "Yvette Merritt"
    },
    {
      marks: 57,
      name: "Lillian Ellis"
    },
    {
      marks: 22,
      name: "Mccall Carter"
    },
    {
      marks: 21,
      name: "Pate Collier"
    },
    {
      marks: 91,
      name: "Debra Beard"
    },
    {
      marks: 75,
      name: "Nettie Hancock"
    },
    {
      marks: 20,
      name: "Hatfield Hodge"
    }
  ];
  
  //function Name(names) {
    //  return `$ {"[Yvette Merritt"} ,${ "Lillian Ellis"}, ${ "Mccall Carter"}, ${ "Pate Collier"}, ${"Debra Beard"}, ${"Nettie Hancock"}, ${ "Hatfield Hodge]"}`;
  //}
  //console.log(Name(names));

//task1
  const name = names.map(student=>student.name.toUpperCase());
  console.log(name);



//const name = names.filter(student => student.marks>40);
//console.log(names);

//task2
const scores = names.filter(student => student.marks > 40);
console.log(scores);

//task3
//const score = names.filter(student => student.marks < 40);
//console.log(score);


const score = names.filter(student => student.marks <40).map(student => student.name)
console.log(score);


//task 1
const total  = [32,57,22,21,91,75,20];
const totals = scores.reduce((total,score) => total + score) / score.length;
console.log(result);



//task:
//call method()
//call(this[, arg1, arg2,...])
//calls a function with provided this.further arguments are provided as a comma seperated list.
//example
var obj1 = {
  num:2,
};
var obj2 = {
  f1:function(a,b,c){
    console.log(this.num + a + b + c);
  }
};
obj2.f1.call(obj1,2, " hello"," guvi");


//task:
//apply method()
//apply(this [, [arg1,arg2,...]])
//calls a function with provided this value .further arguments are provided as a single array.
//both the call and apply methods are same but the values should be within square bracket or we have to create a seperate array.
var obj1 = {
  num:10,
};
var obj2 = {
  f1:function(a,b,c){
    console.log(this.num + a + b + c);
  }
};
obj2.f1.apply(obj1,[2, " hello"," raghav"]);


//task:()
//bind(this)
//returns a new function whose this value is bound to provided value.
var obj1 = {
  num:4,
};
var obj2 = {
  f1:function(a,b,c){
    console.log(this.num + a + b + c);
  }
};
var r=obj2.f1.bind(obj1,2, " hello"," B3WD1");
r();


//task
//prototype inheritance
//its used to add methods and properties in objects.object can inherit the properties and methods of another object.
function car() {
}
car.prototype.drive = function() {
  console.log('vrooooom');
};
var benz = new car();
  benz.drive();


  //task:
