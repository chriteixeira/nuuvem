# nuuvem

A price checker for nuuvem.com.br . Since nuuvem.com.br don't have a price API, this code will search for a game by it's name and return the matching results title, link and price information.

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat)](http://doge.mit-license.org)
[![Build Status](https://travis-ci.org/chriteixeira/nuuvem.svg?branch=master)](https://travis-ci.org/chriteixeira/nuuvem)

[![NPM](https://nodei.co/npm/nuuvem.png?downloads=true&downloadRank=true)](https://nodei.co/npm/winston/)

## Installation

Using npm:
```shell
$ npm i --save nuuvem
```

## Usage

```js
const nuuvem = require('nuuvem');


nuuvem.checkPrice('game-name').then((gameDataArray)=>{
  
})
```

If you want to return just the first result for 'game-name':

```js
const nuuvem = require('nuuvem');

nuuvem.checkPrice('game-name', true).then((gameDataArray)=>{
  
})
```

Each position of the result array with have an object containing the following attributes:

| Attr          | Type                |  Description    |
| ------------- | ------------------- | --------------- |
| title          | String                |  The game title.    |
| currency          | String                |  The currency string.    |
| price          | Float                |  The game price.    |
| link          | String                |  The link for the game in nuuvem.com.br    |

## License
MIT © [Christiano Teixeira]
