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

/* 封装图 */
function Graph () {
  // 属性：顶点
  this.vertexes = [] // 顶点
  this.edges = new Map() // 边-字典类

  // 往图中添加边
  Graph.prototype.addVertexes = function (v){
    this.vertexes.push(v)
    this.edges.set(v,[])
  }
  // 往图中添加边
  Graph.prototype.addEdges = function (v1,v2) {
    this.edges.get(v1).push(v2)
    this.edges.get(v2).push(v1)
  }
  // 图结构的toString方法
  Graph.prototype.toString = function () {
    // 定义一个字符串，保存最终的结果
    let resultString = ""
    // 遍历边结构
    for(let i = 0 ; i< this.vertexes.length ;i++) {
      resultString += this.vertexes[i] + "->"
      resultString += this.edges.get(this.vertexes[i]) + `\n`
    }
    return resultString
  }
  // 初始化颜色
  Graph.prototype.initializeColor = function () {
    // 定义颜色数组
    let colors= [] 
    for( let i = 0 ;i<this.vertexes.length ;i++) {
      colors[this.vertexes[i]] = 'white' // 白色标识未处理
    }
    return colors
  }
  //广度优先搜索遍历 - 队列实现
  Graph.prototype.breadthFirstSearch = function (initv,handler) {
    let colors = this.initializeColor() // 初始化颜色
    //创建一个队列
    const queue = new Queue()
    // 将顶点加入到队列中
    queue.enqueue(initv)
    // 循环取出队列
    while(!queue.isEmpty()) {
      // 取出顶点
      let v= queue.dequeue()
      // 获取顶点与顶点相邻的其他顶点
      let vlist = this.edges.get(v)
      colors[v] = "gray" // 灰色标识为已探测
      for(let i = 0; i<vlist.length ;i++){
        let e = vlist[i]
        if( colors[e] == 'white') {
          colors[e] = 'gray'
          queue.enqueue(e)
        }
      }
      // 访问原点，处理函数
      handler(v)
      colors[v] = 'black'
    }
  }

  // 图的深度优先遍历 - 栈或递归实现 -这里我们使用递归来实现
  Graph.prototype.depthFristSearch = function (initv,handler) {
    let colors = this.initializeColor() // 初始化颜色
    // 从某个节点开始递归
    this.reDepthFristSearch(colors,initv,handler)
  }
  // 深度优先遍历递归函数
  Graph.prototype.reDepthFristSearch = function (colors,v,handler) {
    colors[v] = 'gray'
    handler(v)
    let vlist = this.edges.get(v)
    for(let i= 0;i<vlist.length ;i++) {
       let e = vlist[i]
       if(colors[e] =="white") {
         this.reDepthFristSearch(colors,e,handler)
         colors[e] = 'black'
       }
    }
  } 
} 

/* 测试代码 */
const graph = new Graph()

let vertexes = ["A","B","C","D","E","F","G","H","I"]
for(let i = 0 ;i < vertexes.length ; i++){
  graph.addVertexes(vertexes[i])
}
graph.addEdges("A","B")
graph.addEdges("A","C")
graph.addEdges("A","D")
graph.addEdges("C","D")
graph.addEdges("D","G")
graph.addEdges("D","H")
graph.addEdges("B","E")
graph.addEdges("B","F")
graph.addEdges("E","I")
console.log(graph.toString())
// console.log(graph)  
//广度优先
console.log('广度优先：')
graph.breadthFirstSearch("A" , function (v) {
  console.log(v)
})
// 深度优先
console.log('深度优先：')
graph.depthFristSearch("A" , function (v) {
  console.log(v)
})
