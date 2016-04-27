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
		'name' => array(
			'required' => true,
			'max' => 256
		),

		'amount' => array(
			'required' => true
		),
    ));

    if ($validate->passed()){
        try {
            $db = db::getInstance();

			$item_id = $db->insert('items', array(
				'name' => input::get('name'),
				'amount' => input::get('amount'),
				'added-by' => $user->data()->id
			));

			$list_data = $db->get('lists', input::get('list_id'));
			if (!empty($data)){
				$data = $data->firstResult();
			} else {
				die();
			}

			$new_items = $list_data->items . ',' . $item_id;

			$db->update('lists', $list_data->id, array(
				'items' => $new_items
			));

        } catch(Exception $e){
            die($e->getMessage());
        }
    }
}

?>
