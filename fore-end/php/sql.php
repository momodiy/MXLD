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

$catenaName=$_POST['catenaName'];
$catenaID=$_POST['catenaID'];
$navID=$_POST['navID'];

?>