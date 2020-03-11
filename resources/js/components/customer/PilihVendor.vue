<template>
  <div class="pilihVendor">
    <div class="row p-5">
      <div class="col-md-12">
        <input type="text" class="d-block form-control searchbar rounded-pill" placeholder="Cari Vendor ..." v-model="search" id="search" />
      </div>
    </div>
    <!-- <div class="row pr-5 pl-5 text-left" v-for="vendor in filteredList" :key="vendor.id">
      <div class="col-md-3 col-sm-6 mb-2" v-for="vendor in vendors" :key="vendor.id">
          <div class="card card-block">
            <div class="card-body p-2">
              <img src="../../assets/keylacopier.jpeg" alt="Photo of sunset">
            </div>
            <div class="card-body p-2">
              <h3 class="font-weight-bold">{{ vendor.name }}</h3>
              <p class="describer">{{ vendor.address }}</p> 
              <p>Buka pukul <span class="text-info">{{ vendor.openOrder }}</span></p>
            </div>

            <div class="card-footer p-2">
              <a class="btn btn-primary btn-sm mr-2" :href="vendor.orderLink">Cetakk</a>
              <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
            </div>
          </div>
      </div>
      <div class="col-md-3 col-sm-6 mb-2" v-for="vendor in Coming_soons" :key="vendor.id">
        <div class="card card-block card-Coming-soon">
          <div class="card-body p-2">
            <img src="../../assets/img/coming-soon.svg" alt="Coming Soon" class="mt-4" style="opacity: 0.2;">
            <h2 class="font-weight-bold text-center caption-Coming-soon">{{ vendor.name }}</h2>
          </div>
        </div>
      </div>
    </div> -->
    <div class="col-md-3 col-sm-6 mb-2" v-for="vendor in vendors" :key="vendor.id">
          <div class="card card-block">
            <div class="card-body p-2">
              <img src="../../assets/keylacopier.jpeg" alt="Photo of sunset">
            </div>
            <div class="card-body p-2">
              <h3 class="font-weight-bold">{{ vendor.name }}</h3>
              <p class="describer">{{ vendor.address }}</p> 
              <p>Buka pukul <span class="text-info">{{ vendor.openOrder }}</span></p>
            </div>

            <div class="card-footer p-2">
              <router-link class="btn btn-primary btn-sm mr-2" to="/order/:id">Cetakk</router-link>
              <button class="btn btn-warning btn-sm text-light linked" data-toggle="modal" data-target="#pesan">Cek Harga</button> 
            </div>
          </div>
      </div>

    <!-- Modal Order -->
    <div class="modal fade" id="pesan" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <PriceList v-if="true" />
    </div>  
  </div>
</template>

<script>
import PriceList from './PriceList'
export default {
  name: 'PilihVendor',
  components : {
    PriceList
  },
  data() {
    return {
      search: '',
      vendors: [
        {
          id: 1,
          name: 'Keylacopier • Owner',
          address: 'Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
          openOrder: '07.00 - 23.00 WIB',
          orderLink: 'https://s.id/vendor1'
        },
        {
          id: 2,
          name: 'Dummy Data • Owner',
          address: 'Jl. Kaliurang KM.13 Besi, Sukoharjo, Ngaglik, Sleman',
          openOrder: '07.00 - 23.00 WIB',
          orderLink: 'https://s.id/vendor1'
        },
      ],
      Coming_soons: [
        {
          name: 'Coming Soon',
        },
        {
          name: 'Coming Soon',
        },
        {
          name: 'Coming Soon',
        }
      ]
    }
  },
  computed: {
    /*
		filteredList(){
			return this.vendors.filter((vendor) => {
        //vendor.name.toLowerCase().includes(input.value.toLowerCase())
        return vendor.name.match(this.search)
			})
    }
    */
    filteredList(){
      return this.vendors.filter(vendor => {
        return vendor.name.toLowerCase().includes(this.search.toLowerCase())
        /* return vendor.name.startsWith(this.search) */
      })
    }
	}
}

</script>

<style scoped>
.pilihVendor{
  padding-top: 10vh
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
