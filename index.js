const express = require('express'),
  app = express(),
  port = process.env.PORT || 3004,
  path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => console.log(`Server is running at port ${port}`))
