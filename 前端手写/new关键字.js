// new关键字的执行过程
/***
 *   1、创建一个新对象
 *   2、将原型设置为函数的原型对象
 *   3、将this指向这个新对象
 *   4、执行构造函数
 *   5、返回新对象
 */

// 自己实现一个new
function create() {
  // 创建一个新对象
  let obj = new Object()
  // 获得构造函数
  let Con = [].shift.call(arguments)
  // 链接到原型
  obj.__proto__ = Con.prototype 
  // 绑定this，执行构造函数
  let result = Con.apply(obj,arguments)
  return typeof result === 'object' ? result : obj
}

function Person(name, age, score) {
  this.name = name
  this.age= age
  this.score = score
  return {name:this.name}
}

let rest = create(Person, 'dmc', 21, 100)
console.log(rest)
