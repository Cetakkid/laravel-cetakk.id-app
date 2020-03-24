@extends('layouts.welcome')
<style>
    .hero {
        background-color: #fff !important;
    }
    .proses{
        width: 100%;
        margin: 0 auto
    }
</style>

@section('content')
<div class="hero">
    <div>
        <img class="proses" src="{{ asset('/assets/img/proses.jpg') }}" alt="Proses Order">
    </div>
</div>
@endsection
