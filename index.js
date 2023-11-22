const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send("Write an instruction for a drawing here. For example: draw a line across the page, draw 10 circles of different sizes, draw a duck.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const getRandomCat = require('random-cat-img');

(async () => {
    const data = await getRandomCat();
    console.log(data.message);
})();

getRandomCat().then(data => {
    console.log(data.message);
    // Handle the object here, if it's part of the response or logic
    const responseObject = {
        "success": true,
        "status": 200,
        "info": { "category": "animals", "endpoint": "cat" },
        "message": "https://cdn.sefinek.net/images/animals/cat/neva-masquerade-cats-1375033-min.jpg"
    };
    // Do something with responseObject
});
