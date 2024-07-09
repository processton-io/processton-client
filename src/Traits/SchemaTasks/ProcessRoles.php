<?php

namespace Processton\ProcesstonClient\Traits\SchemaTasks;
use App\Models\Role;
use Illuminate\Support\Facades\DB;

trait ProcessRoles {


    protected function processRoles($roles, $dryRun = true){

        DB::beginTransaction();

        $toBeCreated = [];
        foreach($roles as $role){

            Role::where([
                'name' => $role['name'],
                'role_group' => $role['group']
            ])->firstOr(function () use (&$toBeCreated, $role, $dryRun){
                
                $newRole = Role::create([
                    'name' => $role['name'],
                    'role_group' => $role['group']
                ]);
                $toBeCreated[] = $role['name'].' with group '.$role['group']. ($dryRun ? ' will be created' : ' is created');
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