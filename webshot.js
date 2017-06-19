var webshot = require('webshot-client')('http://10.10.10.24:8080/')
webshot('http://10.10.10.24:8081/preview?index=0', 'output.png', (err) => {
  // done
  console.log('success')
  console.log(err)
})
