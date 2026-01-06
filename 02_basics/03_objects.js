// singleton
// object.create



// object literals


const mySym = Symbol("key1")

const jsUser = {
    name : "Hemang",
    "full name" : "Hemang K Nanda",
    [mySym] : "mykey1",
    age : 20,
    location : "Jalandhar",
    email : "hemangknanda@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
};

// console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);
console.log(jsUser);


jsUser["age"] = 19;

console.log(jsUser["age"]);
// Object.freeze(jsUser);

jsUser["age"] = 20;
console.log(jsUser["age"]);


jsUser.greeting = function(){
    console.log("Hello Js User");  
}
jsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`);  
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

