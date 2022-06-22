/* 封装链表 */
function LinkedList(){
    //内部类：节点类
    function Node(data){
        this.data=data;
        this.next=null;
    }
    //属性
    this.head=null;
    this.length=0;

    //追加方法
    LinkedList.prototype.append=function(data){
        //创建一个新的节点
        let newNode=new Node(data);
       //判断 是否为第一个节点
        if(this.length==0){
            this.head=newNode;
        }else{
            //创建一个临时变量，使头部节点指向一个新的临时节点
            let current=this.head
            //判断current的next是否为空，如果不为空，将current的next指向current
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
        }
        this.length+=1;
    }
    //tostring方法
    LinkedList.prototype.toString=function(){
        //定义一个临时变量
        let current=this.head;
        let result="";
        while(current){
           result+=current.data+"";
           current=current.next
        }
        return result;
    }
    //指定位置插入节点
    LinkedList.prototype.insert=function(data,position){
        //节点数判断是否小于index
        if(this.length < position || position < 0){
            return console.log('你插入的位置大于链表的长度')
        }
        //创建NOde实例
        const newNode = new Node(data)
        if(position === 0) {
          // 使原来的头部指向新节点的next，然后再将data指向this.head
          newNode.next = this.head
          this.head = newNode
        }else { // 插入位置大于0，即不是头节点
          let index = 0  // 定义一个初始变量
          var current = this.head
          var previous = null // 当前节点的前一个
          while (index++ < position) {
            previous = current
            current = current.next
          }    
          newNode.next = current
          previous.next = newNode
        }
        this.length +=1
    }
    // get方法
    LinkedList.prototype.get = function(position){
      if( position >= this.length || position < 0){
        return null
      }
      // 获取相应的data
      let current =this.head
      let index = 0
      while(index++ < position){
        current = current.next
      }
      return current.data
    }
    // 返回元素所在索引，如果不存在则返回-1
    LinkedList.prototype.indexOf = function(data){
      let current = this.head
      let index = 0
      while(current){
        if(current.data === data){
          return index
        }
        current = current.next
        index +=1
      }
      // 没有找到，返回-1
      return -1
    }
    // 更改元素
    LinkedList.prototype.update = function(newData,position) {
      // 越界判断
      if( position >= this.length || position < 0){
        return console.log('更改位置不正确')
      }
      let current = this.head 
      let index =0
      while(index++ < position) {
        current = current.next
      }
      // 将获取到的节点，更新
      current.data = newData
      return true
    }
    // 移出列表中特定位置一项，传入位置索引即可
    LinkedList.prototype.removeAt = function(position) {
      // 越界判断
      if( position >= this.length || position < 0){
        return console.log('移出位置不正确')
      }
      let current = this.head
      let index = 0
      let previous = null
      if(position === 0) {
        current =current.next
        this.head =current
      }else{
        while(index++ <position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
      }
      this.length -=1
    }
    // 移出指定元素的一项，传入元素
    LinkedList.prototype.remove = function (element) {
      let current = this.head
      let previous = null
      while(current) {
        if(current===this.head && current.data === element) {
          this.head = current.next
          return true
        }
        else if(current.data === element) {
          previous.next = current.next
          return true
        }
        previous = current
        current = current.next
      }
      return console.log('未找到要删除的元素')
    }
}
//实例化链表

/* 链表测试 */
let linklist=new LinkedList();
linklist.append(12);
linklist.append(13);
linklist.append(14);
linklist.append(14);
// linklist.insert("我是插入的",3)
// linklist.update("我修改了第一个",0)
// linklist.removeAt(0)
linklist.remove(11)
console.log(linklist)
console.log( linklist.indexOf(15))
console.log(linklist.get(1))
console.log(linklist.toString())
