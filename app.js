
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5050

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5050')
})

app.get('/health', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

