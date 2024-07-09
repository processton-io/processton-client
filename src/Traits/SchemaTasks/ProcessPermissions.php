<?php

namespace Processton\ProcesstonClient\Traits\SchemaTasks;

use App\Models\Permission;
use Illuminate\Support\Facades\DB;

trait ProcessPermissions {


    protected function processPermissions($permissions, $dryRun = true){

        DB::beginTransaction();

        $toBeCreated = [];
        foreach($permissions as $permission){

            $permission = Permission::where([
                'key' => $permission['key']
            ])->firstOr(function () use (&$toBeCreated, $permission, $dryRun){
                
                $newRole = Permission::create([
                    'category_group' => $permission['group'],
                    'sub_category_group' => $permission['sub_group'],
                    'name' => $permission['name'],
                    'key' => $permission['key']
                ]);
                $toBeCreated[] = $permission['name'].' with group '.$permission['group']. ($dryRun ? ' will be created' : ' is created');
                return $newRole;
            });

        }

        if($dryRun){
            DB::rollBack();
        }else{
            DB::commit();
        }

        return $toBeCreated;

    }

}