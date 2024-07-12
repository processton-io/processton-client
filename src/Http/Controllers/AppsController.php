<?php

namespace Processton\ProcesstonClient\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Processton\ProcesstonClient\ProcesstonClient;
use Processton\ProcesstonGridList\ProcesstonGridList;
use Processton\ProcesstonInteraction\ProcesstonInteraction;

class AppsController extends Controller
{

    protected $_layoutData;

    function __construct()
    {
        $this->_layoutData = [
            'org' => [
                'name' => 'Processton Client'
            ],
            'application' => [
                'name' => 'Apps',
                'slug' => 'apps',
                'theme' => [
                    'type' => 'light',
                    'nav_bar' => 'minified_top', //admin_top, admin_side, top, side, hidden, minified_top, minified_side
                    'breadcrumb' => false, //top, hidden
                ],
            ],
        ];
    }

    /**
     * Apps List Apps.
     */
    public function index(Request $request): Response|RedirectResponse
    {
        $applicationsByGroup = collect(config('processton-client.apps', []))->groupBy('department');

        // dd($applicationsByGroup);
        $grids = [];

        foreach ($applicationsByGroup as $department => $apps) {
            $grids[] = ProcesstonGridList::generateGrid(
                $department,
                $apps->map(function ($app) {
                    return ProcesstonGridList::generateGridItem(
                        $app['name'],
                        $app['description'],
                        'icon',
                        $app['icon'],
                        '',
                        route('processton-client.app.index', ['app_slug' => $app['slug']]),
                        [],
                        ProcesstonInteraction::width(2, 1, 1,[
                            'xxxs' => 4,
                            'xxs' => 3,
                            'xs' => 2,
                        ])
                    );
                })->toArray(),
                '',
                '',
                [],
                [],
                ProcesstonInteraction::width(12, 12, 12)
            );
        }

        $interaction = ProcesstonInteraction::generateInteraction(
            'Apps',
            'apps',
            'Available applications',
            'hexagone',
            [],
            [],
            [
                ProcesstonInteraction::generateRow([
                    ...$grids
                ], ProcesstonInteraction::width(12, 12, 12)),
            ]
        );

        return ProcesstonClient::render([
            ...$this->_layoutData,
            'interaction' => $interaction,
            'attachment_values' => $request->all(),
        ]);
    }

}
