<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $guarded = [];

    public function publication(){
        return $this->hasMany('App\Models\Publication');
    }
}
