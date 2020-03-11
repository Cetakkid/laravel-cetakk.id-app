<template>
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header mb-2">
                <h2 class="modal-title text-left" ><img src="../../assets/Logo.png" alt="Logo Cetak" class="img-fluid logo" /></h2>
                <!-- <p class="modal-title modplus text-left" >Daftar Harga</p> -->
                <button type="button" class="align-center close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p class="modal-title modplus text-left mb-3" >Cek Estimasi Harga</p>
                
                <a href="#print" data-toggle="collapse" aria-expanded="false" aria-controls="print" class="btn btn-primary text-center mx-auto d-block w-25 mx-auto my-2">Cek Harga Print</a>
                <div class="collapse multi-collapse text-center" id="print">
                    <span class="font-weight-bold text-center d-block m-2">Jenis Kertas</span>

                    <!-- Daftar HVS -->
                    <a href="#hvs" data-toggle="collapse" aria-expanded="false" aria-controls="hvs" class="btn btn-primary d-block mx-auto w-25 my-2">HVS</a>
                    <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="hvs">
                        <thead class="">
                            <th class="col1">Barang</th>
                            <th class="col2">Harga/qtc</th>
                            <th class="col3">Pesanan</th>
                        </thead>

                        <tbody v-for="item in hvs_blackwhites" v-bind:key="item.id">
                            <tr>
                                <td class="align-baseline">{{item.etalase}}</td>
                                <td class="align-baseline">Rp. {{item.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                            </tr>
                        </tbody>
                        <tbody v-for="item in hvs_colors" v-bind:key="item.id">
                            <tr>
                                <td class="align-baseline">{{item.etalase}}</td>
                                <td class="align-baseline">Rp. {{item.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                            </tr>
                        </tbody>
                        <tbody v-for="item in hvs_fullcolors" v-bind:key="item.id">
                            <tr>
                                <td class="align-baseline">{{item.etalase}}</td>
                                <td class="align-baseline">Rp. {{item.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Daftar Ivory -->

                    <a href="#ivory" data-toggle="collapse" aria-expanded="false" aria-controls="ivory" class="btn btn-primary d-block w-25 mx-auto my-2">Ivory</a>
                    <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="ivory">
                        <thead class="">
                            <th class="col1">Barang</th>
                            <th class="col2">Harga/qtc</th>
                            <th class="col3">Pesanan</th>
                        </thead>

                        <tbody v-for="item in ivorys" v-bind:key="item.id">
                            <tr>
                                <td class="align-baseline">{{item.etalase}}</td>
                                <td class="align-baseline">Rp. {{item.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                            </tr>
                        </tbody>
                    </table>

                     <!-- Daftar Art Paper	 -->
                    <a data-toggle="collapse" href="#art_paper" aria-expanded="false" aria-controls="art_paper" class="btn btn-primary d-block w-25 mx-auto my-2">Art Paper</a>
                    <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="art_paper">
                        <thead class="">
                            <th class="col1">Barang</th>
                            <th class="col2">Harga/qtc</th>
                            <th class="col3">Pesanan</th>
                        </thead>

                        <tbody v-for="item in art_papers" v-bind:key="item.id">
                            <tr>
                                <td class="align-baseline">{{item.etalase}}</td>
                                <td class="align-baseline">Rp. {{item.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <a href="#jilid" data-toggle="collapse" aria-expanded="false" aria-controls="jilid" class="btn btn-primary text-center mx-auto my-2 d-block w-25">Cek Harga Jilid</a>
                <div class="collapse multi-collapse text-center" id="jilid">
                    <span class="font-weight-bold text-center d-block m-2">Jenis Jilid</span>
                    
                    <!-- Daftar Harga Jilid Mika	 -->
                    <a data-toggle="collapse" href="#mica" aria-expanded="false" aria-controls="mica" class="btn btn-primary mx-auto my-2 d-block w-25">Mika</a>
                    <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="mica">
                        <thead class="">
                            <th class="col1">Barang</th>
                            <th class="col2">Harga/qtc</th>
                            <th class="col3">Pesanan</th>
                        </thead>

                        <tbody v-for="jilid in micas" v-bind:key="jilid.id">
                            <tr>
                                <td class="align-baseline">{{jilid.etalase}}</td>
                                <td class="align-baseline">Rp. {{jilid.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="jilid.order"></td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- Daftar Harga Hard Cover	 -->
                    <a data-toggle="collapse" href="#hard_cover" aria-expanded="false" aria-controls="hard_cover" class="btn btn-primary mx-auto my-2 d-block w-25">Hard Cover</a>
                    <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="hard_cover">
                        <thead class="">
                            <th class="col1">Barang</th>
                            <th class="col2">Harga/qtc</th>
                            <th class="col3">Pesanan</th>
                        </thead>

                        <tbody v-for="jilid in hard_covers" v-bind:key="jilid.id">
                            <tr>
                                <td class="align-baseline">{{jilid.etalase}}</td>
                                <td class="align-baseline">Rp. {{jilid.harga}}</td>
                                <td class="align-baseline"><input type="number" min="0" class="form-control modal-badge" placeholder="0" v-model="jilid.order"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Daftar Harga Jasa Antar	 -->
                <a href="#delivery" data-toggle="collapse" aria-expanded="false" aria-controls="delivery" class="btn btn-primary text-center mx-auto my-2 d-block w-25">Cek Harga Jasa Antar</a>
                <table class="table table-hover table-bordered table-sm text-left collapse multi-collapse" id="delivery">
                    <thead class="">
                        <th class="col1">Barang</th>
                        <th class="col2">Harga/qtc</th>
                        <th class="col3">Pesanan</th>
                    </thead>

                    <tbody v-for="item in deliveries" v-bind:key="item.id">
                        <tr>
                            <td class="align-baseline">{{item.etalase}}</td>
                            <td class="align-baseline">Rp. {{item.harga}}</td>
                            <td class="align-baseline"><input type="number" min="0" max="1" class="form-control modal-badge" placeholder="0" v-model="item.order"></td>
                        </tr>
                    </tbody>
                </table>
                <span class="font-italic text-danger text-left">*Hasil print dapat diambil 1x24 jam</span>
                <table class="table table-hover table-bordered table-sm text-left">
                    <tr class="bg-total">
                        <td class="align-baseline font-weight-bold" colspan="2">Total Harga</td>
                        <td class="align-baseline">Rp {{ (totalHvs_blackwhite + totalHvs_color + totalHvs_fullcolor + totalIvory + totalMica +  totalArt_paper + totalHard_cover + totalDelivery) }}</td>
                    </tr>
                </table>
                <input type="button" id="order" class="form-control button-order" data-toggle="modal" data-target="#orderModal" value="Pesan Sekarang" @click="orderNow" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PriceList',
    computed: {
        totalPrint: function(){
            return this.prints.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },
        
        totalJilid: function(){
            return this.jilids.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalHvs_blackwhite: function(){
            return this.hvs_blackwhites.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalHvs_color: function(){
            return this.hvs_colors.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalHvs_fullcolor: function(){
            return this.hvs_fullcolors.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalIvory: function(){
            return this.ivorys.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalArt_paper: function(){
            return this.art_papers.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalMica: function(){
            return this.micas.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalHard_cover: function(){
            return this.hard_covers.reduce(function(total, item){
                return total += item.order*item.harga; 
            },0);
        },

        totalDelivery: function(){
            return this.deliveries.reduce(function(total, item){
                return total += item.order*item.harga;
            },0)
        }
    },
    methods: {
        orderNow: function() {
            window.open(
                'https://s.id/vendor1'
            )
        }
    },
    data() {
        return {
            hvs_blackwhites: [
                {
                    etalase: 'HVS Hitam Putih A4',
                    harga: 200,
                    order: ''
                },
                {
                    etalase: 'HVS Hitam Putih F4',
                    harga: 250,
                    order: ''
                },
                {
                    etalase: 'HVS Hitam Putih A3',
                    harga: 1200,
                    order: ''
                }
            ],
            hvs_colors: [
                {
                    etalase: 'HVS Warna A4',
                    harga: 500,
                    order: ''
                },
                {
                    etalase: 'HVS Warna F4',
                    harga: 750,
                    order: ''
                },
                {
                    etalase: 'HVS Warna A3',
                    harga: 1200,
                    order: ''
                }
            ],
            hvs_fullcolors: [
                {
                    etalase: 'HVS Full Warna A4',
                    harga: 1500,
                    order: ''
                },
                {
                    etalase: 'HVS Full WarnaF4',
                    harga: 2000,
                    order: ''
                },
                {
                    etalase: 'HVS Full Warna A3',
                    harga: 2700,
                    order: ''
                }
            ],
            ivorys: [
                {
                    etalase: 'Ivory A4',
                    harga: 2500,
                    order: ''
                },
                {
                    etalase: 'Ivory A3',
                    harga: 4500,
                    order: ''
                }
            ],
            art_papers: [
                {
                    etalase: 'Art Paper A3',
                    harga: 2500,
                    order: ''
                }
            ],
            micas: [
                {
                    etalase: '1 inch (40 lembar)',
                    harga: 3000,
                    order: ''
                },
                {
                    etalase: '1,5 inch (-+100 lembar)',
                    harga: 4000,
                    order: ''
                },
                {
                    etalase: '2 inch (-+200 lembar)',
                    harga: 5000,
                    order: ''
                },
            ],
            hard_covers: [
                {
                    etalase: 'Hard Cover',
                    harga: 35000,
                    order: ''
                }
            ],
			prints: [
				{
					etalase: "Kertas A4 Print Hitam/Putih",
					harga: 200,
                    order: ''
				},
				{
					etalase: "Kertas A4 Print Warna",
					harga: 500,
                    order: ''
				},
				{
					etalase: "Kertas A4 Print Full Warna",
					harga: 1500,
                    order: ''
				},
				{
					etalase: "Kertas F4 Print Hitam/Putih",
					harga: 250,
                    order: ''
				},
				{
					etalase: "Kertas F4 Print Warna",
					harga: 750,
                    order: '' 
				},
				{
					etalase: "Kertas F4 Print Full Warna",
					harga: 2000,
                    order: '' 
				},
			],
			jilids: [
				{
					etalase: "Jilid Mika",
					harga: 3000,
                    order: '' 
				},
				{
					etalase: "Jilid Hardcover",
					harga: 4000,
                    order: '' 
				},					
			],
            deliveries: [
                {
                    etalase: 'Jl. Kaliurang KM 12 s/d KM 14,5 (2,5 Km)',
                    harga: 5000,
                    order: ''
                }
            ]
        }
    }
}
</script>

<style scoped>
  * {
    font-family: 'Open Sans';
  }
  .col1{width: 70%} .col2{width: 20%} .col3{width: 10%}
  .modplus{
    font-weight: 700;
    font-size: 16px;
  }
  .bg-total{
    border-top:0.5px solid #333;
    margin-top: 50px;
  }
  input {
    margin-top: 20px;
    border: none;
  }
  .modal-badge {
    margin-top: 0 !important;
    height: 25px !important;
  }
  .modal-content{
    background-color: #f0f0f0 !important;
    z-index: 9999999;
  }
  .button-order {
    background-color: #0065C2;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .button-order:hover {
    opacity: 0.5;
  }
  .logo {
    width: 30%;
  }
</style>