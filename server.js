require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const app = express()
const port = 3000

const items = []

// mongoose.connect(process.env.MONGO_URI)
// mongoose.connection.once('open', ()=>{
//     console.log('connected to MongoDB')
// })
// not using a database

app.use(express.json())
// using json packages middleware
//app.use(require('cors')()) // needed to put the api on the interner

// app.set('view engine','jsx')
// app.engine('jsx',jsxEngine())
// not using a view engine

// show all items
app.get('/items', (req, res) => {
  res.json(items)
})

// add items
app.post('/items', (req, res) => {
  for (const key in req.body) {
    if (req.body.price === undefined || req.body.item === undefined) {
      res.status(404).json({ message: 'Please add an item and a price' })
    } else {
      items.push(req.body)
      res.status(201).json(req.body)
    }
  }
})
// return specific item
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) { return res.status(404).json({ message: 'Item not found' }) }
  res.json(item)
})

// update an item
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id))
  if (!item) { return res.status(404).json({ message: 'Item not found' }) }
  Object.assign(item, req.body);
  res.json(item);
})

// delete an item
app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id === parseInt(req.params.id))
  if (index === -1) { return res.status(404).json({ message: 'Item not found' }) }
  items.splice(index, 1)
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`YOO Im listening on ${port} son`)
})
