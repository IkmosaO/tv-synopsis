const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showdata })
})

app.get('/seasonpage/:number', (request, response) => {
  // const clientData = request.params.number
  const showSeason = showdata.seasons.find((showSeason) => {
    return showSeason.number === Number(request.params.number)
  })
  // console.log(showSeason)

  return response.render('seasonpage', { showSeason, title: showdata.title })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1338, () => {
  console.log('listening on 1338')
})
