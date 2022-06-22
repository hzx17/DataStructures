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
      //清空栈
      Stack.prototype.clear=function(){
        this.items.length=[];
    }
    Stack.prototype.size=function(){
        return this.items.length;
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
const stack=new Stack()
console.log(stack.isEmpty())  //输出为true
stack.push(5);
stack.push(8);

//调用peek方法，将输出8，因为它是往栈里添加最后一个元素
console.log(stack.peek()) //输出8
//再添加一个元素
stack.push(11);
//输出元素个数
console.log(stack.size())  //输出3
//再添加一个元素
stack.push(15)

//调用pop方法
stack.pop()
stack.pop()

console.log(stack.size())  //输出2