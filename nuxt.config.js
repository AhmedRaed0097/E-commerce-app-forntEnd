export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'e-commerce-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // serverMiddleware:[
  // {path:'/api',handler:'~/api/index'}
  // ],
  // server: {
  //   port: 4000,
  // },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/scss/global.scss',

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxtjs-mdi-font'
    // '@nuxtjs/auth',

  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios



  axios: {
    baseURL: 'http://localhost:8000/api/v1/',
    proxy: false,
    credentials: false
  },

   auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      // home: '/'
    },
    strategies: {
      local: {
        token: {
          property: 'access_token',
          // required: true,
          // type: 'Bearer'
        },
        // provider: 'laravel/passport',
        endpoints: {
          login:{
            url:'login-api',
            method: 'post',
            propertyName: 'access_token'


          },
          logout:{
            url:'logout',
            method: 'post',
          },
          // userInfo: '/api/v1/get-users'
          user: {
            url: 'get-user',
            method: 'get',
            propertyName: ''


          },
        },

        url: 'http://localhost:8000/',
        clientId: '1',
        clientSecret: 'vsLa6SCa5oVAp06uyDD9tTeBwIrNcaXHV3kQNKoX',
        tokenType:'bearer'
      },
    },
    rewriteRedirects: true,
  },
  // router : {
  //   middleware: ['auth'],
  // },

    build: {
      transpile: [/^element-s/],
    }


  }
