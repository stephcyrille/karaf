<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use Validator;

use App\Models\Profile;



class ProfileController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profiles = Profile::all();
        $nber = Profile::all()->count();

        if($nber == 1)
        {
          $message = $nber.' utilisateur trouvé.';
        } else {
          $message = $nber.' utilisateurs trouvé.';
        }
        
        return $this->sendResponse($profiles, $message);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Check the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function check(Request $request)
    {
      $validator = Validator::make($request->all(), [
          'email' => 'required|email',
      ]);
 
      if($validator->fails()){
          return $this->sendError('Erreur de validation.', $validator->errors());       
      }

      $email = $request->get('email');
      $profile = Profile::where('email', $email)->get();

      // test if profile is really found
      if($profile->first()===null)
      {
        // Return a Json response null
        $message = 'L\'email ne correspond à aucun utilisateur.';
        return $this->sendError($message);

      } else {
        // Return Json response with userprofile
        // Only expose on request body email, username and picture path
        $message = 'Utilisateur trouvé.';  
        return $this->sendResponse($profile->first(), $message);
      }

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
