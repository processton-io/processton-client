<?php

namespace Processton\ProcesstonClient;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Processton\ProcesstonClient\Skeleton\SkeletonClass
 */
class ProcesstonClientFacade extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'processton-client';
    }
}
