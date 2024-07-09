<?php
use Illuminate\Http\Request;
use Inertia\Inertia;
use Processton\ProcesstonClient\Http\Controllers\AppsController;
use Processton\ProcesstonClient\Http\Controllers\Documentation\TestProcesstonClientController;
use Processton\ProcesstonClient\Http\Controllers\InteractonsController;
use Processton\ProcesstonClient\Http\Middleware\HandleApplicationRequest;
use Processton\ProcesstonClient\Http\Middleware\HandleApplicationViewParameters;

Route::middleware([
    'web', HandleApplicationRequest::class, HandleApplicationViewParameters::class
])->group(function () {

    Route::get(Config::get('processton-client.apps_path'), [AppsController::class, 'index'])->name('processton-client.index');

    Route::prefix(Config::get('processton-client.base_path').'/{app_slug}')->group(function () {

        Route::get('/', [InteractonsController::class, 'index'])->name('processton-client.app.index');

        Route::get('/{interaction_slug}', [InteractonsController::class, 'interaction'])->name('processton-client.app.interaction'); 

    });

    Route::get('/documentation', [TestProcesstonClientController::class, 'index'])->name('processton-client.app.documentation');
    Route::get('/documentation/stats', [TestProcesstonClientController::class, 'StatsCards'])->name('processton-client.app.documentation.stats');
    Route::get('/documentation/forms', [TestProcesstonClientController::class, 'Forms'])->name('processton-client.app.documentation.forms');
    Route::get('/documentation/data_table', [TestProcesstonClientController::class, 'DataTable'])->name('processton-client.app.documentation.datatable');

    Route::get('/test-counter', [TestProcesstonClientController::class, 'statsData'])->name('processton-client.app.test.counter');

    Route::get('/test-form', [TestProcesstonClientController::class, 'formData'])->name('processton-client.app.test.form');
    Route::post('/test-form-submission', [TestProcesstonClientController::class, 'formPost'])->name('processton-client.app.test.form.submission');

    Route::get('/test-datatable', [TestProcesstonClientController::class, 'getDatatableData'])->name('processton-client.app.test.datatable');
});