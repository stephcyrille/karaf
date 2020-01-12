<?php

use Illuminate\Http\Request;

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


Route::post('auth/register', 'API\AuthenticationController@register');
Route::post('auth/login', 'API\AuthenticationController@login');

Route::get('auth/users/all', 'API\UserController@index');

Route::get('profiles/all', 'API\ProfileController@index');
Route::post('profiles/check/email', 'API\ProfileController@check');
   
// Route::middleware('auth:api')->group( function () {
//     Route::resource('products', 'API\ProductController');
// });
