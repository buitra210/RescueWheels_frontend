<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [Controller::class, 'home'])->name('home');
Route::post('/create',[Controller::class, 'create'])->name('create');
Route::get('/login', [UserController::class, 'login'])->name('login');
Route::get('/register', [UserController::class, 'register'])->name('register');
Route::get('/recover_pass', [UserController::class, 'recover_pass'])->name('recover_pass');
Route::get('admin', [UserController::class, 'admin'])->name('admin');
Route::get('admin/login', [UserController::class, 'admin_login'])->name('admin_login');
Route::post('admin/login/handle', [UserController::class, 'handle'])->name('handle');
Route::get('admin/dashboard', [UserController::class, 'dashboard'])->name('dashboard')->middleware('auth');

