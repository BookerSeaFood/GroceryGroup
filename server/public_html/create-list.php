<?php

require_once '../core/init.php';
req::once('functions/rand_pass.php');

$user = new user();
if ($user->notHasPermission('logged in')){
	die();
}

if (input::exists()){
    if (token::check(input::get('token'))){
        $validate = new validate();
        $validate->check($_POST, array(
			'name' => array(
				'required' => true,
				'max' => 128
			)
        ));

        if ($validate->passed()){
            try {
                //database actions
				$db = db::getInstance();

				$db->insert('lists', array(
					'name' => input::get('name'),
					'owner' => $user->data()->id,
				));
            } catch(Exception $e){
                die($e->getMessage());
            }
        }
    }
}

?>
