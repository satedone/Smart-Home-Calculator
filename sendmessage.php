<?php
	$content = '';
	foreach ($POST as $key => $value ) {
		if($value) {
			$content .= "<b>$key</b>: <i>$value</i>\n";
		}
	}
	if(trim($content)){
		$content = "<b>Message from Site: </b>\n".$content;
		$apiToken = "1128078370:AAF4I8hjwY2YM4UPnKFdw1rJHslvu-39Eaw";
		$data = [
			'chat_id' => '@calculatorsated',
			'text' => $content,
			'parse_mode' => 'HTML'
		];
		$response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?".http_build_query($data));
	}
?>

