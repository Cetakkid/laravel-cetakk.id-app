<template>
    <div class="container login">
        <div class="container">
			<div class="row justify-content-center">
				<div class="col-md-8">
					<div class="card">
						<div class="card-header">{{ name }}</div>

						<div class="card-body">
							<form>
								<div class="form-group row">
									<label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

									<div class="col-md-6">
										<input id="email" type="email" class="form-control" name="email" v-model="auth.email" required autocomplete="email" autofocus>

										<!-- @error('email')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
										@enderror -->
									</div>
								</div>

								<div class="form-group row">
									<label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

									<div class="col-md-6">
										<input id="password" type="password" class="form-control" name="password" v-model="auth.password" required autocomplete="current-password">

										<!-- @error('password')
											<span class="invalid-feedback" role="alert">
												<strong>{{ $message }}</strong>
											</span>
										@enderror -->
									</div>
								</div>

								<div class="form-group row">
									<div class="col-md-6 offset-md-4">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" name="remember" id="remember" >

											<label class="form-check-label" for="remember">
												<!-- {{ __('Remember Me') }} -->
												Remember me
											</label>
										</div>
									</div>
								</div>

								<div class="form-group row mb-0">
									<div class="col-md-8 offset-md-4">
										<button @click.prevent="login()" class="btn btn-primary">
											{{ name }}
										</button>

										<!-- @if (Route::has('password.request'))
											<a class="btn btn-link" href="{{ route('password.request') }}">
												Forgot your password
											</a>
										@endif -->
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Login',
	data(){
		return {
			name: 'Login',
			auth: {
				email: '',
				password: ''
			}
		}
	},
	methods: {
		login(){
			let uri = 'localhost:8000/login';
			console.log(this.auth)
			axios.post(uri, this.auth).then((response) => {
				this.$router.push({name: 'dashboard-customer'});
			});
		}
	}
}
</script>

<style>
	.login {
		margin-top: 81px;
		margin-bottom: 20px;
	}
</style>
