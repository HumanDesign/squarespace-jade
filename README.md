# Squarespace-Jade-Stylus

This plugin allows you to write Jade and Stylus when developing templates on the Squarespace Developers Platform. It automatically compiles and runs the css through autoprefixer.

You will still need to include your compiled ```.region``` files in ```templates.conf```.

## Directions

```sh
npm install sqs-jade
npm install -g nodemon
```

In your index.js file require and invoke the compile script.

```js
var compileJade = require('squarespace-jade');

compileJade();
```

To run the jade compile script open a new terminal window and enter the following.

```sh
nodemon -e jade,js
```
If you are using this in conjunction with squarespace-jade use the following command instead.

```sh
nodemon -e jade,stylus,js
```

Nodemon watches for any changes to your template files and will automatically re-compile to the correct directory.