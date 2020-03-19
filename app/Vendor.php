<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    protected $fillable = ["name", "location", "openTime", "closeTime", "phone_number"];
}
