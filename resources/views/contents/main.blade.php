@extends('layouts.welcome')

@section('content')
<div class="container-fluid">
    <!-- <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading>  -->
    <div class="hero cover row justify-content-md-center">
        <div class="hero-part col-md-6 text-left">
            <p class="font-hero text-light mb-0">Cetak dokumen kamu,</p>
            <p class="font-hero text-light mb-3">
                <span class="text-slider-items">lebih cepat, lebih mudah,bisa dimana saja</span>
                <strong class="text-slider"></strong>
            </p>

            <p class="text-light mb-2">Cetakk.id menawarkan kemudahan dalam mencetak dokumen Anda sendiri ! <br> Saat ini kami hadir di Yogyakarta. <br>
                Dikejar <span class="font-weight-bold">Deadline?</span>
                Tenang, ada <span class="font-weight-bold">Cetakk.id</span>
            </p>

            <a href="/dashboard-customer" class="btn-based btn font-weight-bold text-dark rounded-pill btn btn-warning mt-3">
                Cetak Sekarang
            </a>
        </div>
        <div class="hero-paid col-md-6">
        <img src="{{ asset('assets/img/homePaid.svg') }}" alt="Hero">
        </div>
    </div>

    <div class="use-part row justify-content-md-center">
        <div class="col-md-12 text-center use-part-title">
            <p class="font-title font-weight-bold">Proses Dokumen Anda Sendiri</p>
            <hr>
        </div>
        <div class="row justify-content-md-center cardList">
                <div class="col-md-3 col-sm-6 carder">
                    <div class="card shadow m-2">
                        <div class="card-body text-light p-4">
                        <img class="gmbr" src="{{ asset('assets/img/benefit1.svg') }}" alt="Upload Dokumen di Cetakk.id">
                        <p class="font-weight-bold">PILIH VENDOR</p>
                            <p class="text-desc">Pilih salah satu vendor yang tersedia</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 carder">
                    <div class="card shadow m-2">
                        <div class="card-body text-light p-4">
                        <img class="gmbr" src="{{ asset('assets/img/benefit1.svg') }}" alt="Upload Dokumen di Cetakk.id">
                            <p class="font-weight-bold">CEK HARGA</p>
                            <p class="text-desc">Gunakan fitur cek harga untuk memastikan estimasi harga</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 carder">
                    <div class="card shadow m-2">
                        <div class="card-body text-light p-4">
                        <img class="gmbr" src="{{ asset('assets/img/benefit2.svg') }}" alt="Upload Dokumen di Cetakk.id">
                            <p class="font-weight-bold">KIRIM FILE</p>
                            <p class="text-desc">Dokumen pesanan Anda akan dicetak oleh vendor pilihan Anda</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 carder">
                    <div class="card shadow m-2">
                        <div class="card-body text-light p-4">
                        <img class="gmbr" src="{{ asset('assets/img/benefit3.svg') }}" alt="Upload Dokumen di Cetakk.id">
                            <p class="font-weight-bold">AMBIL PESANAN</p>
                            <p class="text-desc">Ambil hasil dokumen di lokasi vendor dan lakukan pembayaran</p>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div class="ease row justify-content-md-center">
        <div class="col-md-12 text-center ease-title">
            <p class="font-title font-weight-bold">Hemat Waktu dan Tenaga</p>
            <hr>
        </div>

        <div class="row justify-content-md-center ease-part">
            <div class="col-md-6">
            <img src="{{ asset('assets/img/bg-ease.svg') }}" alt="">
            </div>
            <div class="col-md-6 text-left">
                <div class="col-md-12">
                    <p>Kamu dapat mencetak seluruh dokumenmu menggunakan platform kami.
                        Dengan segala kemudahan yang diberikan, Anda dapat menyelesaikan aktifitas lainnya ! </p>
                </div>
                <div class="col-md-10">
                    <p class="m-0"><i class="fas fa-check-circle mr-2 text-success"></i> Pilihan vendor yang beragam</p>
                    <p class="m-0"><i class="fas fa-check-circle mr-2 text-success"></i> Biaya antar yang terjangkau</p>
                    <p class="m-0"><i class="fas fa-check-circle mr-2 text-success"></i> Kemudahan Pemesanan</p>
                    <p class="m-0"><i class="fas fa-check-circle mr-2 text-success"></i> Kemudahan Transaksi</p>
                </div>
                <div class="col-md-10 btn-start">
                    <a href="/dashboard-customer" v-on:click="getStarted" class="btn text-button font-weight-bold rounded-pill btn-warning btn">
                        Cetak Sekarang
                    </a>
                </div>

            </div>
        </div>
    </div>

    <div class="footer row justify-content-md-center ">
        <div class="col-sm-12 part-foot">
            <h1 class="font-hero text-warning mb-3">300+ Dokumen</h1>
            <h2 class="font-subhero text-light mb-3">Sudah berhasil dicetak</h2>
            <p class="font-primary text-light mb-4 font-italic">Banyak pengguna semakin mudah dan cepat<br>
                    mencetak dokumen setelah menggunakan Cetakk.id
            </p>
        </div>
    </div>
</div>

<script src="{{ asset('assets/typed/typed.min.js') }}"></script>
<script>
if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
    });
}
</script>
@endsection
