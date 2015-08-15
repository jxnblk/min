// Naive data store

import { assign } from 'lodash'

function Data(opts, init) {

  let state = init || {}
  let listeners = []

  this.listen = function(listener) {
    listeners.push(listener)
  }

  this.unlisten = function(listener) {
    let index = listeners.indexOf(listener)
    listeners.splice(index, 1)
  }

  this.setState = function (obj) {
    state = assign(state, obj)
    listeners.forEach(listener => listener())
  }

  this.getState = function () {
    return state
  }

  return this
}

let baseurl = process.env.BASE_URL || ''

let init = {}
if (typeof window !== 'undefined') {
  init = window.__INIT || {}
}

const data = new Data({}, assign({
  baseurl
}, init))

export default data

