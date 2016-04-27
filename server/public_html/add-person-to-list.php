<?php

require_once '../core/init.php';
req::once('functions/rand_pass.php');

$user = new user();
if ($user->notHasPermission('logged in')){
    redirect::to('index.php');
}


if (input::exists()){
    if (token::check(input::get('token'))){
        $validate = new validate();
        $validate->check($_POST, array(
			//
        ));

        if ($validate->passed()){
            try {
                //database actions

            } catch(Exception $e){
                die($e->getMessage());
            }
        }
    }
}

?>
