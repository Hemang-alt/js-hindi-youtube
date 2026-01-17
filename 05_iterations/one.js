let myarr = ["flash","batman","superman"];
// console.log(myarr.length);
for(let index = 0;index<myarr.length;index++){
    const ele = myarr[index];
    // console.log(ele);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         console.log("detected 5");
//         break;
//     }
//     console.log(`values of i is ${index}`);
// }

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue;
    }
    console.log(`values of i is ${index}`);
}