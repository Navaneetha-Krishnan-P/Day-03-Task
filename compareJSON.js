var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var a = JSON.stringify(obj1, Object.keys(obj1).sort());
var b = JSON.stringify(obj2, Object.keys(obj2).sort());

if (a === b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}