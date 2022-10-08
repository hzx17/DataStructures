/**
 * @description: 手写深拷贝
 * @params {object} obj 
 * @return: cloneObj
 * @methodAuthor: hezhixing
 * @sate: 2022-10-08 21:40:22
*/

function deepClone(obj,cache = new WeakMap()) {
  if(obj == null || typeof obj  !== 'object') return obj
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(cache.has(obj)) return cache.get(obj)
  const cloneObj = new obj.constructor()
  cache.set(obj,cloneObj)
  for(let item in obj) {
    if(obj.hasOwnProperty(item)) {
      cloneObj[item] = deepClone(obj[item],cache)
    }
  }
  return cloneObj
}
// 测试
const obj = { name: 'Jack', address: { x: 100, y: 200 } }
obj.a = obj // 循环引用
const newObj = deepClone(obj)
console.log(newObj.address === obj.address) // false
