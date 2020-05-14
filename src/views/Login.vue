<template>
  <div class="auth">
    <div class="auth-container">
      <div class="card">
        <header class="auth-header">
          <h1 class="auth-title"><span class="text-success">EVENT</span><span class="text-primary">Online</span></h1>
        </header>
        <div class="auth-content">
          <p class="text-center">ВХОД В СИСТЕМУ</p>

          <form id="login-form" @submit.prevent="submitHandler">
            <div class="form-group" :class="{'has-error': $v.login.$dirty && !$v.login.required}">
              <label for="login">Логин</label>
              <input
                type="text"
                class="form-control boxed"
                id="login"
                v-model.trim="login">
              <span
                id="login-error"
                class="has-error"
                v-if="$v.login.$dirty && !$v.login.required"
              >Это поле обязательно к заполнению</span>
            </div>
            <div class="form-group" :class="{'has-error': ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
              <label for="password">Пароль</label>
              <input
                type="password"
                class="form-control boxed"
                id="password"
                v-model.trim="password">
              <span
                id="password-error"
                class="has-error"
                v-if="$v.password.$dirty && !$v.password.required"
              >Введите пароль</span>
              <span
                id="password-error"
                class="has-error"
                v-else-if="$v.password.$dirty && !$v.password.minLength"
              >Пароль должен быть больше {{ $v.password.$params.minLength.min }} символов. Сейчас он {{ password.length }}</span>
            </div>
            <div class="form-group">
              <label for="remember">
                <input
                  class="checkbox"
                  id="remember"
                  type="checkbox"
                  v-model="remember">
                <span>Запомнить меня</span>
              </label>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-block btn-primary">Вход</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data: () => ({
    login: '',
    password: '',
    remember: false
  }),
  validations: {
    login: { required },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      var formData = {
        login: this.login,
        password: this.password,
        remember: this.remember
      }
      formData = this.toFormData(formData)
      this.$store.dispatch('login', formData).then(() => {
        this.$router.push('/dashboard')
      })
    }
  }
}
</script>
