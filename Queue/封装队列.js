/*
 * @Descripttion: 
 * @version: 
 * @Author: hezhixing
 * @Date: 2022-03-08 20:42:42
 * @LastEditors: hezhixing
 * @LastEditTime: 2022-03-10 19:25:12
 */
/* 封装队列类 */
function Queue(){
      //属性
      this.items=[];
      /* 方法 */
      //将元素放入队列中
      Queue.prototype.enqueue=function(element){
          this.items.push(element)
      }
      //从队列中删除前端元素
      Queue.prototype.dequeue=function(){
       return this.items.shift();
    }
      //从队列中查看前端元素
      Queue.prototype.showqueue=function(){
          return this.items[0]
    }
     //从队列中删除任何位置元素
     Queue.prototype.spliceelement=function(index,count){
       return this.items.splice(index,count)
     }
      //查看队列中元素个数是否为空
      Queue.prototype.isEmpty=function(){
        return this.items.length==0
    }
      //查看队列中的元素个数
      Queue.prototype.elementnum=function(){
      return this.items.length;
      }
      //toString
      Queue.prototype.toString=function(){
        let resultString="";
        for(var i=0;i<this.items.length;i++){
             resultString +=this.items[i]+""
        }
        return resultString
    }
}
//实例化队列，使用Queue
var queue=new  Queue();
//将元素放入队列中
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
console.log(queue)
//删除前端元素
queue.dequeue();
alert(queue);
//调用tostring方法
console.log(queue.toString());
queue.spliceelement(2,2);
console.log(queue)
