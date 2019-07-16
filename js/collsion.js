// collsion.js
// 此文件完成所有游戏中的碰撞检测
// 1.大鱼碰撞食物
function momFruitsCollsion() {
  // 1.1创建循环遍历所有食物
  for (var i = 0; i < fruit.num; i++) {
    // 1.2判断当前食物是否显示状态
    if (fruit.alive[i]) {
      // 1.3计算大鱼与食物的距离
      var len=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
      // 1.4如果大于与食物距离小于900
      if(len<900){
      // 1.5食物消失
      fruit.alive[i]=false;
      // 1.6计算分数
      // 1.7判断食物类型
      // 1.8判断食物类型
      if(fruit.fruitType[i]!="blue"){
        data.score+=200
      }else{
        data.score+=100
      }
      }
    }
  }
}
// 2.大鱼碰撞小鱼
// 3.将collsion.js加载index.html
// 4.并且在main.js  gameloop调用以上函数