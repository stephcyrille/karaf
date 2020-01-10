<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;

use App\Models\User;


   
class AuthenticationController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6',
            'password_confirmation' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Erreur de validation.', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);

        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
   
        return $this->sendResponse($success, 'Enregistrement de l\'utilisateur réussie.');
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 

            $success['token'] =  $user->createToken('MyApp')->accessToken; 
            $success['name'] =  $user->name;
   
            return $this->sendResponse($success, 'Connexion de l\'utilisateur réussie.');
        } 
        else{ 
            return $this->sendError('Non autorisé.', ['error'=>'Non autorisé']);
        } 
    }
}