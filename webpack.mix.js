const mix = require('laravel-mix');
const minifier = require('minifier');

mix.webpackConfig({
   devtool: 'source-map'
}).sourceMaps()

// Docs / Builder components js
// mix.js('builder/js/builder.js', 'builder/index.js')

// Compiles whole framework
// mix.js('src/js/main.js', 'dist/js/epic-ui.js')
// mix.sass('src/scss/main.scss', 'dist/css/epic-ui.css')

mix.js('src/js/main.js', 'docs/public/javascripts/framework.js')
mix.sass('src/scss/main.scss', 'docs/public/stylesheets/framework.css')


// Framework sections
// mix.sass('src/scss/layout/_all.scss', 'dist/css/layout.css')
// mix.sass('src/scss/grid/_all.scss', 'dist/css/grid.css')
// mix.sass('src/scss/form/_all.scss', 'dist/css/form.css')
// mix.sass('src/scss/elements/_all.scss', 'dist/css/elements.css')
// mix.sass('src/scss/components/_all.scss', 'dist/css/components.css')
// mix.sass('src/scss/base/_all.scss', 'dist/css/base.css')



mix.then(() => {
   minifier.minify('dist/css/epic-ui.css');
})
