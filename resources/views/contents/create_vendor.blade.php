@extends('layouts.welcome')

<style>
    .create-vendor {
        margin-top: 100px;
        margin-bottom: 48px;
    }
</style>

@section('content')
<div class="container create-vendor">
    @if ($errors->any())
    <div class="alert alert-danger">
      <ul>
          @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
          @endforeach
      </ul>
    </div><br />
    @endif

    <h2 class="font-weight-bold">Register Vendor</h2>
    <form action="post" action="{{ route('vendors.store') }}">
        @csrf

        <div class="form-group">
            <label for="owner_first_name">Nama depan pemilik</label>
            <input type="text" class="form-control" name="owner_first_name">
        </div>
        <div class="form-group">
            <label for="owner_last_name">Nama belakang pemilik</label>
            <input type="text" class="form-control" name="owner_last_name">
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email">
        </div>
        <div class="form-group">
            <label for="name">Nama vendor</label>
            <input type="text" class="form-control" name="name">
        </div>
        <div class="form-group">
            <label for="location">Alamat vendor</label>
            <textarea name="location" class="form-control" cols="30" rows="10"></textarea>
        </div>
        <div class="form-group">
            <label for="openTime">Jam Buka</label>
            <input type="text" class="form-control" name="openTime">
        </div>
        <div class="form-group">
            <label for="closeTime">Jam Tutup</label>
            <input type="text" class="form-control" name="closeTime">
        </div>
        <div class="form-group">
            <label for="phone_number">Nomor Hp</label>
            <input type="text" class="form-control" name="phone_number">
        </div>
        <div class="custom-file mt-3 mb-3">
            <input type="file" name="image" class="custom-file-input" id="image">
            <label class="custom-file-label" for="image">Pilih Foto Vendor</label>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>
@endsection
