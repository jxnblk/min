
let baseurl = ''
if (process.env.BASE_URL) {
  console.log('data BASE_URL', process.env.BASE_URL)
  baseurl = process.env.BASE_URL
}

console.log('data baseurl', baseurl)

export default {
  baseurl
}

