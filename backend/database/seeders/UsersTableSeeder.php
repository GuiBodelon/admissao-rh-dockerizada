<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'admin@gruporeport.com.br',
                'password' => Hash::make('$p@Adm123'),
                'vinculo' => null,
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => null,
                'cargo' => null,
                'equipe' => null,
                'unidade' => null,
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'RH',
                'email' => 'rh@gruporeport.com.br',
                'password' => Hash::make('rh123'),
                'vinculo' => null,
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => null,
                'cargo' => null,
                'equipe' => 'RH',
                'unidade' => null,
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 1',
                'email' => 'teste1@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Fixo',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '01/02/2020',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Web',
                'unidade' => 'rpt.s',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 2',
                'email' => 'teste2@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Estagiário',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '11/07/2022',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Design',
                'unidade' => 'rpt.e',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 3',
                'email' => 'teste3@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Freelancer',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '07/01/2023',
                'cargo' => 'Cargo Teste',
                'equipe' => 'RH',
                'unidade' => 'rpt.com',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 4',
                'email' => 'teste4@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Temporário',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '18/01/2021',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Conteúdo',
                'unidade' => 'rpt.edu',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 5',
                'email' => 'teste5@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Fixo',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '18/01/2021',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Conteúdo',
                'unidade' => 'rpt.e',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 6',
                'email' => 'teste6@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Temporário',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '18/01/2021',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Conteúdo',
                'unidade' => 'rpt.e',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 7',
                'email' => 'teste7@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Freelancer',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '18/01/2021',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Conteúdo',
                'unidade' => 'rpt.com',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Nome Teste 8',
                'email' => 'teste8@gruporeport.com.br',
                'password' => Hash::make('123'),
                'vinculo' => 'Freelancer',
                'nivel' => null,
                'salario_base' => null,
                'data_contratacao' => '18/01/2021',
                'cargo' => 'Cargo Teste',
                'equipe' => 'Conteúdo',
                'unidade' => 'rpt.com',
                'status_formulario_admissao' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // Define o formato de conversão para o campo created_at
        /*
        DB::statement("ALTER TABLE users CHANGE created_at created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP");
        DB::statement("ALTER TABLE users MODIFY COLUMN created_at TIMESTAMP NULL DEFAULT NULL");
        DB::statement("ALTER TABLE users CHANGE updated_at updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP");*/
    }
}
