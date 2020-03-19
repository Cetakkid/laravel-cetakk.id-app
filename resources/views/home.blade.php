@extends('layouts.app')
<style>
.font-hero{
    font-weight: 700 !important;
    font-size: 50px;
}
strong{
    font-weight: 700 !important
}
.font-subhero{
    font-weight: 900 !important;
    font-size: 25px;
}
.font-title{
    font-size: 30px;
}
.text-desc{
    font-size: 12px;
}
.text-slider-items{
    display: none
}
.font-secondary{
    font-weight: 500;
    font-size: 18px;
    color: #ffc502
}
.font-primary{
    font-size: 14px;
}

.hero {
    /* background:url('../../assets/img/vectorBg.png') no-repeat center; */
    background-size: cover;
    min-height: 50rem;
    background-color: #0D7BE5;
    /* background-position-y: -10vh; */
    padding: 11em 5em 0 5em;
}
.hero-part{
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

.hero-paid img{
    width: 100%;
}

.home-image{
    min-width: 70%
}

.use-part {
    background:url('../../assets/img/bg-usefull.svg') no-repeat center;
    background-size: cover;
    height: 40rem;
    background-color: #ffffff;
    padding: 100px 5rem 0 5rem;
    background-position-y: -20rem;
}
.use-part-title{
    margin-bottom: 30px;
}

.cardList{
    margin-bottom: 150px;
}
.carder{
    padding: 0 30px 0 30px;
}

.ease{
    height: 40rem;
    padding: 50px 5rem 0 5rem;
}
.ease-title{
    height: 5rem;
}
.ease img{
    width: 80%;
}
.btn-start{
    margin-top: 20px;
}

hr{
    height: 5px;
    width: 100px;
    background: #F4BE0B;
    border-radius: 50px;
}

.btn-outline-warning{
    border: 2px solid #F4BE0B;
}

.text-white{
    color: #fff !important;
}

.text-white:hover{
    color: #222 !important;
}

.gmbr{
    min-height: 150px;
    max-height: 150px;
    max-width: 100%;
    padding: 20px
}

.card{
    background-color: #0D7BE5;
    border-radius: 10px;
    min-height: 310px;
}
.card:hover{
    transition: transform .6s !important;
    transform: scale(1.01) !important;
}

.font-smaller:hover{
    color: #F4BE0B !important;
    text-decoration: none;
    transform: scale(1.02) !important;
}

.footer{
    background: url('../../assets/img/footer.svg') no-repeat center;
    background-size: cover;
    min-height: 30rem;
    background-position-y: 10px;
}
.part-foot{
    padding-top: 200px;
}


@media (max-width: 900px) {
    .font-hero{
        font-weight: 700;
        font-size: 30px;
    }
    .font-title{
        font-size: 20px;
    }
    .hero {
        min-height: 30rem;
        background-color: #0D7BE5;
        padding: 5em 0 0 0;
}
    .hero-part{
        padding: 30px;
    }
    .hero-paid{
        display: none;
    }
    .use-part {
        height: 90rem;
        padding: 30px 0rem 0 0rem;
        background-position-y: 0rem;
    }
    .use-part-title{
        margin-bottom: 0px;
    }

    .cardList{
        margin-bottom: 150px;
    }
    .carder{
        padding: 0 50px 0 50px;
    }

    .ease{
        height: 25rem;
        padding: 1rem;
        margin-bottom: 5rem;
    }
    .ease-title{
        height: 5rem;
    }
    .ease img{
        display: none;
    }

    hr{
        height: 5px;
        width: 100px;
        background: #F4BE0B;
        border-radius: 50px;
    }

    .btn-outline-warning{
        border: 2px solid #F4BE0B;
    }

    .text-white{
        color: #fff !important;
    }

    .text-white:hover{
        color: #222 !important;
    }


    .card{
        background-color: #0D7BE5;
        border-radius: 10px;
        min-height: 50px;
    }

    .card:hover{
        transition: transform .6s !important;
        transform: scale(1.01) !important;
    }

    .font-smaller:hover{
        color: #F4BE0B !important;
        text-decoration: none;
        transform: scale(1.02) !important;
    }
    .footer{
        background-size: cover;
        min-height: 20rem;
    }
    .part-foot{
        padding-top: 100px;
    }

}
</style>
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
{{-- <based></based> --}}
@endsection
