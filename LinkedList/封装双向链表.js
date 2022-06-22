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
  //是否为空
  DoublyLinkedList.prototype.isEmpty = function () {
    
  }
}

/* 测试双向链表 */
const list = new DoublyLinkedList()
list.append(1)
list.append(2)
list.append(3)
console.log(list.forwardString())
console.log(list.backwardString())
console.log(list.toString())