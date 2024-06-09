<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Info;

class UserController extends Controller
{
    //
    function login()
    {
        return view('login');
    }
    function register()
    {
        return view('register');
    }
    function recover_pass()
    {
        return view('recover_pass');
    }
    function admin_login()
    {
        return view('admin.login');
    }
    function handle(Request $request)
    {
        $validate = $request->validate(
            [
                'email' => 'required|email',
                'password' => 'required|regex:/^[A-Za-z0-9!@#$%^&*()_]{6,32}$/'
            ]
        );
        $email = $request->input('email');
        // $password = Hash::make($request->input('password'));
        $password = $request->input('password');
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            return redirect()->route('dashboard');
        }
        else return back();
    }
    function dashboard()
    {
        $infos = Info::all();
        return view('admin.manage',compact('infos'));
    }
}
