<?php
//连接数据库
$dbHost="localhost";
$dbUserName="root";
$dbPWD="123456";
$dbName="mentholatum";
$char_code="utf8";

$conn=new mysqli($dbHost,$dbUserName,$dbPWD,$dbName);
//判断是否连接成功
if($conn){
//	echo '连接成功';
}else{
	echo '连接失败';
}


show_list();
//展示信息(需求分类信息)
	function show_list(){
$goodsID=$_POST['goodsID'];
$goods_name=$_POST['goods_name'];
$goods_quality=$_POST['goods_quality'];
$goods_chinese_about=$_POST['goods_chinese_about'];
$goods_english_about=$_POST['goods_english_about'];
$goods_color=$_POST['goods_color'];
$goods_imgurl=$_POST['goods_imgurl'];
$list_ID=$_POST['list_ID'];
		global $conn;
	$conn->query("set names utf8");
//		$resault=$conn->query("select * from catena_list");
	$resault=$conn->query("select * from goods where list_ID='$list_ID'");
	$arr=[];
//	echo $resault;
	if($resault){
		foreach($resault as $thisVal){
			array_push($arr,$thisVal);
//			echo '放入数组';
		}
		$jsonStr=json_encode(array('data'=>$arr));
		echo $jsonStr;
	}
}
?>