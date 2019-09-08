const mix = require('laravel-mix');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Change fonts output folder
mix.config.fileLoaderDirs.fonts = 'assets/fonts';

if ( mix.config.production ) {
    // production
    mix.webpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: 'resources/assets/images',
                to: 'assets/images',
            }]),
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                plugins: [
                    imageminMozjpeg({
                        quality: 60,
                    })
                ]
            })
        ],
        module: {
            rules: [
                { test: /\.scss$/, loader: 'import-glob-loader' },
            ]
        }
    });

    mix.js('resources/assets/js/app.js', 'public/assets/js')
        .js('resources/assets/js/app-admin.js', 'public/assets/js')
        .sass('resources/assets/sass/app.scss', 'public/assets/css')
        .sass('resources/assets/sass/app-admin.scss', 'public/assets/css');

} else {
    // development
    mix.webpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: 'resources/assets/images',
                to: 'assets/images',
            }])
        ],
        module: {
            rules: [
                { test: /\.scss$/, loader: 'import-glob-loader' },
            ]
        }
    });

    mix.js('resources/assets/js/app.js', 'public/assets/js').sourceMaps()
        .js('resources/assets/js/app-admin.js', 'public/assets/js').sourceMaps()
        .sass('resources/assets/sass/app.scss', 'public/assets/css').sourceMaps()
        .sass('resources/assets/sass/app-admin.scss', 'public/assets/css').sourceMaps()
        .browserSync({
            proxy: '127.0.0.1:8000'
        });
}
