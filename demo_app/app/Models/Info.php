<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    use HasFactory;
    protected $table = 'rescue_info';
    protected $fillable = [
        'name',
        'phone',
        'address',
        'incident',
        'num_people',
        'note',
        'health'
    ];
}
