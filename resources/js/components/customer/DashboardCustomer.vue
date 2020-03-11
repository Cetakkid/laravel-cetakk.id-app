<template>
  <div class="d-flex" id="wrapper"> 
    <loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullPage"></loading> 
    <!-- Sidebar -->
    <div class="text-left" id="sidebar-wrapper">
      <div class="sidebar-heading p-4 text-center">
        <router-link to="/home">
          <img src="../../assets/cetakkPutih.png" alt="Logo Cetakk.id" />
        </router-link>
      </div>
      <div class="list-group list-group-flush">
          <section class="mt-3">
            <!-- <a><router-link class="list-group-item list-group-item-action" to='/profile-customer' ><i class="fas fa-user icon"></i> Profil</router-link></a> -->
            <a><router-link class="list-group-item list-group-item-action" to='/pilih-vendor'><i class="fas fa-clone icon"></i> Pilih Vendor</router-link></a>
            <a><router-link class="list-group-item list-group-item-action" to='/cara-cetak'><i class="fas fa-question icon"></i> Bantuan</router-link></a>
            <!-- <a><router-link class="list-group-item list-group-item-action" to='/history-customer'><i class="fas fa-history icon"></i> Sejarah Pesanan</router-link></a> -->
          </section>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <div class="text-left dashboard">
        <div class="sidebar-heading container-fluid mb-3">
          <button class="btn btn-light" id="menu-toggle"><i class="fas fa-align-left"></i></button>
        </div>

        <section class="content">
            <router-view></router-view>
        </section>
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
</template>

<script>
const JQuery = () => import('jquery')
const Loading = () => import('vue-loading-overlay')
import 'vue-loading-overlay/dist/vue-loading.css'

export default {
  name: 'DashboardCustomer',
  components: {
		Loading
	},
	data(){
		return {
			isLoading: false,
			fullPage: true
		}
	},
  mounted(){
    this.isLoading = true
		setTimeout(() => {
			this.isLoading = false
    }, 1000)
    
		let $ = JQuery
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
	},

}
</script>

<style scoped>

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -17rem;
  position: fixed;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  background-color: #0275d8 !important;
  transform: scale(1.001);
  transition:0.3s;
  box-shadow: 2px 2px 5px rgba(54, 54, 54, 0.3);
}
#menu-toggle{
    display: block;
    margin-top: 15px;
}
.sidebar-heading{
  min-height: 30px;
}

.sidebar-heading img{
  max-width: 13rem;
}
.icon{
    min-width: 40px;
}
.list-group-item{
    font-size: 14px;
    border-color: transparent !important;
    border-left: 3px solid transparent !important;
    background-color: #0275d8 !important;
    color: white !important;
}
.list-group-item:hover{
    background-color: rgb(101, 170, 235) !important;
    color: white !important;
    border-left: 3px solid #FEC71F !important;
    -webkit-transition: background-color 0.3s !important;
    -moz-transition: background-color 035s !important;
    -o-transition: background-color 0.3s !important;
    transition: background-color 0.3s !important;
}
#sidebar-wrapper .list-group {
  width: 17rem;
}

#page-content-wrapper {
  min-width: 100vw;
  margin-left: 17rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
  position: relative;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 17rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#wrapper.toggled #page-content-wrapper {
  margin-left: 17rem;
}

.dashboard{
    padding: 10px 20px;
}

@media (min-width: 1200px) {
  #menu-toggle{
    display: none;
  }
  
  #sidebar-wrapper {
    margin-left: 0;
  }
    
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -17rem;
  }
  
}

@media (max-width: 1200px) {
  #menu-toggle{
    display: block;
  }
  
  #sidebar-wrapper {
    margin-left: -17rem;
  }
    
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
    margin-left: 0rem;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: 0rem;
  }
}

@media (min-width: 800px) {
  #sidebar-wrapper {
    margin-left: 0;
    width: 15rem;
  }
  #sidebar-wrapper .list-group {
    width: 15rem;
  }
    #menu-toggle{
    display: none;
    }
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
    margin-left: 15rem
  }
  #page-content-wrapper .dashboard {
    padding: 0%;
  }
  #wrapper.toggled #sidebar-wrapper {
    margin-left: -17rem;
  }
}

.router-link-exact-active{
  background-color: rgb(101, 170, 235) !important;
  z-index: 1000;
  color: #fff !important;
  border-left: 3px solid #FEC71F !important;
    -webkit-transition: background-color 0.3s !important;
    -moz-transition: background-color 035s !important;
    -o-transition: background-color 0.3s !important;
    transition: background-color 0.3s !important;
}
.content{
    padding: 0 10px;
    
}
</style>

