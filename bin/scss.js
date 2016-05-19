#!/usr/bin/env node
'use strict'
const fs = require('fs')
const path = require('path')

const postcss = require('postcss');
const precss = require('precss')
const postcssScss = require('postcss-scss')
const autoprefixer = require('autoprefixer')({ browsers: ['> 5%', 'ie 6-10', 'Firefox >= 20'],flexbox:true  })



var cp = require('child_process')
require('colors')

console.log('>>> [DEV]: Compiling...'.green)

var files = getFilesFromDir(path.join(__dirname, '../scss'), true)
var fileMTimeMap = {}
files.forEach(function (file) {
  fileMTimeMap[file] = fs.statSync(path.join(__dirname, '../scss', file)).mtime.getTime()
  checkChange(file)
})

var appIns = cp.fork(path.join(__dirname, '../app'))
console.log('>>> [DEV]: ♪ App Started'.green)

function checkChange (file) {
  var prevMTime = fileMTimeMap[file]
  var mTime = fs.statSync(path.join(__dirname, '../scss', file)).mtime.getTime()
  if (prevMTime !== mTime) {
    compileScss()
    appIns.kill('SIGTERM')
    appIns = cp.fork(path.join(__dirname, '../app'))
    console.log('>>> [DEV]: ♬ App Restarted...'.red)
    fileMTimeMap[file] = mTime
  }
  setTimeout(checkChange.bind(null, file), 200)
}

function isString (str) {
  return Object.prototype.toString.call(str) === '[object String]'
}

function getFilesFromDir (dir, prefix, filter) {
  dir = path.normalize(dir)
  if (!fs.existsSync(dir)) {
    return []
  }

  if (!isString(prefix)) {
    filter = prefix
    prefix = ''
  }

  if (filter === true) {
    filter = item => {
      return item[0] !== '.'
    }
  }
  prefix = prefix || ''
  var files = fs.readdirSync(dir)
  var result = []
  files.forEach(item => {
    var stat = fs.statSync(dir + path.sep + item)
    if (stat.isFile()) {
      if (!filter || filter(item)) {
        result.push(prefix + item)
      }
    } else if (stat.isDirectory()) {
      if (!filter || filter(item, true)) {
        var cFiles = getFilesFromDir(dir + path.sep + item, prefix + item + path.sep, filter)
        result = result.concat(cFiles)
      }
    }
  })
  return result
}

process.on('SIGINT', function (e) {
  appIns.kill('SIGTERM')
  console.log('>>> [DEV]: ♫ App Quit'.red)
  process.exit(0)
})

function compileScss () {
    const inputCSS = fs.readFileSync(path.join(__dirname, '../scss/common.scss'),  'utf8');
    
    postcss([ autoprefixer,  precss])
        .process(inputCSS, { 
            parser: postcssScss, 
            map: { inline: false },
            from: '../scss/common.scss', 
            to: '../public/static/dist/css/common.css' })
        .then(function (result) {
            // result.css = result.css.replace(/\/\*[^\b\nb]+\*\/|\n|\t|\s+/g, '')
            // console.log('==== result: ', result)
            fs.writeFileSync(path.join(__dirname, '../public/static/dist/css/common.css'), result.css)
            if ( result.map ) fs.writeFileSync(path.join(__dirname, '../public/static/dist/css/common.css.map'), result.map);
        });
}

compileScss()
  
module.exports = compileScss