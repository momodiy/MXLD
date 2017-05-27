$('.conlink a').css('text-decoration', 'none');
//悬停样式(注：eq选择器从0开始)
$('.conlink div a:eq(1)').hover(function() {
	$('.conlink img:eq(1)').attr('src', 'img/goodsimg4.gif');
}, function() {
	$('.conlink img:eq(1)').attr('src', 'img/goodsimg3.gif');
});

$('.conlink div a:eq(2)').hover(function() {
	$('.conlink img:eq(2)').attr('src', 'img/goodsimg2.gif');
}, function() {
	$('.conlink img:eq(2)').attr('src', 'img/goodsimg1.gif');
});

$('.conlink div a:eq(0)').hover(function() {
	$('.conlink img:eq(0)').attr('src', 'img/goodsimg6.gif');
}, function() {
	$('.conlink img:eq(0)').attr('src', 'img/goodsimg5.gif');
});
//ajax请求
var ajax = null;
var ajax1 = null;
var limg = document.getElementById('limg');
var rimg = document.getElementById('rimg');
//var catID=localStorage.catID;//列表ID
//var navID=localStorage.navID;//导航栏ID
var catID = '';
var navID = '';
var newCatID = '';
var textval='';
window.onload = load();

function load() {
	geturl();
	loadInfo();
	goods();
}

function geturl() {
	//获得第一个属性  
	var url = location.href;
	var tmp1 = url.split("?")[1];
	var tmp2 = tmp1.split("&")[0];
	var tmp3 = tmp2.split("=")[1];
	catID = tmp3;
	//获得第二个属性  
	var tmp9 = url.split("?")[1];
	var tmp4 = tmp9.split("&")[1];
	tmp5 = tmp4.split("=")[1];
//	console.log(tmp5);
	navID = tmp5;
}
//获取列表信息
function loadInfo() {
	//选择加载图片
//	console.log(navID);
	switch(navID) {
		case '1':
			limg.src = 'img/l1.png';
			rimg.src = 'img/r1.jpg';
			break;
		case '2':
			limg.src = 'img/l2.png';
			rimg.src = 'img/r2.jpg';
			break;
		case '3':
			limg.src = 'img/l3.png';
			rimg.src = 'img/r3.jpg';
			break;
		case '4':
			limg.src = 'img/l4.png';
			rimg.src = 'img/r4.jpg';
			break;
		case '5':
			limg.src = 'img/l5.png';
			rimg.src = 'img/r5.jpg';
			break;
		case '6':
			limg.src = 'img/l6.gif';
			rimg.src = 'img/r6.jpg';
			break;
		case '7':
			limg.src = 'img/l7.gif';
			rimg.src = 'img/r7.jpg';
			break;
		case '8':
			limg.src = 'img/l8.jpg';
			rimg.src = 'img/r8.jpg';
			break;
		default:
			console.log('没有读取到图片信息');

	}

	//创建通道
	ajax = new XMLHttpRequest();
	//				添加监听事件
	ajax.onreadystatechange = show;

	ajax.open('post', 'php/goods.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("catenaName=&catenaID=" + catID + "&navID=" + navID);

}

//展示请求到的数据
function show() {
	if(ajax.readyState == 4 && ajax.status == 200) {
		var result = ajax.responseText;
		//						console.log(ajax.responseText);   
		var obj = eval('(' + result + ')');
		var htmlString = "<div class='sqllist'></div>";
		for(var i = 0; i < obj.data.length; i++) {
			htmlString += "<div class='list'><span>" + obj.data[i]['catenaName'] + "</span></div>";

		}
		document.querySelector(".listwrap").innerHTML = htmlString;
	}
}
//获取商品信息
function goods() {
	//创建通道
	ajax1 = new XMLHttpRequest();
	//				添加监听事件
	ajax1.onreadystatechange = goodsshow;

	ajax1.open('post', 'php/goods1.php', true);
	ajax1.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax1.send("goodsID=&list_ID=" + catID + "&goods_name=&goods_quality=&goods_chinese_about=&goods_english_about=&goods_color=&goods_imgurl=");

}

function goodsshow() {
	if(ajax1.readyState == 4 && ajax1.status == 200) {
		var result = ajax1.responseText;
		//console.log(ajax1.responseText);   
		var obj = eval('(' + result + ')');
		var htmlString = '';
		for(var i = 0; i < obj.data.length; i++) {
			htmlString += "<div class='goods'><span><img src=img/" + obj.data[i]['goods_imgurl'] + "></img></span><div class='goodsname'><p>" + obj.data[i]['goods_name'] + "</p><p>" + obj.data[i]['goods_quality'] + "</p></div><div class='goodsE'>" + obj.data[i]['goods_english_about'] + "</div><div class='goodsC' style='color:"+obj.data[i]['goods_color']+";border-color:"+obj.data[i]['goods_color']+"'>" + obj.data[i]['goods_chinese_about'] + "</div><div class='goodsbtn'>查看</div></div>";
		}
		document.querySelector(".goodswrap").innerHTML = htmlString;
		$(".listwrap>.list").click(function() {
//			alert($(this).text());
			textval=$(this).text();
			leftid();
		});
	}
}
//catID&navID
$('.dropdown-menu li a').click(function() {
	var listid = $(this).attr('listid');
	var navnum = $(this).attr('navnum');
	catID = listid;
	navID = navnum;
	//	goods();
	//	loadInfo();
	var myurl = "goods.html" + "?" + "listid=" + listid + "&navnum=" + navnum;
	window.location.assign(myurl);
});

$('.dropdown-toggle').click(function() {
	var $ul = $(this).next(); //标签的下一个元素
	var $list = $ul.children("li").find("a"); //选择元素的子节点li的子节点a
	//	console.log($list);
	//	console.log($list.attr('listid'));
	var listid = $list.attr('listid');
	var navnum = $list.attr('navnum');
	catID = listid;
	navID = navnum;
	//	goods();
	//	loadInfo();
	var myurl = "goods.html" + "?" + "listid=" + listid + "&navnum=" + navnum;
	window.location.assign(myurl);
});

function leftid(){
	ajax = new XMLHttpRequest();
	//				添加监听事件
	ajax.onreadystatechange = showtext;

	ajax.open('post', 'php/goods2.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("catenaName="+textval+"&catenaID=&navID=");

}

function showtext() {
	if(ajax.readyState == 4 && ajax.status == 200) {
		var result = ajax.responseText;
//		console.log(ajax.responseText);   
		var obj = eval('(' + result + ')');
		navID=obj.data[0]['navID'];
		catID=obj.data[0]['catenaID'];
		goods();
	}
}
