<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Order;

class OrderController extends Controller
{
    public function create(){
        return view('customers.order');
    }

    public function store(Request $request){
        $request->validate([
            'rangkap' => 'required',
            'tinta' => 'required',
            'jenis_kertas' => 'required',
            'jilid' => 'required',
            'jasa_antar' => 'required',
            'file' => 'required',
            'takenTime' => 'required',
            'notes' => 'required',
            'agreement' => 'required'
        ]);

        $order = new Order([
            'rangkap' => $request->post('rangkap'),
            'tinta' => $request->post('tinta'),
            'jenis_kertas' => $request->post('jenis_kertas'),
            'jilid' => $request->post('jilid'),
            'jasa_antar' => $request->post('jasa_antar'),
            'file' => $request->post('file'),
            'takenTime' => $request->post('takenTime'),
            'notes' => $request->post('notes'),
            'agreement' => $request->post('agreement')
        ]);

        $order -> save();
        //return redirect('/')->with('success', 'Order saved!');
        return view('/');
    }
}
