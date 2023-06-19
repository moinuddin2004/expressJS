
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
<html lang="en">
<head>

    <style>

    body{

      background-image: linear-gradient(45deg, rgb(100, 93, 240), rgb(228, 107, 237));
      min-height: 100vh;
    }

        .grad{

            background-image: linear-gradient(45deg, rgb(100, 93, 240), rgb(228, 107, 237));
            color: antiquewhite;


        }

    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cli</title>
    <link rel="stylesheet" href="stylet.css">
</head>
<body>
    <div class="w-full h-screen bg-black-100 grad from-purple-100 to-pink-100 via-cyan-100 p-10">
        <div class="text-xl text-clifford bg-indigo-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla est animi reprehenderit recusandae numquam fugit itaque, molestias commodi facilis, esse porro harum odit assumenda!
        </div>
    </div>
</body>
</html>
  
  `)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})