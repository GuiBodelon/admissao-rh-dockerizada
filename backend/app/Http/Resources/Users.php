<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class Users extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'password' => $this->password,
            //Os campos abaixo serão preenchidos através do cadastro do RH
            'vinculo' => $this->vinculo,
            'nivel' => $this->nivel,
            'salario_base' => $this->salario_base,
            'data_contratacao' => $this->data_contratacao,
            'cargo' => $this->cargo,
            'equipe' => $this->equipe,
            'unidade' => $this->unidade,
            //Os campos abaixo só serão preenchidos qaundo o usuário enviar o formulário de admissão
            'email_pessoal' => $this->email_pessoal,
            'data_nascimento' => $this->data_nascimento,
            'cpf' => $this->cpf,
            //'rg' => $this->rg,
            'cep' => $this->cep,
            'rua' => $this->rua,
            'numero' => $this->numero,
            'complemento' => $this->complemento,
            'bairro' => $this->bairro,
            'cidade' => $this->cidade,
            'uf' => $this->uf,
            'celular' => $this->celular,
            'is_divulga_aniversario' => $this->is_divulga_aniversario,
            'is_autoriza_imagem' => $this->is_autoriza_imagem,
            'genero' => $this->genero,
            'orientacao_sexual' => $this->orientacao_sexual,
            'etnia' => $this->etnia,
            'escolaridade' => $this->escolaridade,
            'filhos' => $this->filhos,
            'pcd' => $this->pcd,
            'pet' => $this->pet,
            'signo' => $this->signo,
            'time' => $this->time,
            /*'va' => $this->va,
            'vr' => $this->vr,
            'aux_home_office' => $this->aux_home_office,
            'aux_bem_estar' => $this->aux_bem_estar,
            'aux_educacao' => $this->aux_educacao,*/
            'banco' => $this->banco,
            'agencia' => $this->agencia,
            'conta' => $this->conta,
            'digito' => $this->digito,
            'nome_mae' => $this->nome_mae,
            'nome_pai' => $this->nome_pai,
            'instituicao_ensino' => $this->instituicao_ensino,
            'instituicao_ensino_endereco' => $this->instituicao_ensino_endereco,
            'curso' => $this->curso,
            'matricula' => $this->matricula,
            'semestre' => $this->semestre,
            'periodo' => $this->periodo,
            'status_formulario_admissao' => $this->status_formulario_admissao,
            'data_demissao' => $this->data_demissao,
            'status_colaborador' => $this->status_colaborador,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }

}
