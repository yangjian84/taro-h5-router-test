module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    router: {
      mode: 'hash',
      customRoutes: {
        '/pages/detail/detail': '/pages/detail/index'
      }
      // basename: '/enterprise/index'
    }
  }
}
