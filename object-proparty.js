// const students =[
//     {id: 11, name:'kalu'},
//     {id: 21, name:'salu'},
//     {id: 31, name:'malu'},
//     {id: 11, name:'balu'},


// ];
// const output =[]
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);




const students =[
    {id: 11, name:'kalu'},
    {id: 21, name:'salu'},
    {id: 31, name:'malu'},
    {id: 41, name:'balu'},
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 15);
const biggerOne = students.find(s => s.id > 15);

console.log(biggerOne);