/* 哈希函数：就是将字符串转化为较大的数字 */

function hashFun (str,size) {
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

/* 测试哈希函数 */
console.log(hashFun('nba',7))
console.log(hashFun('cba',7))
console.log(hashFun('nbl',7))