'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
import 'bootstrap'
require('babel-polyfill')

require('./assets/scripts/index.js')

// styles
require('./assets/styles/index.scss')
