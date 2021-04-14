<?php 

	if (isset($_POST['name'])) {$name = $_POST['name'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}
	if (isset($_POST['message'])) {$message = $_POST['message'];}

	$name = stripslashes($name);
	$name = htmlspecialchars($name);

	$email = stripslashes($email);
	$email = htmlspecialchars($email);

	$message = stripslashes($message);
	$message = htmlspecialchars($message);

	$mail_to = 'igordg@mail.ru'; // ВАШ mail

	$subject = 'Новое сообщение!';
	
	$headers = 'From: html6.com.ru <support@html6.com.ru>' . "\r\n";
	
	$text .= "Имя: $name\nПочта: $email\nСообщение: $message";
	
	if (mail($mail_to, $subject, $text, $headers)) {
		echo "ok";
	}

?>