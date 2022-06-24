/* set集合构造函数 */
function Set() {
  // 集合属性,使用keys将其取出
    this.items = {}
  // 集合方法
  //添加方法
  Set.prototype.add = function(value) {
    // 判断当前集合中是否已经包含了该元素
    if(this.items.hasOwnProperty(value)){
      return false
    }else{
      this.items[value] = value
      return true
    }
  }
  // 元素是否存在于集合中
  Set.prototype.has = function(value) {
    return this.items.hasOwnProperty(value)
  }
  // remove方法
  Set.prototype.remove = function(value) {
    if(!this.items[value]){
      return false
    }
    // 使用delect操作符，删除元素
    delete this.items[value]
    return true
  }
  // 清除
  Set.prototype.clear = function () {
    this.items = {}
  }
  // 获取集合长度
  Set.prototype.size = function() {
    return Object.keys(this.items).length
  }
  // 获取集合中所有元素
  Set.prototype.values = function() {
    return Object.keys(this.items)
  }

  // 并集操作
  Set.prototype.union = function (otherSet) {
    // this:集合对象A
    // otherSet:集合对象B
    const unionSet = new Set()
    //将取出集合中所有元素,并放入集合A集合中
    let values = this.values()
    for(let i = 0 ;i < values.length ;i++) {
      unionSet.add(values[i])
    }
    values = otherSet.values()
    for(let i = 0;i<values.length ;i++) {
      unionSet.add(values[i])
    }
    return unionSet
  }
  //交集操作
  Set.prototype.intersection = function(otherSet) {
    // this: 为集合A
    // otherSet为集合B
    // 创建交集集合
    const intersectionSet = new Set()
    let valuesA = this.values()
    for(let i = 0;i<valuesA.length;i++) {
      if(otherSet.has(valuesA[i])){
        intersectionSet.add(valuesA[i])
      }
    }
    return intersectionSet
  }
  // 差集操作
  Set.prototype.difference = function(otherSet) {
    // 创建差集集合
    const differenceSet = new Set()
    // 将集合A（this)取出
    let values = this.values()
    for(let i= 0; i<values.length;i++) {
      if(!otherSet.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    // 将集合B数据取出
    values = otherSet.values() 
    for(let i= 0; i<values.length;i++) {
      if(!this.has(values[i])){
        differenceSet.add(values[i])
      }
    }
    return differenceSet
  }
  // 判断一个集合是否属于另外一个集合
  Set.prototype.sub = function (otherSet) {
    if(this.size() < otherSet.size()){
      return false
    }
    let valuesB = otherSet.values()
    for(let i =0;i<valuesB.length ;i++) {
      if(!this.has(valuesB[i])){
        return false
      }
    }
    return true
  }
}

/* 测试Set集合类 */
// const set = new Set() //集合A
// const set1 = new Set() //集合B

// set1.add(4)
// set.add(1)
// set.add(2)
// // set.add("2")
// set.add(3)
// set.remove(3)
// // set.clear()
// console.log(set.union(set1).values()) //求并集
// console.log(set.values())
// console.log(set.size())

/* 测试交集 */
// const setA = new Set()
// const setB = new Set()

// setA.add('nba')
// setA.add('nbl')
// setA.add('cba')

// setB.add('nba')
// setB.add('cba')
// setB.add('dbba')
// setB.add('cuba')

// console.log(setA.values())
// console.log(setB.values())
// console.log(setA.intersection(setB))
/* 测试差集 */
// const setA = new Set()
// const setB = new Set()

// setA.add('nba')
// setA.add('nbl')
// setA.add('cba')

// setB.add('nba')
// setB.add('cba')
// setB.add('dbba')
// setB.add('cuba')

// console.log(setA.values())
// console.log(setB.values())
// console.log(setA.difference(setB))
/* 测试是否属于子集 */
const setA = new Set()
const setB = new Set()

setA.add('nba')
setA.add('nbl')
setA.add('cba')

setB.add('nba')

console.log(setA.values())
console.log(setB.values())
console.log(setA.sub(setB))