<?php 
// 连接数据库
	$conn = mysqli_connect('localhost','root','','zy');
// 设置编码格式
	$conn->query('set names utf8');
	// 获取ajax中act的类型
	$act = $_POST['act'];
	switch ($act) {
		// 在数据库中检索用户名是否已经存在
		case 'check':
			$name = $_POST['name'];
			$sql = "SELECT * FROM rabbit WHERE name='{$name}'";
			$conn->query($sql);
			// 如果用户名已存在，返回error  1
			if (mysqli_affected_rows($conn)>0) {
				echo '{"error":"1"}';
			}else{
				echo '{"error":"0"}';
			}
			break;

		// 如果用户名可用，就将此用户的信息插入数据库中
		case 'add':
			$name = $_POST['name'];
			$pwd = md5($_POST['pwd']);
			$sql = "INSERT INTO rabbit (name,pwd) VALUES ('{$name}','{$pwd}')";
			$conn->query($sql);
			if (mysqli_affected_rows($conn)>0) {
				echo '{"error":"0"}';
			}else{
				echo '{"error":"1"}';
			}
			break;
		
	}

		
 ?>