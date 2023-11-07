import express from 'express';

const app = express();
const PORT = 5000

app.get('/',(req,res,next)=>{
  res.send('Express response')
})

app.listen(PORT, ()=>{
  console.log(`App is listening on port ${PORT}`)
})