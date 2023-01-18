// reverse a string

const reverse=(str)=>{
    if(!str || str.length < 2 || typeof str !=='string'){
        console.log('not a valid input');
    }
 
    const backwards=[];
    const totalItems=str.length-1;
    for(let i=totalItems;i>=0;i--){  
        backwards.push(str[i]);
    }
    console.log(backwards);
    
    return backwards.join('');
}
reverse('hi how are you');
reverse(12345);

const reverse2=str=>str.split('').reverse().join('');
console.log(reverse2('hello vinay'));

// merge sortedArray

const mergeSortedArray=(arr1,arr2)=>{
    const mergedArray=[];
    let arrayItem=arr1[0];
}