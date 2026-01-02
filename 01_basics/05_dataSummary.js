// primitive and non primitve two types are there



// Memory - stack(primitive) and heap(non primitive)
let one = "hemang"
let two = one;
two = "knanda"
console.log(one);
console.log(two);

let userone = {
    email : "hahaha",
    id : "1"
};
let usertwo = userone;

usertwo.email = "heheheee";

console.log(usertwo.email);
console.log(userone.email);

