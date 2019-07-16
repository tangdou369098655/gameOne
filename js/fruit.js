// fruit.js
// 功能：创建食物
// 1.创建构造函数fruitObj
var fruitObj=function(){
  // 1.1创建两个变量保存食物的图片
  //  蓝色食物图片
  this.blue=new Image();
  // 橙色食物图片
  this.orange=new Image();
  // 1.2创建两个变量保存食物的位置x,y
  this.x=[];
  this.y=[];
  // 1.3创建一个变量保存食物的宽度
  this.l=[];
  // 1.4创建一组图片类型""blue""orange"
  this.fruitType=[];
  // 1.5创建一个变量保存食物的速度；
  this.spd=[];
  // 1.6创建一个变量保存海葵下标,从第几个海葵头顶出生
  this.aneNo=[];
  // 1.7创建一个变量保存食物的状态是否活着 true显示，false隐藏
  this.alive=[];

}
// 2.为构造函数添加属性num=30;
fruitObj.prototype.num=30;
// 3.为构造函数添加函数init 初始化
fruitObj.prototype.init=function(){
  // 3.1下载食物图片
  this.orange.src="../src/fruit.png";
  this.blue.src="../src/blue.png";
  //3.2创建循环遍历每个食物
  for(var i=0 ;i<this.num;i++){
  // 3.3赋值位置，状态，食物下标，宽度，类型，速度
  // 表示食物状态，false 隐藏   true  显示
    this.alive[i]=false;
    this.x[i]=0;
    this.y[i]=0;
    this.aneNo[i]=0;
    this.fruitType[i]="";
    this.l[i]=0;
    this.spd[i]=0;
  }
}
// 4.再为构造函数添加函数draw  绘制
fruitObj.prototype.draw=function(){
  // 4.1创建循环遍历食物
  for(var i=0;i<this.num;i++){
    // 4.2判断是否显示食物
    if(this.alive[i]){
      // 4.3判断绘制哪张图片
      if(this.fruitType[i]=="blue"){
        var pic=this.blue;
      }else{
        var pic=this.orange;
      }
      // 4.4判断食物宽度小于14，长大
      // 4.5大于14向上漂浮
      if(this.l[i]<=14){
        // 9.5出生位置 食物出生在海葵头部 终点坐标
        var idx=this.aneNo[i];//把这个写到此位置可以控制泡泡出生时候也会摇摆
      this.x[i]=ane.headx[idx];//控制泡泡出生时候也会摇摆
      this.y[i]=ane.heady[idx];//控制泡泡出生时候也会摇摆
        this.l[i]+=this.spd[i]*12;
      }else{
        this.y[i]-=this.spd[i]*36;
      }
      // 4.6绘制食物
      ctx2.drawImage(pic,
        this.x[i]-this.l[i]*0.5,
        this.y[i]-this.l[i]*0.5,
        this.l[i],
        this.l[i]
        );
      //当食物漂浮出屏幕就隐藏
      if(this.y[i]<0){
        this.alive[i]=false;
      }
  

    }
  }

}
// 5.将fruit.js 添加index.html
// 6.在main.js创建对象并且调用相应方法

// 描述如下功能
// 初始化时候没有食物可以活动
// 通过程序监听画布是否有15个活动食物
// 如果没有就从隐藏食物中挑一个出生变成显示状态 x y spd fruitType

// 7.监听画布中显示食物数量是否不足15个
function fruitMonitor(){
// 7.1计算一个累加和，计算显示食物的数量
var sum=0;
for(var i=0;i<fruit.num;i++){
  if(fruit.alive[i]){ sum++;};
}
// 7.2如果小于15个
  if(sum<15){ 
    // 7.3挑一个
    sendFruit();
    return;
  }
}
// 8.从隐藏食物中挑一个
function sendFruit(){
  // 8.1创建循环遍历数组
  for(var i=0;i<fruit.num;i++){
      // 8.2如果当前食物是隐藏
      // 8.3出生
      if(!fruit.alive[i]){
        fruit.born(i);
        // 8.4return; 一次出生一个
        return;
      }
  }
}
// 9.出生状态 x y spd l
fruitObj.prototype.born=function(i){
  // 9.1出生时候食物宽度
  this.l[i]=0;
  // 9.2出生时候食物状态
  this.alive[i]=true;
  // 9.3食物类型
  this.fruitType[i]=Math.random()<0.9?"blue":"orange";
  // 9.4出生时候海葵下标
  // var idx=Math.floor(Math.random()*ane.num);
  this.aneNo[i]=Math.floor(Math.random()*ane.num);
  
  // 9.5出生位置 食物出生在海葵头部 终点坐标

  // this.x[i]=ane.headx[idx];
  // this.y[i]=ane.heady[idx];
  // 9.6出生指定速度
  this.spd[i]=Math.random()*0.017+0.003;
}
//10.在main.js中   gameloop调用 函数