<?php

namespace App\Http\Controllers;

use App\Vendor;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('role:Customer');
    }

    public function index(){
        $vendors = Vendor::all();
        return view('customers.list_vendors', compact('vendors'));
    }
}
