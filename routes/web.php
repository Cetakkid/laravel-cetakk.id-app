<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;
// use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/{any}', function () {
//     return view('home');
// })->where('any', '.*');
Route::get('/', function () {
    return view('contents.main');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::resource('vendors', 'VendorController');
Route::get('/order/create', 'OrderController@create')->name('order.create');
Route::post('/order', 'OrderController@store')->name('order.store');
Route::get('/dashboard-customer', 'CustomerController@index')->name('customer.index');
