<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $guarded = [];
    protected $with = ['createdBy'];

    public function createdBy(){
        return $this->belongsTo('App\Models\Profile', 'created_by');
    }
}
