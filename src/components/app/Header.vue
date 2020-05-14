<template>
  <header class="header">
    <div class="header-block header-block-collapse d-lg-none">
      <button class="collapse-btn" id="sidebar-collapse-btn">
        <i class="fa fa-bars"></i>
      </button>
    </div>

    <div class="header-block header-block-collapse">
      <a class="eventcode" href="javascript:void(0);">
        Код
        <strong>68e1c</strong>
      </a>
      <strong class="text-warning">&nbsp;&nbsp;Завершено</strong>
    </div>

    <div class="header-block header-block-nav">
      <ul class="nav-profile">
        <b-nav-item-dropdown
          class="profile"
        >
        <template v-slot:button-content>
          <i class="fa fa-user icon"></i> <span class="name">{{ name }}</span>
        </template>
        <b-dropdown-item class="profile-dropdown-menu" @click.prevent="logout()"><i class="fa fa-power-off icon"></i>Выход</b-dropdown-item>
        </b-nav-item-dropdown>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('logout').then(() => {
        this.$router.push('/login')
      })
    }
  },
  computed: {
    name () {
      console.log(this.$store.getters.user)
      return this.$store.getters.user.username
    }
  }
}
</script>
