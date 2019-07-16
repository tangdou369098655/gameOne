// ane2.js
// 此文件：海葵的第二个版本 动态曲线
// 1.创建海葵构造函数 aneObj
var aneObj=function(){
  // 1.1创建一组起点坐标x,起点坐标y可以通过计算得到
  this.rootx=[];
  // 1.2创建一组终点坐标
  this.headx=[];
  this.heady=[];
  // 1.3创建一组摆动的幅度
  this.amp=[];
  // 1.4创建非常小的小数
  this.alpha=0;
}
// 2.为构造函数添加属性num=50;
aneObj.prototype.num=50;
// 3.为构造函数添加函数init;
aneObj.prototype.init=function(){
  
  // 3.1创建循环，遍历所有海葵
  for( var i=0 ;i<this.num;i++){ 
  // 3.2初始化起点坐标x
  this.rootx[i]=i*16+Math.random()*20;
  // 3.3初始化终点坐标x y
  this.headx[i]=this.rootx[i];
  this.heady[i]=canHeight-200+Math.random()*50;
  // 3.4初始化摆动幅度
  this.amp[i]=Math.random()*20+50;
}

}
// 4.为构造函数添加函数draw
aneObj.prototype.draw=function(){
  // 4.1 保存画笔2的状态
  ctx2.save();
  // 4.3 设置路径线宽，圆角，透明度，颜色
  ctx2.strokeStyle="#3b154e";
  ctx2.lineWidth=20;
  ctx2.lineCap="round";
  ctx2.globalAlpha=0.5;
  // 4.4累加非常小的数给alpha
  this.alpha+=0.0008*36;
  // 4.5通过alpha返回-1~1
  var p=Math.sin(this.alpha);
  // 4.6创建循环遍历每个海葵
  for( var i=0;i<this.num;i++){
    // 4.7开始新路径、重新计算终点x
    ctx2.beginPath();
    this.headx[i]=this.rootx[i]+this.amp[i]*p;
    // 4.8将画笔2移动起点坐标
    ctx2.moveTo(this.rootx[i],canHeight);
    // this.headx[i]=this.rootx[i]+p*this.amp[i];
    // 4.9创建贝塞尔曲线
    ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
    //描边
    ctx2.stroke();
    

  }
  // 4.10恢复画笔2的状态
  ctx2.restore();
}
// 5.将ane2.js 添加index.html
// 并且将原来的ane.js注释