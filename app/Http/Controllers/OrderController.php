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
            'rangkap' => 'required|integer|between:1,100',
            'tinta' => 'required|max:50',
            'jenis_kertas' => 'required|max:50',
            'jilid' => 'required|max:100',
            'jasa_antar' => 'required|boolean',
            'file' => 'required|file|mimes:ppt,pptx,doc,docx,pdf,xls,xlsx|max:204800',
            'takenTime' => 'required',
            'notes' => 'required|min:3|max:1000',
            'agreement' => 'accepted'
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
