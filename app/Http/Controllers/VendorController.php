<?php

namespace App\Http\Controllers;

use App\Vendor;
use Image;
use Illuminate\Http\Request;

class VendorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vendors = Vendor::all();
        return view('contents.list_vendors', compact('vendors'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contents.create_vendor');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'owner_first_name' => 'required',
            'owner_last_name' => 'required',
            'email' => 'required',
            'image' => 'required|image|max:2048'
        ]);

        $vendor = new Vendor([
            'owner_first_name' => $request->get('owner_first_name'),
            'owner_last_name' => $request->get('owner_last_name'),
            'email' => $request->get('email'),
            'name' => $request->get('name'),
            'location' => $request->get('location'),
            'openTime' => $request->get('openTime'),
            'closeTime' => $request->get('closeTime'),
            'phone_number' => $request->get('phone_number'),
            'image' => $request->get('image')
        ]);

        $image_file = $request->user_image;

        $image = Image::make($image_file);

        Response::make($image->encode('jpeg'));

        Images::create($form_data);

        $vendor -> save();
        return redirect('/')->with('success', 'Vendor saved!');
    }

    function fetch_image($image_id)
    {
        $image = Images::findOrFail($image_id);

        $image_file = Image::make($image->user_image);

        $response = Response::make($image_file->encode('jpeg'));

        $response->header('Content-Type', 'image/jpeg');

        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
