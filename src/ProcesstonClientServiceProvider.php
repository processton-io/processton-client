<?php

namespace Processton\ProcesstonClient;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Processton\ProcesstonClient\Http\Middleware\HandleApplicationRequest;
use Processton\ProcesstonClient\Http\Middleware\HandleInteractionRequests;
use Illuminate\Contracts\Http\Kernel;

class ProcesstonClientServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     */
    public function boot(Kernel $kernel)
    {
        // $kernel->pushMiddleware(HandleApplicationRequest::class);
        // $kernel->pushMiddleware(HandleInteractionRequests::class);

        $this->app->bind('path.public', function() {
			return base_path() . '/../html/demo';
		});
        
        /*
         * Optional methods to load your package assets
         */
        // $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'processton-client');

        // $router = $this->app->make(Route::class);
        // $router->aliasMiddleware('handleApplicationRequest', HandleApplicationRequest::class);
        // $router->aliasMiddleware('handleInteractionRequests', HandleInteractionRequests::class);
        
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'processton-client');
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
        $this->registerRoutes();

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/config.php' => config_path('processton-client.php'),
            ], 'config');

            // Publishing the views.
            /*$this->publishes([
                __DIR__.'/../resources/views' => resource_path('views/vendor/processton-client'),
            ], 'views');*/

            // Publishing assets.
            $this->publishes([
                __DIR__.'/../Resolvers/ProcesstonClientOrgReolver.php' => app_path('Resolvers/ProcesstonClientOrgReolver.php'),
            ], 'resolver');

            $this->publishes([
                __DIR__.'/../public/vendor/processton-client' => public_path('vendor/processton-client'),
            ], 'assets');

            // Publishing the translation files.
            /*$this->publishes([
                __DIR__.'/../resources/lang' => resource_path('lang/vendor/processton-client'),
            ], 'lang');*/

            // Registering package commands.
            // $this->commands([]);
        }
    }

    /**
     * Register the application services.
     */
    public function register()
    {
        // Automatically apply the package configuration
        $this->mergeConfigFrom(__DIR__.'/../config/config.php', 'processton-client');

        // Register the main class to use with the facade
        $this->app->singleton('processton-client', function () {
            return new ProcesstonClient;
        });
    }

    protected function registerRoutes()
    {
        Route::group($this->routeConfiguration(), function () {
            $this->loadRoutesFrom(__DIR__.'/routes.php');
        });
    }

    protected function routeConfiguration()
    {
        return [
            // 'prefix' => config('processton-client.base_path'),
            'middleware' => config('processton-client.middleware'),
        ];
    }
}
