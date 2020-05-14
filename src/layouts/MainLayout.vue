<template>
  <div class="main-wrapper">
    <div class="app" id="app">
      <Header />
      <Sidebar />
      <router-view />
      <footer class="footer">
        <div class="footer-block buttons"></div>
        <div class="footer-block author">
          <ul class="small">
            <li>Тестовый Гастрит</li>
            <li>Красная поляна</li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from '@/components/app/Header'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  components: {
    Header, Sidebar
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.user).length) {
      await this.$store.dispatch('fetchUser')
    }
    document.body.classList.add('loaded')
  }
}
</script>
