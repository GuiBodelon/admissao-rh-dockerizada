<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        //Os campos abaixo só serão preenchidos quando o colaborador enviar o formulário de admissão para alimentar o banco de dados
        'email_pessoal',
        'data_nascimento',
        'cpf',
        'cep',
        'rua',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'uf',
        'celular',
        'cnpj',
        'razao_social',
        'data_contratacao',
        'cargo',
        'equipe',
        'unidade',
        'vinculo',
        'nivel',
        'salario_base',
        'is_divulga_aniversario',
        'is_autoriza_imagem',
        'genero',
        'orientacao_sexual',
        'etnia',
        'escolaridade',
        'filhos',
        'pcd',
        'pet',
        'signo',
        'time',
        'banco',
        'agencia',
        'conta',
        'digito',
        'nome_mae',
        'nome_pai',
        'instituicao_ensino',
        'instituicao_ensino_endereco',
        'curso',
        'matricula',
        'semestre',
        'periodo',
        'status_formulario_admissao',
        'data_demissao',
        'status_colaborador',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];
}
