// const number =[1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i < number.length; i++){
//     // const element = number[i];
//     // console.log(element);    //nicher console ta ar eta same
//     // console.log(number[i]);
//     if(number[i] > 5){
//         break;
//     }
//     console.log(number[i]); //jodi 5 porjontoi chai tahole eikhane console
// }



const number = [-1, 2, -3, 4, -5, 6, -7, 8, -9,];
for(let i = 0; i < number.length; i++){
    if(number[i] < 0){
        continue;
    }
    console.log(number[i]);
}