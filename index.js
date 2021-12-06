const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasonpage/:id', (request, response) => {
  const show = showdata.find((show) => { return show.id === parseInt(request.params.id) })

  return response.render('seasonpage', { show })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1338, () => {
  console.log('listening on 1338')
})
