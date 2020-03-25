@extends('layouts.dashboard_customers')
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
            <input type="text" onkeyup="filterSearch()" id="searchbar" class="d-block form-control searchbar rounded-pill" placeholder="Cari Vendor ..." v-model="search" id="search" />
        </div>
    </div>
    <div class="row w-100 pr-5 pl-5 text-left">
        @foreach ($vendors as $vendor)
        <div class="col-md-3 col-sm-6 mb-2">
            <div class="card card-block list" id="list">
                <div class="card-body p-2">
                    <img src="{{ asset('images/vendors/') }}/{{ $vendor->image }}" alt="Photo of sunset">
                </div>
                <div class="card-body p-2 vendor">
                    <h3 class="font-weight-bold name">{{ $vendor->name }}</h3>
                    <p class="describer">{{ $vendor->location }}</p>
                    <p>Buka pukul <span class="text-info">{{ $vendor->openTime }} - {{ $vendor->closeTime }}</span></p>
                </div>

                <div class="card-footer p-2">
                    <form action="{{ route('order.create', $vendor->id) }}" method="GET">
                        @csrf
                        <button class="btn btn-primary btn-sm mr-2" type="submit">Cetakk</button>
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
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script>

    function filterSearch(){
        var search = document.getElementById('searchbar');
        var list = document.getElementsByClassName('list');
        var filter = search.value.toUpperCase();
        var vendor = document.getElementsByClassName('vendor');

        for(i=0; i < list.length; i++){
            var h3 = list[i].getElementsByTagName('h3')[0];
            var txtValue = h3.textContent || h3.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                list[i].style.display = "";
            } else {
                list[i].style.display = "none";
            };
        };
    };
    //document.getElementById("searchbar").oninput =
    /*
    function search(){
        var matcher = new RegExp(document.getElementById("searchbar").value, "gi");
        var name = document.getElementsByClassName("name");
        var list = document.getElementsByClassName("list");
        for(let i=0; i < list.length; I++){
            if(matcher.test(name[i].innerHTML)){
                list[i].style.display = "block";
            } else {
                list[i].style.display = "none";
            }
        }
    }*/

</script>
