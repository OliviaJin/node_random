import express from 'express';
import uniqueString from 'unique-string';
const app = express()

// Set the port the application will be running on
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  const randamUniqueString = (uniqueString)

  res.send(uniqueString)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});