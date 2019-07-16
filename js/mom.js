// mom.js 大鱼文件
// 1.创建大鱼构造方法 momObj
var momObj=function(){
  // 1.1创建变量保存大鱼眼睛图片
  this.bigEye=[];
  // 1.2创建变量保存大鱼身体
  this.bigBody=[];
  // 1.3创建变量保存大鱼尾巴
  this.bigTail=[];
  // 1.4创建变量保存大鱼位置
  this.x;
  this.y;
  // 1.5创建变量保存大鱼游动角度
  this.angle;
}
// 2.为大鱼构造方法添加方法init
momObj.prototype.init=function(){
  // 2.1创建循环遍历大鱼的眼睛创建图片对象并下载图片
  for(var i=0;i<2;i++){
    this.bigEye[i]=new Image();
    this.bigEye[i].src="../game/src/bigEye"+i+".png";
  }
  // 2.2创建循环遍历大鱼身体数组8张创建图片对象并下载图片
  for(var i=0;i<8;i++){
    this.bigBody[i]=new Image();
    this.bigBody[i].src="../game/src/bigSwim"+i+".png"
  }
  // 2.3创建循环遍历大鱼的尾巴数组创建图片对象并下载图片
  console.log(this.bigBody);
  console.log(this.bigEye);
}
// 3.为大鱼构造方法添加方法draw
momObj.prototype.draw=function(){
  console.log(3);
}
// 4.将mon.js添加index.html
// 5.在main.js创建大鱼对象并且调用相关方法