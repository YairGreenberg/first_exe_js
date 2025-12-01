

// let a1=(a,b)=>{
//           a+b;
  

// }

// console.log(a1(3,4));


//1.1
function sayHello()
{
    console.log('Hello from the function');
    
}
sayHello()


//1.5
function PrintEventToTen()
{
    for(i=1;i<10;i++)
    {
        if(i%2==0)
        {
            console.log(i);
        }
    }
}
PrintEventToTen()


//1.10
function calculateFinalPrice()
{
    let price = 200 , discount = 20;
    return price - discount;
}
const final_price =calculateFinalPrice();
console.log(final_price);
    


//2.1
function priceScore(score)
{
    console.log(`Score is: ${score}`);
    
}
let score = 80;
priceScore(score);



//2.5
function createSecret()
{
    let secret = 1234;
    console.log(secret);
}
createSecret();
// console.log(secret);

 

//2.10
const baseScore = 50;
function addBonus(baseScore)
{
    baseScore += 20;
    console.log(baseScore);
    
}
addBonus(baseScore)
console.log(baseScore);       



//3.1

const sayHi = ()=>console.log('Hi from arrow function');
sayHi()




//3.4
const getFirstElement = (array)=>array[0];
console.log(getFirstElement(['a','b','c']));






//3.8
let toUpperArray = ()=> array.map((char)=>{
    return char.toUpperCase()
});                 
 
let array = ['a','b','c'];                             

console.log(toUpperArray(array));



//3.10
const creatStudent = (name,age)=>{
     return {name,age}
   
}
console.log(creatStudent('Dona',16));               


//4.1
const greeds = [70,85,90,55,100]
const object = {'passGrade': 60,'excellentGrade':90}
function calculateAverage(greeds)
{
    let sum = 0;
    let average = 0;
    for(let i=0;i<greeds.length;i++){
        sum += greeds[i]
    }
    average = sum / greeds.length
    return average
}


function countPassed(gradesArray, passGrade)
{
    let counter = 0;
    for(let i=0;i<greeds.length;i++){
        if(gradesArray[i]>=passGrade){
            counter++;
        }
    }
    return `the sum of greeds: ${counter}`
}



function getExcellentGrades(gradesArray, excellentGrade)
{
    let array_nwu = [];
     for(let i=0;i<greeds.length;i++){
         if(gradesArray[i]<=excellentGrade){
            array_nwu.push(gradesArray[i])
         }
     }
     return array_nwu //`the sum of greeds: ${array_nwu}`
    
}



function printReport(gradesArray, settings)
{
    console.log(calculateAverage(greeds));

    console.log(countPassed(greeds,object.passGrade));

    console.log(getExcellentGrades(greeds,object.excellentGrade));
    
}
printReport()