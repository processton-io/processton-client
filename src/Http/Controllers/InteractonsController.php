<?php

namespace Processton\ProcesstonClient\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Arr;
use Processton\ProcesstonClient\ProcesstonClient;

class InteractonsController extends Controller
{

    protected $_layoutData;

    function __construct(){
        $this->_layoutData = [
            'org' => [
                'name' => 'Processton Client'
            ],
            'application' => [
                'name' => 'Apps',
                'slug' => 'apps',
                
            ],
        ];
    }

    /**
     * Apps List Dashboard.
     */
    public function index(Request $request, $app_slug): Response|RedirectResponse
    {
        
        if($request->application && count($request->application['menu']) > 0){
            return redirect()->route('processton-client.app.interaction', [
                'app_slug' => $request['application']['slug'],
                'interaction_slug'  => $request['application']['menu'][0]['slug']
            ]);
        }
        return ProcesstonClient::renderError(
            '404',
            'Structure is not defined',
            'Usually if you are seeing this screen you shall contact system administrator.'
        );

    }

    /**
     * Apps List Dashboard.
     */
    public function interaction(Request $request, $app_slug, $interaction_slug): Response|RedirectResponse
    {
        
        $application = $request->application;
        
        $interaction = $request->interaction;
        
        if(!$interaction){
            return ProcesstonClient::renderError(
                '404',
                'Interaction is not defined',
                'Usually if you are seeing this screen you shall contact system administrator.'
            );
        }
        $attachments = [];
        if(Arr::exists($interaction, 'attachments')){
            $attachment = collect($interaction['attachments']);
            $keys = $attachment->pluck("key")->toArray();
            $attachments = $request->only($keys);
        }
        return ProcesstonClient::render([
            'interaction' => $interaction,
            'attachments' => $attachments,
            'attachment_values' => $request->all()
        ]);

    }

    
}
