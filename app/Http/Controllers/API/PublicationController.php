<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

use App\Models\Publication;


class PublicationController extends BaseController
{
    public function get_list()
    {
        $publications = Publication::all();
        $nber = Publication::all()->count();

        if($nber >= 1)
        {
          $message = $nber.' publications trouvée.';
        } else {
          $message = $nber.' publication trouvée.';
        }
        
        return $this->sendResponse($publications, $message);
    }
    
    /**
     * Check the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function add(Request $request)
    {
      $validator = Validator::make($request->all(), [
        'content' => 'required|max:250',
        'created_by' => 'required',
      ]);

      if($validator->fails()){
          return $this->sendError('Erreur de validation.', $validator->errors());       
      }

      $value = [
        'content'       => $request->get('content'),
        'created_by'    => $request->get('created_by'),
        'is_published'  => true,
      ];

      $message = 'Publication créée avec success';

      $publication = Publication::create($value);

      return $this->sendResponse($publication, $message);
    }
}
