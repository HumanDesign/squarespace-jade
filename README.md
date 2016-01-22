# Squarespace-Jade-Stylus

This plugin allows you to create templates in Jade when developing templates on the Squarespace Developers Platform.

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

To run the jade compile script on file change, open a new terminal window and enter the following.

```sh
nodemon -e jade,js
```
If you are using this in conjunction with squarespace-jade use the following command instead.

```sh
nodemon -e jade,stylus,js
```

Nodemon watches for any changes to your template files and will automatically re-compile to the correct directory.