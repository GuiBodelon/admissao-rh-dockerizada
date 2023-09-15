<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('email_pessoal')->unique()->nullable();
            $table->string('data_nascimento')->nullable();
            $table->string('cpf', 14)->nullable();
            //$table->string('rg', 12)->nullable();
            $table->string('cep', 9)->nullable();
            $table->string('rua')->nullable();
            $table->integer('numero')->nullable();
            $table->string('complemento')->nullable();
            $table->string('bairro')->nullable();
            $table->string('cidade')->nullable();
            $table->string('uf', 2)->nullable();
            $table->string('celular', 15)->nullable();
            $table->string('cnpj', 18)->nullable();
            $table->string('razao_social')->nullable();
            $table->string('data_contratacao')->nullable();
            $table->string('cargo')->nullable();
            $table->string('equipe')->nullable();
            $table->string('unidade')->nullable();
            $table->string('vinculo')->nullable();
            $table->string('nivel')->nullable();
            $table->string('salario_base')->nullable();
            $table->string('is_divulga_aniversario')->nullable();
            $table->string('is_autoriza_imagem')->nullable();
            $table->string('genero')->nullable();
            $table->string('orientacao_sexual')->nullable();
            $table->string('etnia')->nullable();
            $table->string('escolaridade')->nullable();
            $table->string('filhos', 3)->nullable();
            $table->string('pcd', 3)->nullable();
            $table->string('pet', 3)->nullable();
            $table->string('signo')->nullable();
            $table->string('time')->nullable();
            /*$table->string('va')->nullable();
            $table->string('vr')->nullable();
            $table->string('aux_home_office')->nullable();
            $table->string('aux_bem_estar')->nullable();
            $table->string('aux_educacao')->nullable();*/
            $table->string('banco')->nullable();
            $table->string('agencia')->nullable();
            $table->string('conta')->nullable();
            $table->string('digito')->nullable();
            $table->string('nome_mae')->nullable();
            $table->string('nome_pai')->nullable();
            $table->string('instituicao_ensino')->nullable();
            $table->string('instituicao_ensino_endereco')->nullable();
            $table->string('curso')->nullable();
            $table->string('matricula')->nullable();
            $table->string('semestre')->nullable();
            $table->string('periodo')->nullable();
            $table->boolean('status_formulario_admissao')->default(0);
            $table->string('data_demissao')->nullable();
            $table->boolean('status_colaborador')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
