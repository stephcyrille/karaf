const mix = require('laravel-mix');

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

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');
// mix.webpackConfig({
// 	entry: {
// 		front_office: path.join(__dirname, "resources/js/app.js"),
// 	},
// 	output:{
// 		path: path.join(__dirname, "public/js"),
// 		filename: "[name]-[hash].js"
// 	},
//   module: {
//     rules: [
//     	{
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/
//       },
//       {
//         test: /\.css$/,
//         loader: ["style-loader", "css-loader"],
//       },
//       {
//       	test: /\.(scss|sass)$/,
//       	use: [
//           {
//             loader: "style-loader"
//           },
//           {
//             loader: "css-loader",
//             options: {
//               importLoaders: 1,
//               modules: true,
//               sourceMap: process.env.NODE_ENV !== "production",
//               // localIdentName: "[path]___[name]__[local]___[hash:base64:5]"
//               localIdentName: "[local]___[hash:base64:5]"
//             }
//           },
//           {
//             loader: "sass-loader",
//             options: {
//               sourceMap: process.env.NODE_ENV !== "production"
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|svg)$/i,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               limit: 8192
//             }
//           }
//         ]
//       }
//     ],
//   },
// });
