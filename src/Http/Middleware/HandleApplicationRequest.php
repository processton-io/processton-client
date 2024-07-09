<?php

namespace Processton\ProcesstonClient\Http\Middleware;

use Illuminate\Http\Request;
use Closure;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Symfony\Component\HttpFoundation\Response;

class HandleApplicationRequest extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

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

            $application = $applications->firstWhere('slug', $slug);
            
            if(!$application){
                abort(404);
            }

            $request->merge(['application' => $application]);
            $request->merge(['org' => tenant()]);

            $interactionSlug = $request->route('interaction_slug', false);
            if(!$interactionSlug){
                $interactionSlug = $request->get('interaction_slug', false);
            }
            if($interactionSlug){
                $interaction = collect($application['interactions'])->firstWhere('slug', $interactionSlug);
                if($interaction){
                    $request->merge(['interaction' => $interaction]);
                }else{
                    $request->merge(['interaction' => []]);
                }

                
            }

        }
        
        return $next($request);
    }

}
