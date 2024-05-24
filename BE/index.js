import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors())
app.use(express.json());


const ProductSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number
  });

  const ProductModel = mongoose.model('Product', ProductSchema);


app.get('/product', async(req, res) => {
    const product= await ProductModel.find()
  res.send(product)
})
app.get('/product/:id', async(req, res) => {
    const {id}=req.params
    const product= await ProductModel.findById(id)
  res.send(product)
})
app.put('/product/:id', async(req, res) => {
    const {id}=req.params
    const obj=req.body
    const product= await ProductModel.findByIdAndUpdate(id,obj)
  res.send(product)
})
app.post('/product', async(req, res) => {
    const obj=req.body
    const product=new ProductModel(obj)
    await product.save()
  res.send(product)
})
app.delete('/product/:id', async(req, res) => {
    const {id}=req.params
    const product= await ProductModel.findByIdAndDelete(id)
  res.send(product)
})

mongoose.connect('mongodb+srv://bd82bns4p:bd82bns4p@nebi.hxhhfzi.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})