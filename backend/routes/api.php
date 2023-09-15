<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Models\User;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\NotificationsController;
use App\Http\Controllers\GenerateContractController;
use App\Http\Controllers\MenusController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Auth Routes
Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);
//Route::get('account/verify/{token}', [AuthController::class, 'verifyAccount'])->name('client.verify');
//Routes that need authorization
Route::middleware('auth:sanctum')->group( function () {
    //Auth Routes
    //Change password
    Route::post('/auth/change-password', [AuthController::class, 'changePassword']);
    //User Resources - CRUD
    Route::resource('/users', UsersController::class);
    //Menu Resources - CRUD for Sidebar Component
    Route::resource('/menus', MenusController::class);
    //Notifications Resources - CRUD for Notifications Component
    Route::resource('/notifications', NotificationsController::class);
    //Gerar contrato do usuário a partir da ficha de admissão
    Route::get('/gerar-contrato/filename', [GenerateContractController::class, 'gerarFilenameContrato']);
    Route::get('/gerar-contrato', [GenerateContractController::class, 'gerarContrato']);

});

