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
//API
//$username=$_POST['username'];
//$password=$_POST['password'];
$goodsID=$_POST['goodsID'];
$goodsName=$_POST['goodsName'];
$goodsQuality=$_POST['goodsQuality'];
$goodsChineseAbout=$_POST['goodsChineseAbout'];
$goodsEnglishAbout=$_POST['goodsEnglishAbout'];
$goodsColor=$_POST['goodsColor'];
$goodsImgUrl=$_POST['goodsImgUrl'];
$list_ID=$_POST['list_ID'];
$control=$_POST['C'];
?>