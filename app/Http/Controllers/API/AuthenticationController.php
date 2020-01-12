<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;

use App\Models\User;
use App\Models\Profile;


   
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
            'first_name' => 'required',
            'last_name' => 'required',
            'birthdate' => 'required',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Erreur de validation.', $validator->errors());       
        }

        $input = [
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => $request->get('password'),
        ];
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);

        $value = [
            'username' => $request->get('name'),
            'email' => $request->get('email'),
            'first_name' => $request->get('first_name'),
            'last_name' => $request->get('last_name'),
            'birthdate' => $request->get('birthdate'),
            'user_id' => $user->id,
        ];

        $profile = Profile::create($value);


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
            $success['userprofile'] =  Profile::where('user_id', $user->id)->first();
   
            return $this->sendResponse($success, 'Connexion de l\'utilisateur réussie.');
        } 
        else{ 
            return $this->sendError('Le mot de passe est incorrect.', ['error'=>'Non autorisé']);
        } 
    }
}