<?php

namespace App\Resolvers;

class ProcesstonClientOrgReolver
{
    public static function handle()
    {
        // If you use tenancy for laravel
        return tenant();

        // If you use custom model

        // return Org::first();
    }
}