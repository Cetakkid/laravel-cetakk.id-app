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
            'file' => 'required|file',
            'takenTime' => 'required',
            'notes' => 'required',
            'agreement' => 'required'
        ]);

        //$request->file('file')->getClientOriginalName();

        // $fileName = "fileName".time().'.'.request()->file->getClientOriginalExtension();
        // $path = $request->file->storeAs('files', $fileName);
        // dd($path);
        //Order::create([$request->all(), $request->file('file')->getClientOriginalName()])->save();


        $order = Order::create([
            'rangkap' => $request->post('rangkap'),
            'tinta' => $request->post('tinta'),
            'jenis_kertas' => $request->post('jenis_kertas'),
            'jilid' => $request->post('jilid'),
            'jasa_antar' => $request->post('jasa_antar'),
            'file' => $request->file('file')->getClientOriginalName(),
            'takenTime' => $request->post('takenTime'),
            'notes' => $request->post('notes'),
            'agreement' => $request->post('agreement')
        ]);

        $order->save();
        //$fileName = getClientOriginalName().'.'.request()->file->getClientOriginalExtension();
        //$fileName = "fileName".time().'.'.request()->file->getClientOriginalExtension();
        $request->file->store('files');
        return redirect('/')->with('success', 'Order saved!');
    }
}
