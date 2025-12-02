//exe1
function extractNumbers(arr)
{
    if(typeof(arr)!=='object'){
        throw new Error("this variabl is not type of array!");
    }
        let nuw_arr = [];

    try
    {
        for(let i =0;i< arr.length;i++){
            if(typeof(arr[i])==='number'){
                nuw_arr.push(arr[i]);
            }
        }
        return nuw_arr;
    }catch(error){
        console.error("fixed to array!");
    }

}

const arr = ["hi",8,9,12]
console.log(extractNumbers(arr));



//exe2
function sumNumbersSafe(arr)
{
    try{
        let array =extractNumbers(arr);
        const sum =array.reduce((account,num)=>account+num,0)
        return sum;
    }catch(error){
        console.error("warning!")
    }
    
}

console.log(sumNumbersSafe([2,4,"bad"]));


//exe3
function filterLargeSums(arrList, minTotal)
{
    let nuw_arr = 0;
    arrList.forEach(object => {
        let arr = sumNumbersSafe(object)
        if(arr >= minTotal){
            nuw_arr = arr;
        }
       
    });
     return nuw_arr;

}

console.log(`sum is: ${filterLargeSums([[1,2,3],[10,"bad",5],"fail"],10)}`);
