
/* 判断质数 */
function isPrime(number) {
  for(let i =2 ; i<Math.sqrt(number);i++) {
    if(number % i==0){
      return false
    }
  }
  return number
}
/* 测试质数 */
console.log(isPrime(17))
console.log(isPrime(16))
