//头部悬停下拉菜单
$('#headChose').hover(function(){
	$('#headlist').css('display', 'block');
	$('#headChose').css({
		'z-index': '20'
	});
}, function() {
	$('#headlist').css('display', 'none');
});
//头部悬停改变图标
$('#headImgwrap').hover(function() {
	$('#headImg1').attr('src', 'img/head002.png');
}, function() {
	$('#headImg1').attr('src', 'img/head001.png');
});
//导航栏下拉选项加悬停背景色
$('.dropdown-menu li a').hover(function() {
	$(this).css('background', 'lightskyblue');
}, function() {
	$(this).css('background', 'white');
});
$('.leftnav *,.blt21 *,.blt22 *,#logo,.introduce img,.nav-pills a,#headLink a,#headlist li,.hoverbtn2,.hoverbtn1,.hovershow,#hovertianmao').hover(function() {
	$(this).css('cursor', 'pointer');
}, function() {
	$(this).css('cursor', 'default');
});
//点击LOGO跳转到首页
$('#logo').click(function() {
	window.location.assign("index.html");
})

//页面跳转 url传参
//forEach不兼容IE
//添加传入的自定义属性
var idnum = 0,
	navnum = 0,
	num = 0;

$('.dropdown-menu li a').each(function() {
	idnum++;
	$(this).attr('listid', idnum);
});
$('.dropdown-menu').each(function() {
	navnum += 1;
	$(this).children("li").find("a").each(function() {

		$(this).attr("navnum", navnum);
	})
})
$('.dropdown-toggle').each(function() {
		$('.dropdown-menu:eq(num) li a:eq(0)').CLICK;
		num++;
	})
//右侧悬停菜单样式
$('.hoverbtn1').click(function(){
	$('.hoverbtn1').css('display','none');
	$('.hoverbtn2').css('display','block');
});
$('#click2').click(function(){
	$('.hoverbtn2').css('display','none');
	$('.hoverbtn1').css('display','block');
});
$('#hover1').hover(function(){
	$('#hovertianmao').css('display','block');
},function(){
	$('#hovertianmao').css('display','none');
})
$('#hover2').hover(function(){
	$('.hovershow').css('display','block');
},function(){
	$('.hovershow').css('display','none');
});
//二维码样式
$('#hovershow,#hovertianmao').hover(function(){
	$(this).css('cursor','pointer').css('display','block');
},function(){
	$(this).css('cursor','default').css('display','none');
});
