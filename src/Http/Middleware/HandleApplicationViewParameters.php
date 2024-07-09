<?php

namespace Processton\ProcesstonClient\Http\Middleware;

use App\Resolvers\ProcesstonClientOrgReolver;
use Illuminate\Http\Request;
use Closure;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Symfony\Component\HttpFoundation\Response;

class HandleApplicationViewParameters extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'processton-client::app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $apps = [];
        $currentApp = [];

        $list = [
            ...config('processton-client.apps')
        ];

        $appArrays = [];

        foreach($list as $item){
            if(is_array($item)){
                $appArrays[] = $item;
            }elseif(is_string($item)){
                $configs = config($item);
                foreach($configs as $config){
                    $appArrays[] = $config;
                }
            }
        }


        $applications = collect($appArrays);

        $slug = $request->route('app_slug', false);

        if(!$slug){
            $slug = $request->get('app_slug', false);
        }

        if($slug){
            
            $currentApp = $applications->firstWhere('slug', $slug);
        }   

        $apps = [
                'Apps' => [],
                'Sales' => [],
                'IT, Infrastructure' => []
            ];

        foreach ($applications as $application) {
            $apps[$application['department'] ? $application['department'] : 'Apps'][] = $application;
        }

        $return = [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'org' => ProcesstonClientOrgReolver::handle(),
            'application' => $currentApp,
            'applications' => array_filter($apps),
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];

        return $return;
        
    }
}
