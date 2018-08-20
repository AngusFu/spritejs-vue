module.exports = {
  plugins: '.pholio/plugins',
  layouts: '.pholio/layouts',
  assetPath: '.pholio/static',
  pages: ['./stories/*.md'],
  output: 'docs',
  // fallback page, usually a 404 page or error page
  errorRedirect: '/error',

  // for vue-router
  routerMode: 'hash',

  md2vue: {
    gistInjection: ''
  },

  // external links
  // support CSS and JavaScript urls
  externals: [
    'https://lib.baomitu.com/highlight.js/9.12.0/styles/github.min.css',
    'https://unpkg.com/spritejs@2.7.5/dist/spritejs.js'
  ]
}
