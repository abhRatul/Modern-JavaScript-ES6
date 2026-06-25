/*
Notes -
- map() হলো একটা array method
- এটা প্রতিটা element নিয়ে কাজ করে
- এবং নতুন array return করে
- Original array change করে না (immutable)

  array.map((value, index, array) => {
    return newValue;
  });

*/

// custom array map 
let name = [
  'Abu Huraira Ratul',
  'Hadiya Tun Tahera',
  'Joynob Banu'
]


function reuse(arr,logic){
  for(let i = 0; i<arr.length; i++){
    logic(arr[i],i,arr)
  }
}

let r1 = []
reuse(name, function(value){
  r1.push(value.length)
})
console.log(r1);


let r2 = []
reuse(name, function(value){
  r2.push(value.toUpperCase())
})
console.log(r2);



function reuseAndMap(array,callBack){
  let result = [];
  for(let i = 0; i < array.length; i++) {
    result.push(callBack(array[i]))
  }
  return result
}

let r3 = reuseAndMap(name, function(item){
  return item.length;
})
console.log(r3);


let r4 = name.map(function(value){
  return value.toUpperCase();
})

console.log(r4);




