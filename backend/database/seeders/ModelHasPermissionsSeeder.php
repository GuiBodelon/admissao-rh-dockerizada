<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModelHasPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('model_has_permissions')->insert([
            [
                'permission_id' => '1', //ID da Permissão
                'model_type' => 'App\Models\User', //Diretorio da Model User
                'model_id' => '1', //ID do Usuário na tabela Users
            ],
            [
                'permission_id' => '3',
                'model_type' => 'App\Models\User',
                'model_id' => '2',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '3',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '4',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '5',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '6',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '7',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '8',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '9',
            ],
            [
                'permission_id' => '2',
                'model_type' => 'App\Models\User',
                'model_id' => '10',
            ]
        ]);
    }
}
