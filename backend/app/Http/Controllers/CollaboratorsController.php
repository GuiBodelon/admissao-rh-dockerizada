<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\Collaborators;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Hash;
use Mail;

use App\Service\GerarContratoService;

use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Http\Resources\Collaborators as CollaboratorsResource;
use App\Http\Controllers\BaseController as BaseController;

class CollaboratorsController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Collaborators::all();
        return $this->sendResponse(CollaboratorsResource::collection($collaborators), 'Colaboradors buscados com sucesso.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Collaborators $collaborators)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'nome' => 'required',
            'email_corporativo' => 'required',
            'vinculo' => 'required',
            'data_contratacao' => 'required',
            'cargo' => 'required',
            'equipe' => 'required',
            'unidade' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());
        }

        $collaborator = Collaborators::create($request->all());

        return $this->sendResponse(new CollaboratorsResource($collaborators), 'Colaborador criado com sucesso.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $collaborators = Collaborators::find($id);
        if (is_null($collaborators)) {
            return $this->sendError('Colaborador não existe.');
        }

        return $this->sendResponse(new CollaboratorsResource($collaborators), 'Colaborador buscado com sucesso.');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collaborators $collaborators, $id)
    {
        $inputs = $request->all();
        /*$validator = Validator::make($inputs, [
            'email_corporativo' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());
        }*/

        $updateCollaborator = Collaborators::findOrFail($id);
        $updateCollaborator->update($inputs);

        /*$updateCollaborator = Collaborators::where('id', $id)->update([
            'email' => $email,
            'type' => $type,
            'status' => $status
        ]);*/

        return $this->sendResponse(new CollaboratorsResource($collaborators), 'Colaborador atualizado com sucesso.');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Collaborators $collaborators)
    {
        $collaborators->delete();
        return $this->sendResponse([], 'Colaborador excluído com sucesso.');
    }

    //Custom Requests
    public function checkEmail(Request $request)
    {
        $emailCorporativo = $request->email_corporativo;
        $collaborator = Collaborators::where('email_corporativo', $emailCorporativo)->get();
        //$collaboratorToken = CollaboratorVerify::where('collaborator_id', $collaborator->id);

        return $collaborator;
    }

    /*public function verifyAccount(Request $request)
    {
        $token = $request->token;
        $verifyCollaborator = CollaboratorVerify::where('token', $token)->first();

        $message = 'Desculpe seu e-mail não foi encontrado.';

        if(!is_null($verifyCollaborator) ){
            $collaborator = $verifyCollaborator->collaborator;

            if(!$collaborator->is_email_verified) {
                $verifyCollaborator->collaborator->is_email_verified = 1;
                $verifyCollaborator->collaborator->save();
                $message = "Seu e-mail foi verificado com sucesso.";
            } else {
                $message = "Seu e-mail já foi verificado.";
            }
        }

        return response()->json($message);
    }*/

    public function updateEnvio(Request $request)
    {
        $id = $request->id;

        $updateEnvio = Collaborators::where('id', $id)->update([
            'status_formulario_admissao' => '1'
        ]);

        return $updateEnvio;
    }
}


