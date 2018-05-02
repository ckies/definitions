#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const mkdirp = require('mkdirp')

const BASE_PATH = __dirname + '/../data'
const DIST_PATH = __dirname + '/../dist'

function file(name, content) {
  fs.writeFileSync(
    DIST_PATH + '/' + name + '.json',
    content
  )
}

function folder(name) {
  mkdirp.sync(
    DIST_PATH + '/' + name
  )
}

function files() {
  return fs.readdirSync(BASE_PATH)
}

function process(name) {
  const id = path.basename(name, '.yaml')
  const absolute_path = BASE_PATH + '/' + name

  try {
    const data = yaml.safeLoad(
      fs.readFileSync(absolute_path, 'utf8')
    )

    folder(id)
    file(id, JSON.stringify(data))

    data.cookies.forEach(
      cookie => file(id + '/' + cookie.name, JSON.stringify(cookie))
    )
  } catch (e) {
    throw new Error('Unable to handle file: ' + file_absolute)
  }
}

files().forEach(
  process
)