<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ["rangkap", "tinta", "jenis_kertas", "jilid", "jasa_antar", "file", "takenTime", "notes", "agreement"];
}
