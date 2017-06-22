var webshot = require('webshot-client')('http://10.10.10.24:8080/')
const options = {
  renderDelay: 5000,
  screenSize: {
    width: 1920, height: 1080
  }, 
  shotSize: {
    width: 'all', 
    height: 'all'
  }
}
webshot('http://10.10.10.24:8081/preview?index=0', 'output.png', options, (err) => {
  // done
  console.log('success')
  console.log(err)
})
