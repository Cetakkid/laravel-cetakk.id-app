<template>
    <div class="based">
        <div class="header">
            <nav class="navbar navbar-expand-lg navbar-dark nav-content fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <router-link to="/home" class="nav-link">
                        <img src="../../assets/cetakkPutih.png" class="branded" alt="Logo Cetakk.id">
                    </router-link>
                    </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="closer"><router-link to="" class="nav-link menus-expand text-light"><i class="fas fa-times-circle"></i></router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="homepage"><router-link to="/home" class="rounded-pill nav-link menus-expand text-light">Halaman Utama</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/cara" class="rounded-pill nav-link menus-expand text-light">Cara Kerja</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/tentang" class="rounded-pill nav-link menus-expand text-light">Tentang Kami</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a><router-link to="/dashboard-customer" class="rounded-pill btn btn-light nav-link menus-expand pr-5 pl-5">Mulai</router-link></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>

        <div class="content">
            <router-view></router-view>
        </div>

      <footer class="site-footer text-left">
        <div class="footer-part text-left">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <img src="../../assets/img/LogoteksPutih.png" alt="" class="mb-3 footerCredit">
              <h6>Hubungi Kami</h6>
              <ul class="footer-links">
                <li><i class="fas fa-home mr-2"></i> <a href="">Jl.Kaliurang, Km.14, Umbulmartani, Ngemplak, Sleman</a></li>
                <li><i class="fas fa-phone mr-2"></i> <a href="">9103124891</a></li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Navigasi</h6>
              <ul class="footer-links">
                <li><a><router-link to="/home">Halaman Utama</router-link></a></li>
                <li><a><router-link to="/cara">Cara Kerja</router-link></a></li>
                <li><a><router-link to="/tentang">Tentang Kami</router-link></a></li>
                <li><a><router-link to="/dashboard-customer">Mulai Cetak</router-link></a></li>
                            
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Ikuti Kami</h6>
              <ul class="footer-links">
                <li>
                    <a href="https://www.instagram.com/cetakkid.official/"><img class="img-tumbs" src="../../assets/img/instagramwhite.svg" alt=""></a>
                    <a href="https://www.linkedin.com/company/cetakk-id/"><img class="img-tumbs" src="../../assets/img/linkedinwhite.svg" alt=""></a>
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
    </div>
    
</template>

<script>
import JQuery from 'jquery'
//import '../../firebase'
export default {
  name: 'Based',
    
  mounted(){
	let $ = JQuery
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('.navbar-brand').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('.homepage').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
	},
}
</script>

<style scoped>
.navbar-toggler-icon {
    width: 1em !important;
    height: 1em !important;
}
.navbar-dark .navbar-toggler {
    color: rgba(255,255,255,.5);
    border-color: transparent !important;
    margin-top: -10px;
}
.nav-content{
    background: #0D7BE5;
    z-index: 200;
    height: 70px;
    padding: 0 3rem 0 3rem;
}
.navbar-nav li{
    margin: 10px;
}
.branded{
    height: 40px;
}
.btn-light, .btn-light:hover{
    color: #0D7BE5 !important;
    font-weight: 600 !important;
}
.nav-item{
    font-weight: 600 !important;
}

.nav-item:hover, .nav-link:hover{
    /* transition: transform .2s !important;
    transform: scale(1.01) !important; */
    font-weight: 600 !important;
}
.homepage{
  display: none;
}
.closer{
    display: none;
    border: none !important;
}
.closer .nav-link{
    border: none !important;
    font-size: 40px;
}
@media (max-width: 850px){
    .branded{
        height: 20px;
    }

    .navbar-brand{
        padding-top: 0 !important
    }
    .navbar-brand .nav-link{
        padding-top: 0 !important
    }
 
    .nav-content{
        background: #0D7BE5;
        z-index: 200;
        height: 50px;
        padding: 0 1rem 0 1rem;
    }
    button .navbar-toggler{
        padding-top: 0 !important;
    }
	.navbar-collapse{
        background-color: rgba(13, 125, 229, 0.945);
        min-height: 100vh;
        min-width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }

    .navbar-collapse .closer{
        padding: 100px 0 50px;
        display: block;
        color: azure;
    }
    .homepage{
      display: block;
    }
    .navbar-collapse .nav-item .nav-link{
        border: 2px solid #dddddd39;
        border-radius: 10px;
    }

    .navbar-collapse .nav-item .nav-link:hover{
        border: 2px solid #ffd90139;
        border-radius: 10px;
    }

    .menus-expand{
        background-color: transparent;
        color: #fff !important;
    }
}

@media (max-width: 200px){
	.navbar-collapse{
        background-color: rgba(13, 125, 229, 0.945);
        min-height: 100vh;
        min-width: 100%;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        overflow: hidden;
    }
    .homepage{
      display: block;
    }
    .navbar-collapse .close{
        color: azure;
        display: block !important;
    }
    .navbar-collapse .nav-item .nav-link{
        border: 2px solid #dddddd39;
        border-radius: 10px;
    }

    .navbar-collapse .nav-item .nav-link:hover{
        border: 2px solid #ffd90139;
        border-radius: 10px;
    }

    .menus-expand{
        background-color: transparent;
    }
    .nav-content{
      background: #0D7BE5;
      z-index: 200;
      height: 50px;
      padding: 0 1rem 0 1rem;
    }
}

.site-footer
{
  background-color:#26272b;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.footer-part{
  padding: 0rem 5rem 0rem 5rem;
}
.footerCredit{
	width: 150px;
	text-align: left
}

.img-tumbs{
    min-width: 35px;
    max-width: 35px;
	margin: 10px 10px 0 0;
}

.img-tumbs:hover{
    transition: transform .5s !important;
	transform: scale(1.1) !important
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#fff;
  font-weight: 600;
  margin-top:5px;
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#3366cc;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }

  .footer-part{
    padding: 0rem 2rem 0rem 2rem;
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#29aafe
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
</style>


