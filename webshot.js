var webshot = require('webshot-client')('http://192.168.1.10:8080/')
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
webshot('http://192.168.1.10:8081/preview?index=2', 'output.png', options, (err) => {
  // done
  console.log('success')
  console.log(err)
})
