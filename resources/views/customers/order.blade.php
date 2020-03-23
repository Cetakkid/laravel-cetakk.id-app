@extends('layouts.welcome')
<style>
    .form-order{
      padding-top: 15vh;
    }
    .form-group {
        text-align: left;
        font-size: 14px ;
    }
    .small-input {
        width: 7%
    }
    .radio {
        text-align: left;
        font-size: 12px;
    }
    ::placeholder {
        font-size: 12px;
    }
    input {
        display: inline-block;
    }
</style>

@section('content')
<div class="form-order" id="form-order">
<form name="form-order" method="post" action="{{ route('order.store') }}">
        @csrf
        <h3 class="m-auto font-weight-bold text-left w-75 pb-3">Formulir Pemesanan Percetakan</h3>

        {{-- <div class="form-group w-75 m-auto pb-3">
            <label for="name">Nama Kamu</label>
            <input type="text" name="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Nama kamu siapa?" required />
        </div>
        <div class="form-group w-75 m-auto pb-3">
            <label for="no_telp">Nomor Telepon Whatsapp</label>
            <input type="text" name="no_telp" class="form-control" id="no_telp" aria-describedby="no_telpHelp" placeholder="Minta nomor kamu dong~" required />
        </div> --}}
        <div class="form-group w-75 m-auto pb-3">
            <label for="jenis_kertas">Jenis Kertas</label>
            <select class="form-control" name="jenis_kertas" id="jenis_kertas" required>
                <option>HVS A4</option>
                <option>HVS F4</option>
                <option>HVS A3</option>
                <option>Ivory A4</option>
                <option>Ivory A3</option>
                <option>Art Paper</option>
            </select>
        </div>
        <div class="form-group w-75 m-auto pb-3">
            <label for="tinta">Pilih Tinta</label>
            <select class="form-control" name="tinta" id="tinta" required>
                <option>Hitam putih</option>
                <option>Warna</option>
                <option>Full warna</option>
            </select>
        </div>
        <div class="form-group w-75 m-auto pb-3">
            <label for="jilid">Pilih Jilid</label>
            <select class="form-control" name="jilid" id="jilid" required>
                <option>Mika</option>
                <option>Hard Cover</option>
                <option>Tanpa Jilid</option>
            </select>
        </div>
        <div class="form-group w-75 m-auto pb-3">
            <label for="rangkap">Jumlah Rangkap</label>
            <input type="number" min="1" name="rangkap" class="form-control d-block small-input" id="rangkap" aria-describedby="rangkapHelp" placeholder="1" required />
        </div>
        <!-- <div class="form-group w-75 m-auto pb-3">
            <label for="waktu_pengambilan">Waktu Pengambilan</label>
            <small class="d-block">Lokasi pengambilan: Keyla Copier, Jl. Kaliurang KM 13,5, Ngaglik, Sleman, DIY. <a href="https://goo.gl/maps/Sx7zaC1GF9Ugc9qL6">Lihat lokasi di Google Maps</a></small>
            <div id="waktu_pengambilan">
                <input type="text" class="form-control d-inline small-input" aria-describedby="timeHelp" placeholder="00" /> :
                <input type="text" class="form-control d-inline small-input" aria-describedby="timeHelp" placeholder="00" />
            </div>
        </div> -->
        <div class="custom-file w-75 m-auto pb-3 d-block">
            <label for="file" class="custom-file-label">Upload dokumen yang ingin dicetak (PDF)</label>
            <input type="file" id="file" name="file" ref="file" class="custom-file-input w-50 d-block">
        </div>
        <div class="form-group w-75 m-auto pb-3 pt-3">
            <label for="catatan">Tambahkan catatan untuk vendor</label>
            <input type="text" name="catatan" class="form-control d-block" id="catatan" aria-describedby="catatanHelp" placeholder="Misal: Print yang rapih ya" />
        </div>
        <div class="form-group pb-3 pt-3 w-75 m-auto">
            <label class="w-75 m-auto pb-2">Jasa Antar</label>
            <div class="custom-control custom-radio">
                <input type="radio" id="jasa_antar1" name="jasa_antar" value="Ya" class="custom-control-input" required>
                <label class="custom-control-label radio" for="jasa_antar1">Ya</label>
            </div>
            <div class="custom-control custom-radio pb-3">
                <input type="radio" id="jasa_antar2" value="Tidak" name="jasa_antar" class="custom-control-input" required>
                <label class="custom-control-label radio" for="jasa_antar2">Tidak</label>
            </div>
        </div>
        <div class="custom-control custom-checkbox w-75 m-auto pb-3">
            <input type="checkbox" name="agreement" class="custom-control-input" id="customCheck1" required>
            <label class="custom-control-label radio" for="customCheck1">Dengan ini saya telah mengirimkan data yang valid dan dapat dipertanggung jawabkan sebagaimana mestinya. Kami disini juga tidak akan menyalahgunakan data yang kamu kirim untuk kepentingan yang menyangkut privasi.</label>
        </div>
        <div class="form-group w-75 m-auto pb-4">
            <button class="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>
</div>
@endsection
