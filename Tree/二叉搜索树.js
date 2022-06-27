
/* 二叉搜索树的封装 */

function BinarySearchTree () {
  /* 内部类 */
  function Node (key) {
    this.left = null
    this.key = key
    this.right  = null
  }
  this.root = null
  // this.previousOrderTraveralResults = ""  // 我这里将先序遍历的结果保存在这里
  // this.middleOrderTraveralResults = ""  // 我这里将中序遍历的结果保存在这里
  BinarySearchTree.prototype.insert = function (key) {
    //  先根据key创建新的节点
    let newNode = new Node(key)
    // 判断根节点是否有值
    if(!this.root) {
      this.root = newNode
    } else {
      // 与根节点比较
      this.insertNode(this.root,newNode)
    }
  }
  // 删除节点
  BinarySearchTree.prototype.remove = function (key) {
    let current = this.root //保存当前节点
    let parent = null // 保存当前节点的父节点
    let isLeftChild = false // 是否为当前节点的左节点
    // 1.寻找要删除的节点
    if(!this.root){
      return false
    }
    while(current.key !==key){
      parent =current
      if(current.key < key) {
        current = current.right
        isLeftChild = false
      }else if(current.key >key) {
        current = current.left
        isLeftChild = true
      }
      if(current ==null){
        // 2.有两种情况，未找到和找到
        // 未找到就返回false
        return false
      }
    }
    // 3.找到删除的节点，又分为三种情况 
    // 3.1 要删除的节点为叶节点
    if(current.left ==null && current.right ==null) {
      if(current == this.root) {
        this.root =null
      }else if(isLeftChild){ //如果为左节点
        parent.left = null
      } else {
       parent.right = null
      }
    }
    // 3.2 要删除的节点为只有一个叶节点的上一级
    else if (current.left == null&& current.right !==null) {
      if(isLeftChild){
        parent.left = current.right
      } else if(this.root.key == key) {
        this.root = current.right
      }
      else {
        parent.right = current.right
      }
    }
    else if (current.left !== null&& current.right ==null) {
      if(isLeftChild){
        parent.left= current.left
      }
      else if(this.root.key == key) {
        this.root = current.left
      }
      else {
        parent.right = current.left
      }
    }
    // 3.3 要删除的节点有两个子节点
    if(current.left !== null && current.right !==null) {
      // 调用查找后继节点的函数
      let successor = this.getSuccessor(current)
      if(current == this.root){ //判断是否为根节点
        this.root = successor
      } else if (isLeftChild){
        parent.left = successor
      } else {
        parent.right = successor
      }
      successor.left = current.left
    }
    return key
  }
  // 当删除二叉搜索树节点左右都有子节点时，寻找替代节点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
     //定义变量找到删除节点的后继
    let successor = delNode // 返回的节点
    let current = delNode.right // 当前所在的节点
    let successorParent = delNode // 当前所在节点的父节点
    // 寻找后继，从该节点的左侧，应当寻找最大值，右侧应当寻找最小值
    // 这里我们寻找最大值
    while(current !==null) {
      successorParent = successor
      successor = current
      current = current.left
    }
    if(successor !== delNode.right) { // 如果判断找到的后续节点是否为删除的节点
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor
  }
  // 二叉搜索树搜索指定key
  BinarySearchTree.prototype.serach = function (data) {
    if(!this.root){ //不存在节点
      return false
    }
    let current = this.root // 将跟节点取出
    while(current) {
      if(current.key > data){
        current = current.left
      } else if (current.key < data) {
        current = current.right
      } else if(current.key == data) {
        return true
      }
    }
    return false
  }
  //  二叉搜索树的最大值
  BinarySearchTree.prototype.minKey =  function () {
    if(!this.root) {
      return null
    } 
    let current =this.root
    while(current){
      if(current.left){
        current = current.left
        continue
      }
      return current.key
    }
  }
  //  二叉搜索树的最大值
  BinarySearchTree.prototype.maxKey =  function () {
    if(!this.root) {
      return null
    } 
    let current =this.root
    while(current){
      if(current.right){
        current = current.right
        continue
      }
      return current.key
    }
  }
  // 搜索二叉树先序遍历
  BinarySearchTree.prototype.previousOrderTraveral = function (handler) {
    // 采用递归的方法
    this.previousOrderTraveralNode(this.root,handler)
  }
  // 搜索二叉树中序遍历
  BinarySearchTree.prototype.middleOrderTraveral = function (handler) {
    this.middleOrderTraveralNode(this.root,handler)
  }
  // 搜索二叉树后序遍历
  BinarySearchTree.prototype.backOrderTraveral = function (handler) {
    this.backOrderTraveralNode(this.root,handler)
  }
    // 对外给用户暴露的方法，插入递归方法
  BinarySearchTree.prototype.insertNode = function (node,newNode) {
    if (newNode.key < node.key){ // 向左查找
      if(!node.left) {
        node.left = newNode
      }else {
        this.insertNode(node.left,newNode)
      }
    } else if (newNode.key > node.key){// 向右查找
      if(!node.right) {
        node.right = newNode
      }else {
        this.insertNode(node.right,newNode)
      }
    }
  }
  // 先序遍历递归
  BinarySearchTree.prototype.previousOrderTraveralNode = function (node,handler) {
    if(node) {
      handler(node.key)
      this.previousOrderTraveralNode(node.left,handler)
      this.previousOrderTraveralNode(node.right,handler)
    }
  }
  // 中序遍历递归 
  BinarySearchTree.prototype.middleOrderTraveralNode = function (node ,handler) {
    if(node) {
      this.middleOrderTraveralNode(node.left,handler) 
      handler(node.key)
      this.middleOrderTraveralNode(node.right,handler)
    }
  }
  // 后序遍历递归
  BinarySearchTree.prototype.backOrderTraveralNode = function (node ,handler) {
    if(node) {
      this.backOrderTraveralNode(node.left,handler) 
      this.backOrderTraveralNode(node.right,handler)
      handler(node.key)
    }
  }
}

/*  测试二叉搜索树 */
const bst = new BinarySearchTree ()
// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
console.log(bst.remove(15)) //删除节点
let previousOrderTraveralResults = ""
let middleOrderTraveralResults = ""
let backOrderTraveralResults = ""
bst.previousOrderTraveral(function (key){
  previousOrderTraveralResults += key +" "
})// 先序遍历
bst.middleOrderTraveral(function (key){
  middleOrderTraveralResults += key +" "
})// 中序遍历
bst.backOrderTraveral(function (key){
  backOrderTraveralResults += key +" "
})// 后序遍历
console.log("先序遍历的结果:"+previousOrderTraveralResults)  //先序遍历的结果
console.log("中序遍历的结果:"+middleOrderTraveralResults)  //中序遍历的结果
console.log("后序遍历的结果:"+backOrderTraveralResults)  // 后序遍历的结果
console.log("最大值:"+bst.maxKey())  // 最大值
console.log("最小值:"+bst.minKey())  //最小值
console.log(bst.serach(25))  //搜索节点
console.log(bst) 