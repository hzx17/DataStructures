/*
 * @Descripttion: 
 * @version: 
 * @Author: hezhixing
 * @Date: 2022-03-09 21:35:45
 * @LastEditors: hezhixing
 * @LastEditTime: 2022-03-09 22:54:59
 */
/* 封装优先级队列 */
function PriorityQueue(){
    //保存元素和优先级
    function QueueElement(element,priority){
        this.element=element;
        this.priority=priority;
    }
    //封装属性
    this.items=[];
    //封装方法
    //实现插入方法
    PriorityQueue.prototype.enqueue=function(element,priority){
        // 1、创建QueueElement对象
        const queueElement=new QueueElement(element,priority);
        //2、判断队列是否为空
        if(this.items.length==0){
           //直接将实例化的元素与优先级对象push进来
            this.items.push(queueElement)

        }else{
            //3、for循环遍历比较队列中已有元素的优先级 
            var added=false; 
            for(let i=0;i<this.items.length;i++){
                if(this.items[i].priority>queueElement.priority){
                    this.items.splice(i,0,queueElement);
                    added=true;
                    break;  
                }
            }
            if(!added){
                this.items.push(queueElement)
            }
        }
    }
      //toString
    PriorityQueue.prototype.toString=function(){
        let resultString="";
        for(var i=0;i<this.items.length;i++){
             resultString +=this.items[i]+""
        }
        return resultString
    }

}
//实例化类
var priorityQueue=new PriorityQueue();

//向其添加元素
priorityQueue.enqueue("何治兴",153);
priorityQueue.enqueue("李玉成",323);
priorityQueue.enqueue("李阳",223);
priorityQueue.enqueue("zhangsan",310);

console.log(priorityQueue)