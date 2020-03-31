@extends('layouts.welcome')
<style>
.pilihVendor{
    padding-top: 10vh;
    margin-bottom: 32px;
}
*{
    font-size: 14px ;
}
.card-Coming-soon {
    position: relative;
    text-align: center;
    color: #7e7e7e;
    height: 100%;
}
.caption-Coming-soon {
    position: absolute;
    bottom: 45%;
    left: 15%;
    font-size: 24px;
}
.linked{
    text-decoration: none;
}
.fade {
    background-color: #080808ad !important;
}
.card:hover{
    transform: scale(1.001);
    transition:0.3s;
    box-shadow: 2px 2px 5px rgba(54, 54, 54, 0.3);
}
.card img{
    width:100%;
}
.searchbar {
    border: 2px solid #ddd;
}
</style>

@section('content')
<div class="pilihVendor">
    <div class="row w-100 p-5">
        <div class="col-md-12">
            <input type="text" class="d-block form-control searchbar rounded-pill" placeholder="Cari Vendor ..." v-model="search" id="search" />
        </div>
    </div>
    <div class="row w-100 pr-5 pl-5 text-left">
        @foreach ($vendors as $vendor)
        <div class="col-md-3 col-sm-6 mb-2">
            <div class="card card-block">
                <div class="card-body p-2">
                    <img src="{{ asset('images/vendors/') }}/{{ $vendor->image }}" alt="Photo of sunset">
                </div>
                <div class="card-body p-2">
                    <h3 class="font-weight-bold">{{ $vendor->name }}</h3>
                    <p class="describer">{{ $vendor->location }}</p>
                    <p>Buka pukul <span class="text-info">{{ $vendor->openTime }} - {{ $vendor->closeTime }}</span></p>
                </div>

                <div class="card-footer p-2">
                    <form action="{{ route('order.create') }}" method="GET">
                        @csrf
                        <button class="btn btn-primary btn-sm mr-2" type="submit">Cetak</button>
                    </form>
                    <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button>
                </div>
            </div>
        </div>
        @endforeach
    </div>

    <!-- Modal Order -->
    <!-- <div class="modal fade" id="pesan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <PriceList v-if="true" />
    </div>   -->
</div>
@endsection
