/**
 * @description: 手写发布与订阅
 * @params {} 
 * @return: 
 * @methodAuthor: hezhixing
 * @sate: 2022-10-07 17:28:59
*/
class Observer  {
  constructor() {
    this.cache = {}
  }
  // 绑定函数
  on (name,fn) {
    if(this.cache[name]) {
      this.cache[name].push(fn)
    }else {
      this.cache[name] = [fn]
    }
  }
  // 解绑函数
  off (name, fn) {
   const tasks = this.cache[name]
   if(tasks) {
    let index = tasks.indexOf(fn)
    tasks.splice(index,1)
   }
  }
  // 触发函数
  emit(name, once = false) {
    const tasks = this.cache[name]
    for(let fn of tasks) {
      fn()
    }
    if(once) {
      delete this.cache[name]
    }
  }

}
// 测试
const eventBus = new Observer()
const task1 = () => { console.log('task1'); }
const task2 = () => { console.log('task2'); }

eventBus.on('task', task1)
eventBus.on('task', task2)
eventBus.off('task', task1)
setTimeout(() => {
  eventBus.emit('task') // task2
}, 1000)
