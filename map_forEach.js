//1

const arr_numbers = [1,2,3,4,5,6,7];
const doubleValues = (arr_numbers) =>arr_numbers.map((num)=>{
        return num *2
})


console.log(doubleValues(arr_numbers));


//2

const onlyEvenValues = (arr_numbers)=>arr_numbers.filter((num)=>{
    if(num%2===0){
        return num
    }
})
console.log(onlyEvenValues(arr_numbers));



//3
const arr_string = ["yair", 'yossi','yishay']
const showFirstAndLast = (arr_string)=>arr_string.map((element) => {
       // if(index===0|| index === (arr_string.length-1)){
            if(typeof element==='string'){
                return element[0]+element[element.length-1];
            }
        }
        
    );
console.log(showFirstAndLast(arr_string));

//4
const word = "yair";
let vowelCount = (word) => {
let object = {};
let list = word.split('');

list.forEach ((char)=> {
    if(char in object){
         object[char]++
    }else if(char==='o'||char==='a'||char==='u'||char==='e'||char==='i'){
        object[char]=1}
    
})
    return object
}

 

console.log(vowelCount(word));



//5
const string = "greenberg"
let string_to_upper =(string)=> string.toUpperCase()
console.log(string_to_upper(string));


//6

const stri = "yair"
let  shiftLetters = (stri)=>{stri.map((char,index)=>{
    stri[index]=fromCharCode(charCodeAt(char))
})

}
console.log(shiftLetters(stri));








//7
const str = "kodcod"
let swapCase = () =>{
     let string = str.split('');
     string.forEach((char,index)=>{
    if(index%2===0){
         string[index] = char.toUpperCase()
    }else{
         char
    }
     
})
const result = string.join("")
return result
}

console.log(swapCase(str));
