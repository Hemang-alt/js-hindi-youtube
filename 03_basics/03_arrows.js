const user = {
    username : "Hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} ,  welcome to webiste`);
        // console.log(this);
        
    }
}

// user.welcomeMessage();
user.username = "sam"
// user.welcomeMessage();
// console.log(this);  //we are in node env and this is refereing to an empty object
// browser ke andar jo obj hai voh hai window object

// function chai(){
//     let username = "Hitesh"
//     console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username = "Hitesh"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Hitesh"
    // console.log(this.username);
}
chai()

// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwoNumbers = (num1,num2) =>  (num1 + num2 )

const addTwoNumbers = (num1,num2) => {
    return {username : "Hitesh"}
}


console.log(addTwoNumbers(3,2))


// const myArr = [2,5,7,8]

// myArr.forEach(function(){

// })