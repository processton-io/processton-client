<?php
use Stancl\Tenancy\Middleware\InitializeTenancyByDomain;
use Stancl\Tenancy\Middleware\PreventAccessFromCentralDomains;

/*
 * Processton Client Configurations.
 */
return [
    'middleware' => [
        InitializeTenancyByDomain::class,
        PreventAccessFromCentralDomains::class,
        'auth', 'verified'
    ],
    // Path for the apps listing page.
    'apps_path' => 'apps',

    // Path for the apps interations
    'base_path' => 'app',

    // Apps list
    'apps' => [
        ... config('processton-app-setup.apps', [])
    ]
];