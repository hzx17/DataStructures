/* 链地址法哈希表的封装 */

function HashTable () {
   // 属性
  this.storage = [] //存放的数组
  this.count = 0  // 当前存放的长度
  this.limit = 7  //当前数组的长度
   /* 哈希函数 */
  HashTable.prototype.hashFun =  function (str,size) {
    // 定义哈希值
    let hashCode = 0

    // 使用霍纳算法（秦九韶算法）计算哈希值
    for( let i = 0;i<str.length ;i++ ){
      hashCode = 37 * hashCode + str.charCodeAt(i)
    }
    // 取余操作
    let index= hashCode % size
    // 返回哈希化后的值
    return index
  }

   // 方法
  // 插入或者修改操作方法
  HashTable.prototype.put = function (key,value) {
    // 根据key与value获取对应的index
    let index = this.hashFun(key, this.limit)
    // 根据index，取出对应位置下的bucket
    let bucket = this.storage[index]
    // 判断数组该位置下是否存在元素
    if(!bucket) {
      bucket = []
      this.storage[index] = bucket
    }
    // 判断是否修改数据
    for(let i=0;i<bucket.length;i++){
      let tuple = bucket[i]
      if(tuple[0] == key){
        tuple[1] = value
        return true
      }
    }
    // 插入操作
    bucket.push([key,value])
    this.count +=1
    let newPrime = this.getPrime(this.limit*2)
    if(this.count > this.limit *0.75){
      this.resize(newPrime)
    }
  }

  // 获取操作
  HashTable.prototype.get = function(key) {
    // 计算传入的key的对应位置
    let index = this.hashFun(key,this.limit)
    // 根据计算得到的位置，取出bucket
    let bucket = this.storage[index]
    // 判断取出的bucket
    if(!bucket) {
      return null
    }else{
      for(let i=0;i<bucket.length;i++) {
        let tuple=bucket[i]
        if(tuple[0]==key) {
          return tuple[1]
        }
      }
      return null
    }
  } 
  /* 判断质数 */
  HashTable.prototype.isPrime = function(number) {
    for(let i =2 ; i<=Math.sqrt(number);i++) {
      if(number % i==0){
        return false
      }
    }
    return number
  }
  // 获取质数的方法
  HashTable.prototype.getPrime = function (number) {
    if(number<7){
      number = 7
    }
    while(!this.isPrime(number)){
      number +=1
    }
   return number

  }
  // 删除操作
  HashTable.prototype.remove = function(key) {
    // 计算传入key所在位置
    let index = this.hashFun(key,this.limit)
    // 根据计算的位置，取出
    let bucket = this.storage[index]
    // 判断是否为空
    if(!bucket) {
      return false
    }else {
      for (let i=0 ;i<bucket.length ;i++) {
        let tuple = bucket[i]
        if(tuple[0] ==key) {
          bucket.splice(i,1)
          this.count -=1
          // 判断缩小容量
          if(this.limit>7 && this.count <this.limit *0.25){
            let newLimit = this.getPrime(Math.floor(this.limit / 2))
            this.resize(newLimit)
          }
          return tuple[1]
        }
      }
      return false
  }
  }

  // 判断是否为空
  HashTable.prototype.isEmpty = function (){
    return this.count ==0
  }
  // 获取哈希表中的个数
  HashTable.prototype.size = function () {
    return this.count
  }
  // 哈希表扩容
  HashTable.prototype.resize = function (newLimit) {
    // 保存旧的数组
    let oldStorage = this.storage

    // 重置所有属性
    this.storage = []
    this.count = 0
    this.limit = newLimit

    for(let i = 0;i<oldStorage.length ; i++){
      let bucket = oldStorage[i]
      if(!bucket) {
        continue
      }
     // 取出数据
     for(let i=0;i<bucket.length;i++){
       // 调用哈希函数方法
       let tuple = bucket[i]
       let index = new this.hashFun(tuple[0],this.limit)
       // 调用添加方法
       this.put(tuple[0],tuple[1])
     }
    }
  }
}

/* 测试哈希函数 */
const hashtable = new HashTable()
hashtable.put('nba',18)
// hashtable.put('cba',19)
// hashtable.put('cuba',20)
hashtable.put('nbl',21)
// hashtable.put('dba',22)
hashtable.put('gba',23)

// hashtable.put('dba',20)
// hashtable.put('dba',80)
console.log(hashtable.remove('nbl'))

// hashtable.resize(17)
console.log(hashtable)
console.log(hashtable.get('nba'))

