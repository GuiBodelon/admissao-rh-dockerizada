<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            [
                'label' => 'Dashboard',
                'icon' => 'fa-solid fa-gauge',
                'route' => '/dashboard',
                'visible_to_permissions' => "admin, user, rh",
                'parent_id' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
        $espacoColaboradorId = DB::table('menus')->insertGetId([
            'label' => 'Espaço do Colaborador',
            'icon' => 'fa-solid fa-user',
            'route' => null,
            'visible_to_permissions' => "admin, user",
            'parent_id' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('menus')->insert([
            [
                'label' => 'Ficha de Admissão',
                'icon' => 'fa-solid fa-circle',
                'route' => '/espaco-colaborador/ficha-admissao',
                'visible_to_permissions' => "admin, user",
                'parent_id' => $espacoColaboradorId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'label' => 'Questionário de Desempenho',
                'icon' => 'fa-solid fa-circle',
                'route' => '/espaco-colaborador/questionario-de-desempenho',
                'visible_to_permissions' => "admin, user",
                'parent_id' => $espacoColaboradorId,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
        // Insert parent menu items
        $rhMenuId = DB::table('menus')->insertGetId([
            'label' => 'Recursos Humanos',
            'icon' => 'fa-solid fa-users-gear',
            'route' => null,
            'visible_to_permissions' => "admin, rh",
            'parent_id' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);
        DB::table('menus')->insert([
            [
                'label' => 'Banco de Dados Colaboradores',
                'icon' => 'fa-solid fa-circle',
                'route' => '/rh/banco-de-dados',
                'visible_to_permissions' => "admin, rh",
                'parent_id' => $rhMenuId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'label' => 'Ficha de Admissão',
                'icon' => 'fa-solid fa-circle',
                'route' => '/rh/ficha-admissao',
                'visible_to_permissions' => "admin, rh",
                'parent_id' => $rhMenuId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'label' => 'Questionário de Desempenho',
                'icon' => 'fa-solid fa-circle',
                'route' => '/rh/questionario-de-desempenho',
                'visible_to_permissions' => "admin, rh",
                'parent_id' => $rhMenuId,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
        $configuracoesId = DB::table('menus')->insertGetId([
            'label' => 'Configurações do Sistema',
            'icon' => 'fa-solid fa-gear',
            'route' => null,
            'visible_to_permissions' => "admin, rh",
            'parent_id' => 0,
            'created_at' => now(),
            'updated_at' => now()
        ]);

        DB::table('menus')->insert([
            [
                'label' => 'Cadastro de Usuários',
                'icon' => 'fa-solid fa-circle',
                'route' => '/configuracoes/cadastro-de-usuarios',
                'visible_to_permissions' => "admin, rh",
                'parent_id' => $configuracoesId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'label' => 'Manutenção de Menus',
                'icon' => 'fa-solid fa-circle',
                'route' => '/configuracoes/manutencao-de-menus',
                'visible_to_permissions' => "admin",
                'parent_id' => $configuracoesId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'label' => 'Permissões de Usuários',
                'icon' => 'fa-solid fa-circle',
                'route' => '/configuracoes/permissoes-de-usuarios',
                'visible_to_permissions' => "admin",
                'parent_id' => $configuracoesId,
                'created_at' => now(),
                'updated_at' => now()
            ],
            /*[
                'label' => 'Ajuda',
                'icon' => 'fa-solid fa-circle-question',
                'route' => null,
                'visible_to_permissions' => "admin, user, rh",
                'parent_id' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ],*/
        ]);
    }
}
