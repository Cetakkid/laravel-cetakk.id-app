<template>
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
		
				<a v-on:click="getStarted" class="rounded-pill btn btn-warning mt-3">
					<router-link to='/dashboard-customer' class="btn-based btn font-weight-bold text-dark">Cetak Sekarang</router-link>
				</a>
			</div>
			<div class="hero-paid col-md-6">
				<img src="../../assets/img/homePaid.svg" alt="">
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
								<img class="gmbr" src="../../assets/img/benefit1.svg" alt="Upload Dokumen di Cetakk.id">
							<p class="font-weight-bold">PILIH VENDOR</p>
								<p class="text-desc">Pilih salah satu vendor yang tersedia</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 carder">
						<div class="card shadow m-2">
							<div class="card-body text-light p-4">
								<img class="gmbr" src="../../assets/img/benefit1.svg" alt="Upload Dokumen di Cetakk.id">
								<p class="font-weight-bold">CEK HARGA</p>
								<p class="text-desc">Gunakan fitur cek harga untuk memastikan estimasi harga</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 carder">
						<div class="card shadow m-2">
							<div class="card-body text-light p-4">
								<img class="gmbr" src="../../assets/img/benefit2.svg" alt="Upload Dokumen di Cetakk.id">
								<p class="font-weight-bold">KIRIM FILE</p>
								<p class="text-desc">Dokumen pesanan Anda akan dicetak oleh vendor pilihan Anda</p>
							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-6 carder">
						<div class="card shadow m-2">
							<div class="card-body text-light p-4">
								<img class="gmbr" src="../../assets/img/benefit3.svg" alt="Upload Dokumen di Cetakk.id">
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
					<img src="../../assets/img/bg-ease.svg" alt="">
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
						<a v-on:click="getStarted" class="rounded-pill btn-warning btn">
							<router-link to='/dashboard-customer' class="btn text-button font-weight-bold">Cetak Sekarang</router-link>
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
</template>

<script>
/* eslint-disable */
import JQuery from 'jquery'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import Typed from '../../assets/typed/typed.min.js'

export default {
	name: 'Home',
	components: {
		Loading
	},
	data(){
		return {
			isLoading: false,
			fullPage: true
		}
	},
	methods: {
		getStarted(){
			return 0
		}
	},
	mounted() {
		let $ = JQuery
		this.isLoading = true
		setTimeout(() => {
			this.isLoading = false
		}, 3000)

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
	}
}
</script>

<style scoped>
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