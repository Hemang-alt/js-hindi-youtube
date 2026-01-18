// for each loop
const coding = ["js","py","rb","java","cpp"];

coding.forEach(function (item) {
    // console.log(item);
})

coding.forEach((item) => {
    // console.log(item);
})

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "js"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})