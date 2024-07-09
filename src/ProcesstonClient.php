<?php

namespace Processton\ProcesstonClient;
use Inertia\Inertia;
use Inertia\Response;
class ProcesstonClient
{
    
    public static function render($data) : Response {
        return Inertia::render('Builder',[
            ...$data
        ]);
    }

    public static function renderError($code, $error_msg, $error_description): Response
    {
        return Inertia::render('Error',[
            'code' => $code,
            'error_msg' => $error_msg,
            'error_description' => $error_description
        ]);
    }

}
