/*
 * @Descripttion: 
 * @version: 
 * @Author: hezhixing
 * @Date: 2022-03-08 21:15:49
 * @LastEditors: hezhixing
 * @LastEditTime: 2022-03-10 19:40:52
 */
/***
 * 修改一下游戏规则，几个朋友一起玩一个游戏，围成一圈，开始数数。
 * 数到某个数字的人的人淘汰，请问剩下的这个人会是在什么位置。
 * 
 * 提示：
 *     封装一个队列的函数
 *     参数：所有参与人的姓名基于的数字
 *      结果最终剩下的一人的姓名
 * 
 **/ 
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
    Queue.prototype.size=function(){
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

function gameWin(namelist,target){
     //1、实例化Queue类
     var queue=new  Queue();
     //2、向其添加数字进队列中
     for(var i=0;i<namelist.length;i++){
     queue.enqueue(namelist[i]);
    }
    //3、开始数数字
    while(queue.size()>1){
         //不是target数字的时候，将其重新添加到队列的末尾
         //如果是target数字时，将其从队列中删除
        for(var i=0;i<target-1;i++){
            queue.enqueue(queue.dequeue());
        }
        //target对应这个人，将其删除
        queue.dequeue();
    }
    //获取剩下的那个人的名字
    var winName=queue.dequeue();
    alert('最终剩下的人：'+winName);
    return namelist.indexOf(winName)
}    

names=["何治兴","李阳","liii","zhangsan","wangwu","maoliu"]
alert(gameWin(names,4));


