const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install(Vue, instance) {
    if (this.installed) {
      return
    }
    this.installed = true

    if (!instance) {
      console.error(`you have to install axios`)
      return
    }

    Vue.axios = instance

    Object.defineProperties(Vue.prototype, {
      axios: {
        get: function get() {
          return instance
        }
      },
      $http: {
        get: function get() {
          return instance
        }
      }
    })
  }
}

export { VueAxios }
