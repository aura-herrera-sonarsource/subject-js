const express = require('express')
const app = express()
const port = 30002

function say(a, b) {
  print(a + " " + b);
}

say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");
say("hello", "world", "!");


app.get('/', (req, res) => {
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
