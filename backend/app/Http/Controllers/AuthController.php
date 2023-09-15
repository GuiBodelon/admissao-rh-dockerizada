<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */
    public function createUser(Request $request)
    {
        try {
            $inputs = $request->all();
            //Validated
            $validateUser = Validator::make($inputs,
            [
                'name' => 'required',
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                'confirm_password' => 'required|same:password',
                'permission' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            $user = User::create([
                'name' => ucwords($request->name),
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'vinculo' => $request->vinculo,
                'data_contratacao' => $request->data_contratacao,
                'cargo' => $request->cargo,
                'equipe' => $request->equipe,
                'unidade' => $request->unidade,
            ])->givePermissionTo($request->permission);

            return response()->json([
                'status' => true,
                'message' => 'Usuário criado com sucesso',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(),
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => false,
                    'message' => 'Email e/ou Senha incorretos.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' => true,
                'message' => 'Logado com sucesso! Bem vindo ao sistema - '.$user->name.'!',
                'token' => $user->createToken("API TOKEN")->plainTextToken,
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'vinculo' => $user->vinculo,
                'data_contratacao' => $user->data_contratacao,
                'cargo' => $user->cargo,
                'equipe' => $user->equipe,
                'unidade' => $user->unidade,
                'status_formulario_admissao' => $user->status_formulario_admissao,
                'status_colaborador' => $user->status_colaborador,
                'permissions' => $user->getPermissionNames()
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function changePassword(Request $request)
    {
        try {
            $user = Auth::user();

            $validateUser = Validator::make($request->all(),
            [
                'oldPassword' => 'required',
                'newPassword' => 'required',
                'newPasswordConfirmation' => 'required|same:newPassword',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            if (!Hash::check($request->oldPassword, $user->password)) {
                return response()->json([
                    'status' => false,
                    'message' => 'Senha antiga incorreta.',
                ], 401);
            }

            $user->password = Hash::make($request->newPassword);
            $user->save();

            return response()->json([
                'status' => true,
                'message' => 'Senha alterada com sucesso!'
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }
}
