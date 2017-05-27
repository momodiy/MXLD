<?php
require_once('sql.php');

/*
 author:qc
 data:2016.11.17
 */
//选择操作类型
$control=$_POST['C'];
switch($control){
	case 'add'://添加
	addgoods();
	break;
	case 'update'://修改
	updategoods();
	break;
	case 'del'://删除
	delgoods();
	break;
	case 'login'://登录
	login();
	break;
	case 'select'://选择
	show_list();
	break;
}
//登录验证
function login(){
	$username=$_POST['username'];
	$password=$_POST['password'];
	global $conn;
	$conn->query("set names 'utf8'");
	$result=$conn->query("select * from manage where user='$username' and password='$password'");
	$outc=mysqli_fetch_array($result);
//	echo $result;
//	mysql_fetch_array(data,array_type); data可选，为用来匹配的关联数组；array_type可选，规定返回的结果（查找到时可返回关联数组、数字数组、或一起返回，找不到时返回false）
	if($outc==false){
		echo 'error';
	}else{
	}
	}


	//展示信息
	function show_list(){
		global $control,$conn,$goodsID,$goodsName,$goodsQuality,$goodsChineseAbout,$goodsEnglishAbout,$goodsColor,$goodsImgUrl,$list_ID;
	$conn->query("set names utf8");
	$resault=$conn->query("select * from goods");
	$arr=[];
	if($resault){
		foreach($resault as $thisVal){
			array_push($arr,$thisVal);
		}
		$jsonStr=json_encode(array('data'=>$arr));
		echo $jsonStr;
	}
}
	//删除信息
	function delgoods(){
		global $control,$conn,$goodsID;
//		$goodsID=$_POST['goodsID'];
	$ID=$_POST["del_id"];
	$conn->query("set names utf8");
	$resault = $conn->query("delete from  goods where goodsID = '$ID'" );
	echo $goodsID;
	}
	//修改信息
	function updategoods(){
		global $conn,$control,$goodsID,$goodsName,$goodsQuality,$goodsChineseAbout,$goodsEnglishAbout,$goodsColor,$goodsImgUrl,$list_ID;
	$ID=$_POST["goodsID"];
	$conn->query("set names utf8");
	$resault = $conn->query("update goods set goods_name='$goodsName',goods_quality='$goodsQuality',goods_chinese_about='$goodsChineseAbout',goods_english_about='$goodsEnglishAbout',goods_imgurl='$goodsImgUrl',goods_color='$goodsColor',list_ID='$list_ID'where goodsID = '$ID'");
	
//	echo "update user set userName='$username',passWord='$password',email='$email',phoneNum='$phone' where ID = '$ID'";
		if($resault){
			echo '添加成功';
		}else{
			echo '添加失败';
		}
	}
	//添加函数
	//判断添加时是否ID已被占用
	function addgoods(){
		global $conn;
	global $control,$goodsID,$goodsName,$goodsQuality,$goodsChineseAbout,$goodsEnglishAbout,$goodsColor,$goodsImgUrl,$list_ID,$conn;
		
		$conn->query("set names 'utf8'");
		$result=$conn->query("select * from goods where goodsID='$goodsID'");
//		echo mysqli_num_rows($result);
		if(mysqli_fetch_array($result)==false){
	$result=$conn->query("insert into goods (goodsID,goods_name,goods_quality,goods_chinese_about,goods_english_about,goods_color,goods_imgurl,list_ID) values ('$goodsID','$goodsName','$goodsQuality','$goodsChineseAbout','$goodsEnglishAbout','$goodsColor','$goodsImgUrl','$list_ID')");		
			echo "0";
		}else{
			
			echo "1";
		}	
	}
?>