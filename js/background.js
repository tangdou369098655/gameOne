//bgc.js
//绘制背景图片
// 1.创建函数用于绘制背景图片
// ctx2 画笔 bgPic图片对象
function drawBackground(){
  ctx2.drawImage(bgPic,0,0);
}
// 2.将background.js 添加Index.html
// 3.在main.js中调用此函数