// 预加载
// 得到所有的图片
var imgs = document.getElementsByTagName("img");
// 得到遮罩层元素
var mask = document.getElementById("mask");
// 得到p元素
var p = mask.getElementsByTagName("p")[0];
// 得到body
var body = document.getElementsByTagName("body")[0];

// 百分比
var percent = 0;
// 表示已经加载了多少张图片
var num = 0;

for(var i = 0; i < imgs.length; i++){
	// 创建图片对象
	var img = new Image();
	// 赋予地址
	img.src = imgs[i].src;
	// img.onload,当图片加载完后执行function方法
	img.onload = function(){
		num++;
		// 计算百分比
		percent = parseInt((num / imgs.length)*100);
		// 改变p里面的值
		p.innerText = percent + "%";
		alert(percent);

		// 判断是否加载完所有图片
		if(num == imgs.length){
			mask.style.display = "none";
			body.style.overflow = "auto";
		}
	}
}