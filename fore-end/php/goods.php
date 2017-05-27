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
show_list();
//展示信息(需求分类信息)
	function show_list(){
		global $conn,$navID;
	$conn->query("set names utf8");
//		$resault=$conn->query("select * from catena_list");
	$resault=$conn->query("select * from catena_list where navID='$navID'");
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