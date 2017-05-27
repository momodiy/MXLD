<?php
//require_once('sql.php');
$dbHost="localhost";
$dbUserName="root";
$dbPWD="123456";
$dbName="mentholatum";
$char_code="utf8";
$con=$_POST["con"];
$conn=new mysqli($dbHost,$dbUserName,$dbPWD,$dbName);
//判断是否连接成功
if($conn){
//	echo '连接成功';
}else{
	echo '连接失败';
}
$thispage=$_POST["thispage"];
$pagesize=10;
$one=($thispage-1)*$pagesize;
$two=$pagesize;
$conn->query("set names utf8");
$sql="select * from goods limit $one,$two";
$resault=$conn->query($sql);
$sql1="select * from goods";
$resault1=$conn->query($sql1);
$num=mysqli_num_rows($resault1);
//echo $resault;
//echo $sql;
$arr=[];
if($con=="show"){
if($resault){
		foreach($resault as $thisVal){
			array_push($arr,$thisVal);
		}
		$jsonStr=json_encode(array('data'=>$arr));
		echo $jsonStr . "^^" . $num;
}
}
?>