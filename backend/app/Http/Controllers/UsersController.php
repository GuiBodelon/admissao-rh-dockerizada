<?php

namespace App\Http\Controllers;

use Validator;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\Users as UsersResource;
use App\Http\Controllers\BaseController as BaseController;

class UsersController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        return $this->sendResponse(UsersResource::collection($users), 'Usuários buscados com sucesso.');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        date_default_timezone_set('America/Sao_Paulo');
        $input = $request->all();
        if ($input['vinculo'] == "Temporário" || $input['vinculo'] == "Freelancer") {
            $validator = Validator::make($input, [
                'nome' => 'required',
                'email_corporativo' => 'required',
                'vinculo' => 'required'
            ]);
        } else {
            $validator = Validator::make($input, [
                'nome' => 'required',
                'email_corporativo' => 'required',
                'vinculo' => 'required',
                'nivel' => 'required',
                'salario_base' => 'required',
                'data_contratacao' => 'required',
                'cargo' => 'required',
                'equipe' => 'required',
                'unidade' => 'required'
            ]);
        }

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $user = User::create($request->all());

        return $this->sendResponse(new UsersResource($user), 'Usuário criado com sucesso.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $users = User::find($id);
        if (is_null($users)) {
            return $this->sendError('Usuário não existe.');
        }

        return response()->json($users);
    }

    /**
     * Update the given user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        date_default_timezone_set('America/Sao_Paulo');
        $inputs = $request->all();
        /*$validator = Validator::make($inputs, [
            'email_corporativo' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError($validator->errors());
        }*/
        $updateUser = User::findOrFail($id);
        $updateUser->update($inputs);

        /*$updateUser = User::where('id', $id)->update([
            'email' => $email,
            'type' => $type,
            'status' => $status
        ]);*/

        return $this->sendResponse(new UsersResource($updateUser), 'Usuário atualizado com sucesso.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, User $user)
    {
        $user->delete();
        return $this->sendResponse([], 'Usuário excluído com sucesso.');
    }

    //Custom Requests
    //
}
