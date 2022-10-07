/**
 * @description: 节流顾名思义：在一定时间内重复触发，只触发一次
 * @params {func,delay} 
 * @return: fn
 * @methodAuthor: hezhixing
 * @sate: 2022-10-07 15:29:18
*/

function throttle (fn, delay) {
  let last = 0
  return function (...args) {
    let now = Date.now()
    if((now- last )>delay) {
      last = now
      fn.apply(this,args)
    }
  }
}