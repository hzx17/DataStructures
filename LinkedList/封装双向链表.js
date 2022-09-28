/* 封装双向链表 */
function DoublyLinkedList () {
  /* 内部类 */ 
  function Node(data) {
    this.prev = null
    this.next = null
    this.data = data
  }
  this.head = null
  this.tail = null
  this.length = 0
  //追加方法
  DoublyLinkedList.prototype.append = function(element) {
    // 1、创建双向链表节点
    const newNode = new Node(element);
    // 2、追加元素
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // ！！跟单向链表不同，不用通过循环找到最后一个节点
      // 巧妙之处
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  // 向指定位置插入一个新的一项
  DoublyLinkedList.prototype.insert =function(element,position) {
    //越界判断
    if(position<0 || position> this.length) {
      return console.log('插入位置不正确')
    }
    //创建新节点
    const newNode = new Node(element)
    if(this.length === 0) {
      this.head =newNode
      this.tail = newNode
    }else{
      if(position === 0) {     //当position===0时
        newNode.next = this.head  //新节点的下一指针指向原来的头节点
        this.head.prev = newNode  //原来头节点的上一指针指向新节点，这样才形成双向链表
        this.head = newNode
      }
      else if (position === this.length) {
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
      } else {
        let current = this.head
        let index =0
        while(index++ < position) {
          current = current.next
        }
        current.prev.next = newNode
        newNode.prev = current.prev
        current.prev = newNode
        newNode.next = current
      }
    }
    this.length +=1
  }
  // get方法，获取某个位置的数据
  DoublyLinkedList.prototype.get = function(position) {
    // 越界判断
    if(position>=this.length || position <0){
      return console.log('获取位置有误')
    }
 
    if(this.length / 2 < position) {
      let current = this.tail
      let index = this.length -1
      while(index-- > position) {
        current = current.prev
      }
      return current.data
    }else{
      let current = this.head
      let index = 0
      while(index++ < position) {
        current = current.next
      }
      return current.data
    }
  }
  // indexOf,参数为元素，如果存在返回元素所在位置，不存在返回-1
  DoublyLinkedList.prototype.indexOf = function(element) {
    let current =this.head
    let index = 0
    while(current) {
      if(current.data === element ) {
        return index
      }
      current = current.next
      index +=1
    }
    return -1
  }
  // 双向链表更新方法的实现,传入两个参数，元素与位置
  DoublyLinkedList.prototype.update = function(element,positon) {
    //越界判断
    if(positon >=this.length || positon < 0) {
      return console.log('你更改的位置有误')
    }
    let current = this.head
    let index = 0
    while(index++ < positon) {
      current = current.next
    }
    current.data = element
  }
  // 根据传入的位置信息，删除指定元素
  DoublyLinkedList.prototype.removeAt = function(position) {
    // 越界判断 
    if(position >=this.length || position < 0) {
      return console.log('你更改的位置有误')
    }
    if(this.length === 1){
      this.head = null
    }else if(position === 0) {
       this.head.next.prev = null
       this.head = this.head.next
    }else if (position == this.length-1) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    }else {
      let current = this.head
      let index = 0 
      while (index++ < position) {
        current = current.next
      }
       current.prev.next = current.next
       current.next.prev = current.prev
    }
    this.length -=1
  }
  // 根据传入的元素，删除指定元素
  DoublyLinkedList.prototype.remove = function(element) {
    // let current = this.head 
    // while(current) {
    //  if(current ==this.head &&current.data === element){
    //     this.head.next.prev = null
    //     this.head = this.head.next
    //     this.length -=1
    //     return true
    //   }else if(current == this.tail && current.data === element){
    //     this.tail.prev.next = null
    //     this.tail = this.tail.prev
    //     this.length -=1
    //     return true
    //   }else if(current.data === element){
    //     current.next.prev = current.prev
    //     current.prev.next = current.next
    //     this.length -=1
    //     return true
    //    }
    //   current = current.next
    // }
    // return console.log('未找到元素')
    let index =this.indexOf(element)
    this.removeAt(index)
  }
  //转换成字符串形式
  DoublyLinkedList.prototype.toString = function() {
    return this.backwardString()
  }
  // 向前遍历
  DoublyLinkedList.prototype.forwardString =function () {
    let current = this.tail
    let resultString = ""
    // 依次向前遍历
    while(current) {
      resultString += current.data + " "
      current = current.prev
    }
    return resultString
  }
  // 向后遍历backwardString
  DoublyLinkedList.prototype.backwardString = function () {
    let current = this.head
    let resultString = ""
    // 依次向后遍历
    while(current) {
      resultString += current.data + ' '
      current = current.next
    }
    return resultString
  }
  // size方法，获取链表长度
  DoublyLinkedList.prototype.size = function () {
    return this.length
  }
  //是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    return (this.length===0)
  }
}

/* 测试双向链表 */
const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
list.insert(4,0)
list.update(0,0)
list.remove(3)
// list.removeAt(0)
// console.log(list.indexOf(0))
// console.log(list.get(0))
// console.log(list.isEmpty())
console.log(list.backwardString())
console.log(list.forwardString())
console.log(list)