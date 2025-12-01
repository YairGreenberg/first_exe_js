//1.1
const student_names = ['Dana','Yossi','Noa','Ali']

const ages = [12,15,17,20,25]

const city_names = ['Tel Aviv','Haifa','Jerusalem']

const test_scores = [100,95,80,60,40]

const book_titles = ["The Hobbit", "Dune", "1984", "It"]

var boolean_values = [true,false, true]

const product_prices = [10,25,7,100,50]

let for_days_of_the_week = ["Monday","Tuesday", "Wednesday", "Thursday"]



let exam_results = [60,70,80,90,100,55]


//2.1

let colors = ['rad','green','blue','yellow']

const [first_name,second_color] = colors 

console.log(first_name);

colors[1] = 'purple'

console.log(colors[1] );

console.log(colors);

//2.2

var arry_numbers = [5,10,15]

console.log(arry_numbers[2]);

arry_numbers[2] =20

console.log(arry_numbers[2]);


//2.3

const movies = ['avater','titanic','inception','shrek'];

movies[0]='interstellar'

console.log(movies);


//2.4
const arr_ages=[10,12,14,16,18]

console.log(arr_ages[2]);

arr_ages[2]= 15

console.log(arr_ages);


//2.5
// const arr_str = ['A','B','C']

// arr_str[0][1][2] = 'x','y','z'

// console.log(arr_str);


//2.6

let arr_temperatures = [20,22,25,30]
const first = arr_temperatures[0]
const last = arr_temperatures[arr_temperatures.length-1] 
console.log(`the first nunber in arr: ${first} the last number in arr: ${last}`);


//2.7
boolean_values[1]=true
console.log(boolean_values);


//2.8




//3.1
let favorite_foods =["pizza", "falafel", "ice cream" ]
favorite_foods.push("mango")
console.log(favorite_foods);


//3.4

let colors1 = ['rad','green','blue','yellow']
colors1.splice(1,2)
console.log(colors1);


//3.6

let numbers= [10,20,30,40,50]
numbers.pop()
numbers.pop()
console.log(numbers);


//3.9
let sixs_numbers=[1,2,3,4,5,6]
sixs_numbers.splice(2,2)
console.log(sixs_numbers);

//4.1
let numbers2 = [10,20,30,40,50]
let cupy = numbers2.slice(1,4)
console.log(cupy);


//4.5
let arr_numbers = [100,90,80,70,60]
let score = arr_numbers.slice(1)
console.log(score);


//4.9
let arry_animals = ["cat", "dog", "fish", "bird", "lion"]

let nwu_arr = arry_animals.slice(2)
log

