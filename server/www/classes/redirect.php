<?php

class redirect {
    public static function to($location = null){
        if ($location){
            if (is_numeric($location)){
                switch ($location){
                    case 404:
                        header('HTTP/1,0 404 Not Found');
                        $location = '404.php';
                        break;
                    case 403:
                        header('HTTP/1,0 403 Forbidden');
                        $location = '403.php';
                        break;
                    //todo: support for all 4xx and 5xx errors
                }
            }

            $location = config::get('site_url') . '/' . $location;
            header('Location:' . $location);
            exit();
        }
    }

    //redirect to external url
    public static function ext($location){
        header('Location:' . $location);
        exit();
    }
}

?>
