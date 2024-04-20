const express = require('express')
const cors = require('cors');
const app = express()
const port = 5000
const mongoDB = require('./db')
const fileupload = require('express-fileupload')
app.use(cors());
mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(fileupload({
  useTempFiles:true
}))
app.use(express.json())
app.use('/api',require('./Router/Loanroute'));
app.use('/api',require('./Router/Loanroute'));
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/Loginuser'));
app.use('/api',require('./Router/Transaction'));
// Create a Complain model

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
