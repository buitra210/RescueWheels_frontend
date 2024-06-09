<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use  App\Models\Info;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    function home()
    {
        $user = Info::find(1);
        // return $user;
        return view('welcome', compact('user'));
    }
    function create(Request $request)
    {
        $validate = $request->validate([
            'name' => 'required|string|max:36',
            'phone' => 'required|string|max:10',
            'address' => 'required|string',
            'incident' => 'required|string',
            'num_people' => 'required|integer|max:1000',
            'health' => 'required|string',
            'note' => 'required|string'
        ]);
        Info::create($validate);
        return back();
    }
}
