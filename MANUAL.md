# reactjs-gulp-browserify
Building React Applications with Gulp and Browserify

## Install
### First of all
1. Make a new project with a folder structure that looks like **project**.
<br>project
<br>----src
<br>--------_index.html_
<br>--------js
<br>------------_App.js_
<br>In this structure, we'll use src folder for development purpose, while the `dist` (as in "distribution") folder is used to contain optimized files for production site. Under the `dist`, we also create a folder named build for placing *.css.min and *.js.min.
<br>
<br>Since `src` is used for development purpose, all our code will be placed in `src`.
<br>
+ **Development**
    <br>Transform our JSX into JS and save the output into a `dist/src` folder.
    Copy our _`index.html`_ from our `src` folder into the `dist` folder
    Watch changes to any JS or HTML file then run the previous two processes again.

+ **Production**
    <br>Take all the JS files, concat them all together, minify the result, then output the result to one file named _`build.js`_ to the `build` folder inside the `dist` folder
    Replace our `<script>` tags in our _`index.html`_ page with one `<script>` which references our new minified _`build.js`_ file. Same as js files, we will minimize the css files and output it to one file named _`style.min.css`_ to the `build` folder inside the `dist` folder, replace too.
### Npm
TODO:
<br>Initial npm, execute this command at your project root folder, you will get a file, _**package.json**_<br>
```sh
$ npm init
```

You will get **_projcet.json_** under your project root.
### Gulp
1. install gulp via npm <br>
```sh
$ npm install --global gulp
$ npm install --save-dev gulp-uglify
$ npm install --save-dev gulp-react
$ npm install --save-dev gulp-html-replace
$ npm install --save-dev gulp-cssmin
```
<br>reference: 1 2 3 4


## reference
1. [building-react-applications-with-gulp-and-browserify](http://tylermcginnis.com/reactjs-tutorial-pt-2-building-react-applications-with-gulp-and-browserify/)
1. [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
1. [Gulpjs](http://gulpjs.com/)
1. [gulp-cssmin](https://www.npmjs.com/package/gulp-cssmin)
1. [Beginners of gulp](https://css-tricks.com/gulp-for-beginners/)
1. [gulp-clean-css](https://github.com/scniro/gulp-clean-css)
1. [gulp-concat-css](https://www.npmjs.com/package/gulp-concat-css)
1. [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

<TODO>
to be contiuned
</TODO>