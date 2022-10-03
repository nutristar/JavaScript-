//
// const faktorial=(a)=> {
//     if (a===1) {
//         return a;
//     } else {
//         return a*faktorial(a-1);
//     }
// }
const faktorial=(num)=>{
    let result =1
    let counter =1
    while (counter <= num) {
        result = result * counter;
        counter = counter + 1;
        console.log(result);
    }
    return result;
};
document.write(faktorial(4))
// console.log(faktorial(4))
// alert(faktorial(a))




