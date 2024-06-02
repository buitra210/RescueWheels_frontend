<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    function login(){
        return view('login');
    }
    function register(){
        return view('register');
    }
    function recover_pass(){
        return view('recover_pass');
    }
}
