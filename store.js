
import Store from './lib/Store'

const store = new Store({
  title: 'jxnblk/min',
  script: '/bundle.js',
  baseurl: process.env.BASE_URL ? process.env.BASE_URL : ''
})

export default store

