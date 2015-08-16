
import { assign } from 'lodash'

export function Store(init) {
  let state = init || {}
  let listeners = []
  this.getState = () => state
  this.setState = (obj) => {
    state = assign(state, obj)
    listeners.forEach(listener => listener())
  }
  this.listen = listener => listeners.push(listener)
  this.unlisten = (listener) => {
    const index = listeners.indexOf(listener)
    listeners.splice(index, 1)
  }
  return this
}

export const store = new Store({
  baseurl: ''
})

if (process.env.BASE_URL) {
  store.setState({ baseurl: process.env.BASE_URL })
}

