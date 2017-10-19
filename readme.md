# Static Template Using Webpack/BrowserSync/PostCSS

A static page template featuring webpack 3 (with babel), browser-sync, and PostCSS and/or stylus!

Getting started:
1. `git clone https://github.com/zackcreach/static-template-babel.git`
2. `npm i`
3. `npm start`

`npm start` will launch a server in your default browser. Change/add anything in ./assets and watch it update! The webpack config runs any js through babel (with babel-preset-env) and any css through postcss plugins (configurable in postcss.config.js). Browsersync server serves all files through ./public.