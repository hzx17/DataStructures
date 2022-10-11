var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
// console.log(unique(arr))
//-------------------------------------------------------------
// set方式去重
/**  function unique (arr) {
   return Array.from(new Set(arr))
 }
 console.log(unique(arr))
[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
**/
//-----------------------------------------------
// 双层for循环
 /*****function uniqueFor(arr) {
  for(let i =0 ;i<arr.length; i++) {
    for(let j= i+1; j<arr.length ;j++) {
      if(arr[i] == arr[j]) {
        arr.splice(j,1)
      }
    }
  }
  return arr
 }
 console.log(uniqueFor(arr))
 **/

 //------------------------
// indexOf利用indexOf去重
/***function indexOfUnique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return;
  }
  const newArr = []
  for(let item of arr) {
    if(newArr.indexOf(item) === -1) {
      newArr.push(item)
    }
  }
  return newArr
}
console.log(indexOfUnique(arr))
**/

// sort排序
// includes