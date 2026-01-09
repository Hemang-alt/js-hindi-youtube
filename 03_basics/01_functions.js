function sayMyName (){
    // console.log("H");
    // console.log("E");
    // console.log("M");
    // console.log("A");
    // console.log("N");
    // console.log("G");
}
sayMyName();

// function addTwoNumbers (num1,num2){
//      console.log(num1+num2);
// }
function addTwoNumbers (num1,num2){
    //  result = num1 + num2;
    //  return result;
    return num1 + num2;
}
const result = addTwoNumbers(3,5);
// console.log("Result :",result);


function logInUserMessage(username = "sam"){
    if(!username){
        console.log("pls enter a username");
        return 
    }
    return `${username} just logged in`
}
// console.log(logInUserMessage("hemang"))
// console.log(logInUserMessage())

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice(200,400,600,2000));

const user = {
    username: "hemang",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username : "hemang",
    price : 199
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));
