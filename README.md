# recipe

[![Build Status](https://travis-ci.org/jeremenichelli/recipe.svg)](https://travis-ci.org/jeremenichelli/recipe)

Boilerplate for JavaScript repositories with Gulp tasks ready to use to check syntax, minify and create distribution versions.

Feel free to dig into it, propose changes or fork and use it. Take in account that this covers the most primitive needs for a normal JavaScript project so there's a chance you might need to add new stuff to adapt it to your needs.

## Use

Copy the content of this repository into your project folder.

Install **Gulp** on your machine in case you haven't used it before.

```
npm install gulp -g
```

Install dependencies

```
npm install
```


### Check code styles and possible errors

```
gulp lint
```

### Run tests

```
gulp test
```

### Build and generate distribution files

```
gulp build
```
