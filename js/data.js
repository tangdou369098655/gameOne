// data.js
// 此文件完成分数显示与增加
// 1.创建分数构造函数
var dataObj=function(){
  // 1.1游戏的分数
  this.score=0;
  // 1.2保存分数是否是双倍的
  this.double=1;
}
// 2.为分数构造函数添加绘制方法
dataObj.prototype.draw=function(){
  // 2.1获取画布宽度和高度
  var w=canWidth
  var h=canHeight
  // 2.2保存画笔1状态
  ctx1.save();
  // 2.3设置画笔填充样式
  ctx1.fillStyle="#fff";
  // 2.4设置字体  35px
  ctx1.font="35px SimHei";
  // 2.5文本居中
  ctx1.textAlign="center";
  // 2.6绘制分数
  ctx1.fillText("SCORE:"+this.score,w*0.5,h*0.95-80);
  // 2.7恢复画笔1状态
  ctx1.restore();
}
// 3.将data.js添加index.html文件
// 4.在main.js创建分数对象并调用相应方法
