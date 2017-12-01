<?php
header('content-type:application:json;charset=utf8');  
header('Access-Control-Allow-Origin:*');  
header('Access-Control-Allow-Methods:POST');  
header('Access-Control-Allow-Headers:x-requested-with,content-type');
	for($i=0;$i<30000000;$i++){
		$a=10;
	}
	$rt=rand(0,1);
	$ARR2=array(1,2,4,8,15,30,35,40,45);
	$ARR3=array('状元插金花','六杯红','六杯黑');
	$res=array("dices"=>array(rand(1,6),rand(1,6),rand(1,6),rand(1,6),rand(1,6),rand(1,6)),"score"=>8,"titles"=>'状元插金花',"rank"=>4);
	echo json_encode($res);
?>