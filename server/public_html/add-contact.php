<?php

require_once '../core/init.php';
req::once('functions/rand_pass.php');

$user = new user();
if ($user->notHasPermission('logged in')){
    redirect::to('index.php');
}

if (input::exists()){
    $validate = new validate();
    $validate->check($_POST, array(
		'email' => array(
			'required' => true,
			'email' => true
		)
    ));

    if ($validate->passed()){
        try {
            //database actions
			$toAdd = -1;

			$contacts = $user->data()->contacts;
			$contacts .= ',' . $toAdd;
			$user->update(array(
				'contacts' => $contacts
			));

        } catch(Exception $e){
            die($e->getMessage());
        }
    }
}

?>
