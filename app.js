express = require('express')

const app = express()

app.use(express.static('public'))

const port=4000

app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );