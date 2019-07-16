// 作用：创建游戏所有全局变量
// 创建所有游戏中角色对象
// 绘制游戏角色
// 1.声明所有全局变量
var can1;  //画布1
var can2;  //画布2
var ctx1; //画笔1
var ctx2; //画笔2
var canWidth; //画布宽度和高度
var canHeight;
var bgPic; //背景图片
// 1.1创建全局变量保存海葵
var ane;
//1.2创建全局变量保存食物
var fruit;
// 2.创建函数game
function game(){
  init();
  gameloop();
}
// 3.创建函数Init
function init(){
  // 3.1初始化2个画布2只画笔
  can1=document.getElementById("canvas1");
  can2=document.getElementById("canvas2");
  ctx1=can1.getContext("2d");
  ctx2=can2.getContext("2d");
  // 3.2初始化宽高
  canWidth=can1.width;
  canHeight=can1.height;
  console.log(canWidth+":"+canHeight);
  // 3.3初始化图片
  bgPic=new Image();
  bgPic.src="../src/background.jpg";
  // 3.4创建海葵对象调用初始化方法
  ane=new aneObj();
  ane.init();
  //3.5创建食物对象调用初始化方法
  fruit=new fruitObj();
  fruit.init();
  //3.6创建大鱼对象调用初始化方法
  mom=new momObj();
  mom.init();
  // 3.7创建一个鼠标移动的监听绑定在画布1上
  can1.addEventListener("mousemove",canHandler);
}
// 4.创建函数gameloop
function gameloop(){
  // 4.1创建定时器调用gameloop
  requestAnimationFrame(gameloop);
  //4.3清除画布一，大鱼身体避免重复画
  ctx1.clearRect(0,0,canWidth,canHeight)
  // 4.4调用监听食物数量的函数
  fruitMonitor();
  // 4.5调用绘制背景函数
  drawBackground();
  // 4.6调用绘制海葵函数
  ane.draw();
  //4.7调用绘制食物函数
  fruit.draw();
  //4.8调用绘制大鱼函数
  mom.draw();
  //4.9调用大鱼吃食物函数
  momFruitsCollsion()
}
// 5.将文件main.js添加index.html
document.body.onload=game;
// 6.页面加载完成后调用game
// 6.1创建两个全局变量保存鼠标位置
var mx=0;
var my=0;
// 7.鼠标移动画布的事件处理函数
function canHandler(e){
  // 7.1获取鼠标x位置
  var x=e.offsetX;
  // 7.2获取鼠标y位置
  var y=e.offsetY;
  // 7.3将鼠标x与y位置赋值
  mx=x;
  my=y;
}