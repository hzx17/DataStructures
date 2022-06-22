/*
 * @Descripttion: 
 * @version: 
 * @Author: hezhixing
 * @Date: 2022-03-07 14:12:40
 * @LastEditors: hezhixing
 * @LastEditTime: 2022-05-16 00:14:08
 */


/* 栈的创建有两种方式
       1、数组
       2、链表
*/
 /* 编写十进制转化为二进制的函数 */
 function dec2bin(decNumber){
      /* 创建栈的构造函数 */
    function Stack(){
        //定义一个数组
        this.items=[];
        //将元素压入栈
        Stack.prototype.push=function(element){
            this.items.push(element);
        }
        //将元素从栈中取出
        Stack.prototype.pop=function(){
            return this.items.pop();
        }
        //查看栈顶元素
        Stack.prototype.peek=function(){
            return this.items[this.items.length-1];
        }
        //判断栈是否为空
        Stack.prototype.isEmpty=function(){
            return (this.items.length==0);
        }
        //toString方法
        Stack.prototype.toString=function(){
            let resultString="";
        //遍历栈
        for(var i=0;i<this.items.length;i++){
            resultString +=this.items[i]+"";
        }
        return resultString;
        }
        
    }
      //实例化stack类
      var stack=new Stack();
      //如果不为空，取余
      while(decNumber>0){
          stack.push(decNumber % 2);
          decNumber=Math.floor(decNumber/2);   
      }
      //从栈中取出元素
      var binaryString="";
     //循环遍历取出元素
     while(!stack.isEmpty()){ 
         binaryString+=stack.pop();
     }
     console.log(binaryString)
     return binaryString;  
 }
 //调用十进制转化为二进制方法
//  alert(dec2bin(100));
//  alert(dec2bin(12))
console.log(dec2bin(100))
console.log(dec2bin(12))
