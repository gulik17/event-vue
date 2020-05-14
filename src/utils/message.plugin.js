export default {
  install (Vue, options) {
    Vue.prototype.$message = function (html) {
      this.$bvToast.toast(html, {
        title: 'Информация',
        autoHideDelay: 5000,
        variant: 'info'
      })
    }

    Vue.prototype.$error = function (html) {
      this.$bvToast.toast(html, {
        title: 'Ошибка',
        autoHideDelay: 5000,
        variant: 'danger'
      })
    }
  }
}
