# Squarespace-Jade-Stylus

This plugin allows you to write Jade and Stylus when developing templates on the Squarespace Developers Platform. It automatically compiles and runs the css through autoprefixer.

You will still need to include your compiled ```.css``` stylesheets and ```.region``` files in ```templates.conf```.

## Directions

```sh
git clone https://github.com/HumanDesign/squarespace-jade.git
cd squarespace-jade
npm install
npm install -g nodemon
..
```

To run the jade compile script open a new terminal window and enter the following.

```sh
nodemon -e jade,styl,js
```

Nodemon watches for any changes to your template files and will automatically re-compile to the correct directory.