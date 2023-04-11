/* 封装列表项 */
function ArrayList () {
  // 属性
  this.items = []
  // 插入数组
  ArrayList.prototype.insert = function (item) {
    this.items.push(item)
  }
  // toSring
  ArrayList.prototype.toString = function () {
    return this.items.join(",")
  }
  // 将交换两个位置的方法抽取
  ArrayList.prototype.swap = function (m, n) {
    // 交换两个位置数据代码
    let temp = this.items[m]
    this.items[m] = this.items[n]
    this.items[n] = temp
  }
  // 冒泡排序
  ArrayList.prototype.bubbleSort = function () {
    // 递增排序
    let count = this.items.length // 内层交换次数
    for(let i = count-1; i>=0 ;i--  ) {
      for (let j =0 ; j<i ; j++) {
        if(this.items[j] > this.items[j+1]) {
          this.swap(j,j+1)
        }
      }
    }
    return this.toString()
  }
  // 选择排序
  ArrayList.prototype.selectionSort = function () {
    // 将数组长度提取出来
    let length = this.items.length
    // 记录最小值下标
    let minLoc = 0
    for(let j =0 ;j<length-1; j++) {
      minLoc = j
      // 内层循环
      for(let i = j ; i<=length -1 ;i++) {
        if(this.items[minLoc] >= this.items[i]) {
          minLoc = i
        }
      }
      this.swap(j,minLoc)
    }
    return this.items
  }
  // 插入排序
  ArrayList.prototype.insertSort = function () {
    // 获取数组长度
    let length = this.items.length
    //外层循环
    for(let i = 1; i <length ; i++) {
      let temp = this.items[i]
      let tempLoc = i
      while(this.items[tempLoc-1] > this.items[tempLoc] ) {
        this.swap(tempLoc-1,tempLoc)
        // 内层循环
        if(tempLoc >1){
          tempLoc -=1 
        }
      }
    }
    return this.toString()
  }
  // 希尔排序
  ArrayList.prototype.shellSort = function () {
    // 获取数组长度
    let length = this.items.length
    // 初始化增量
    let gap = Math.floor(length / 2)
    // 使gap减小
    while(gap >= 1) {
      for ( let i= gap; i<length ;i++) {
        let temp = this.items[i]
        let j = i
        while(this.items[j-gap] > temp) {
          this.items[j] = this.items[j-gap]
          j -= gap
        }
        this.items[j] = temp
      }
      gap = Math.floor(gap / 2)
    }
    return this.toString()
  }
  // 快速排序算法
  ArrayList.prototype.quickSort = function () {
    this.quick(0,this.items.length)
    return this.toString()
  }
  // 快速排序枢纽查找
  ArrayList.prototype.meddlein = function (left,right){
     // 取出中位数
     let center = Math.floor( (left +right) / 2)
     // 比较大小确定中位数
     if(this.items[left] > this.items[center]) {
       this.swap(left,center)
     }
     if(this.items[center] > this.items[right]) {
       this.swap(center,right)
     }
     if(this.items[left] > this.items[center]) {
       this.swap(left,center)
     }
     this.swap(center,right-1)
     return this.items[right-1]
  }
  // 快速排序的递归
  ArrayList.prototype.quick = function (left,right) {
    // 结束条件 
    if(left >= right)  return
    // 获取枢纽数
    let pivot = this.meddlein(left,right)
    // 定义变量
    let i = left
    let j = right-1
    while(i<j) {
      while(this.items[++i]  < pivot) {}
      while(this.items[--j] >pivot) {}
      if(i < j) {
        this.swap(i,j)
      }
    }
    this.swap(i,right-1)
    // 分而治之
    this.quick(left,i-1)
    this.quick(i+1,right)
  }
}
/* 测试排序算法 */
const arr = new ArrayList()

arr.insert(66)
arr.insert(88)
arr.insert(17)
arr.insert(2)
arr.insert(25)
arr.insert(68)
arr.insert(102)
arr.insert(5)
arr.insert(56)
arr.insert(33)
console.log(arr.toString())
// console.log("冒泡排序结果："+arr.bubbleSort())
// console.log("选择排序算法结果：" +arr.selectionSort())
// console.log('插入排序算法结果：',arr.insertSort())
// console.log('希尔排序算法结果：'+arr.shellSort())
console.log('快速排序算法结果：'+arr.quickSort())
