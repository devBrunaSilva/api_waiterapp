import {Router} from 'express';

export const router = Router();

//listar categories
router.get('/categories', (req, res) => {
  res.send('Listar categorias')
})

//create category
router.post('/categories', (req, res) => {
  res.send('Criar categorias')
})

//list products
router.get('/products', (req, res) => {
  res.send('Listar produtos')
})

//create product
router.post('/products', (req, res) => {
  res.send('Criar produtos')
})

//get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Listar produtos por categoria')
})

//list orders
router.get('/orders', (req, res) => {
  res.send('Listar pedidos')
})

//create order
router.post('/orders', (req, res) => {
  res.send('Criar pedidos')
})

//change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Modificar status dos pedidos')
})

//delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Cancelar pedidos')
})