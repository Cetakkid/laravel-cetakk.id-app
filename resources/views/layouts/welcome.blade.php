<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ config('app.name', 'Cetakk.id') }}</title>

        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <!-- Tachyons CSS -->
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/>

        <!-- Fontawesome -->
        <link rel="stylesheet" href="{{ asset('assets/fonts/all.css') }}"/>

        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
    </head>
    <body>
        <div class="header" id="app">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            @if(Route::has('login'))
            <div class="container-fluid">
                <a href="/" class="navbar-brand nav-link">
                    <img src="{{ asset('assets/cetakkPutih.png') }}" class="branded" alt="Logo Cetakk.id">
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="closer nav-link menus-expand text-light"><i class="fas fa-times-circle"></i></a>
                        </li>
                        @auth
                            <li class="nav-item">
                                <a href="/" class="homepage rounded-pill nav-link menus-expand text-light">Halaman Utama</a>
                            </li>
                        @else
                            <li class="nav-item">
                                <a href="{{ route('login') }}" class="homepage rounded-pill nav-link menus-expand text-light">{{ __('Login') }}</a>
                            </li>
                        @endauth
                        <li class="nav-item">
                            <a href="/cara-kerja" class="rounded-pill nav-link menus-expand text-light">Cara Kerja</a>
                        </li>
                        <li class="nav-item">
                            <a href="/tentang" class="rounded-pill nav-link menus-expand text-light">Tentang Kami</a>
                        </li>
                        @auth
                            {{-- <li class="nav-item">
                                <a href="/" class="rounded-pill btn btn-light nav-link menus-expand pr-5 pl-5">Mulai</a>
                            </li> --}}

                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <i class="far fa-user mr-2"></i>{{ Auth::user()->name }}<span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    @if (Auth::user()->roles[0]->pivot->role_id == 1)
                                <a class="dropdown-item" href="{{ route('customer.index') }}"><i class="fas fa-columns mr-2"></i>Dashboard Customer</a>
                                        <a class="dropdown-item" href=""><i class="fas fa-print mr-2"></i>Cetakk Sekarang</a>
                                    @else
                                        <a class="dropdown-item" href=""><i class="fas fa-columns mr-2"></i>Dashboard Vendor</a>
                                    @endif

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <i class="fas fa-sign-out-alt mr-2"></i>{{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @else
                            <li class="nav-item">
                                <a href="{{ route('login') }}" class="rounded-pill btn btn-light nav-link menus-expand pr-5 pl-5">{{ __('Login') }}</a>
                            </li>
                        @endauth
                    </ul>
                </div>
            </div>
            @endif
            </nav>
        </div>

        <div class="content">
            @yield('content')
        </div>

        <footer class="site-footer text-left">
            <div class="footer-part text-left">
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                    <img src="{{ asset('assets/img/LogoteksPutih.png') }}" alt="Logo" class="mb-3 footerCredit">
                    <h6>Hubungi Kami</h6>
                    <ul class="footer-links">
                        <li><i class="fas fa-home mr-2"></i> <a href="">Jl.Kaliurang, Km.14, Umbulmartani, Ngemplak, Sleman</a></li>
                        <li><i class="fas fa-phone mr-2"></i> <a href="">9103124891</a></li>
                    </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                    <h6>Navigasi</h6>
                    <ul class="footer-links">
                        <li><a href="/">Halaman Utama</a></li>
                        <li><a href="/cara">Cara Kerja</a></li>
                        <li><a href="/tentang">Tentang Kami</a></li>
                        <li><a href="/dashboard-customer">Mulai Cetak</a></li>
                    </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                    <h6>Ikuti Kami</h6>
                    <ul class="footer-links">
                        <li>
                        <a href="https://www.instagram.com/cetakkid.official/"><img class="img-tumbs" src="{{ asset('assets/img/instagramwhite.svg') }}" alt="Instagram"></a>
                            <a href="https://www.linkedin.com/company/cetakk-id/"><img class="img-tumbs" src="{{ asset('assets/img/linkedinwhite.svg') }}" alt="LinkedIn"></a>
                        </li>
                    </ul>
                    </div>
                </div>
                <hr>
                </div>

                <div class="footer-part ">
                <div class="row">
                    <div class="col-md-8 col-sm-6 col-xs-12">
                    <p class="copyright-text">Copyright &copy; 2019 All Rights Reserved by
                        <a href="https://cetakk.id">Cetakk.id Developer</a>.
                    </p>
                    </div>
                </div>
            </div>
		</footer>
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script>
            $('.navbar-nav>li>a').on('click', function(){
                $('.navbar-collapse').collapse('hide');
            });

            $('.navbar-brand').on('click', function(){
                $('.navbar-collapse').collapse('hide');
            });

            $('.homepage').on('click', function(){
                $('.navbar-collapse').collapse('hide');
            });
        </script>
    </body>
</html>
