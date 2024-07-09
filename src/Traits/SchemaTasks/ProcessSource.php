<?php

namespace Processton\ProcesstonClient\Traits\SchemaTasks;

trait ProcessSource {

    use ProcessPermissions, 
    ProcessRoles,
    ProcessObject;

    protected function processSource($schemaSource, $dryRun = true){

        $schemaObject = $this->processLink($schemaSource);

        $schemaLTSObjectVersionFiles = $this->processLink($schemaObject['lts_version']['link']);

        $logs = [];

        foreach($schemaLTSObjectVersionFiles as $file){

            $fileObject = $this->processLink($file);

            $loclaLogs = [];

            $loclaLogs['file'] = $file;

            if(array_key_exists('permissions', $fileObject) && count($fileObject['permissions']) > 0){
                $loclaLogs['permissions'] = $this->processPermissions($fileObject['permissions'], $dryRun);
            }
            
            if(array_key_exists('roles', $fileObject) && count($fileObject['roles']) > 0){
                $loclaLogs['roles'] = $this->processRoles($fileObject['roles'], $dryRun);
            }
            
            if(array_key_exists('objects', $fileObject) && count($fileObject['objects']) > 0){
                $loclaLogs['objects'] = $this->processObjects($fileObject['objects'], $dryRun);
            }
            
            if(array_key_exists('forms', $fileObject) && count($fileObject['forms']) > 0){
                $loclaLogs['forms'] = $this->processForms($fileObject['forms'], $dryRun);
            }
            
            if(array_key_exists('datatables', $fileObject) && count($fileObject['datatables']) > 0){
                $loclaLogs['datatables'] = $this->processDataTables($fileObject['datatables'], $dryRun);
            }
            
            if(array_key_exists('cards', $fileObject) && count($fileObject['cards']) > 0){
                $loclaLogs['cards'] = $this->processCards($fileObject['cards'], $dryRun);
            }
            
            if(array_key_exists('interactions', $fileObject) && count($fileObject['interactions']) > 0){
                $loclaLogs['interactions'] = $this->processInteractions($fileObject['interactions'], $dryRun);
            }
            
            if(array_key_exists('apps', $fileObject) && count($fileObject['apps']) > 0){
                $loclaLogs['apps'] = $this->processApps($fileObject['apps'], $dryRun);
            }
            $logs[] = $loclaLogs;

        }

        return $logs;

    }



}