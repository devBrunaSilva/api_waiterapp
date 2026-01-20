import path from 'node:path';
import { Router } from "express";
import multer from 'multer';
import { createCategories } from "./app/useCases/categories/createCategory.js";
import { listCategories } from "./app/useCases/categories/listCategory.js";
import { createProduct } from "./app/useCases/products/createProduct.js";
import { listProducts } from "./app/useCases/products/listProducts.js";
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory.js';
import { listOrders } from './app/useCases/orders/listOrders.js';
import { createOrder } from './app/useCases/orders/createOrder.js';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus.js';
import { cancelOrder } from './app/useCases/orders/cancelOrder.js';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(process.cwd(), 'uploads'))
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

//listar categories
router.get("/categories", listCategories);

//create category
router.post("/categories", createCategories);

//list products
router.get("/products", listProducts);

//create product
router.post("/products", upload.single('image'), createProduct);

//get products by category
router.get("/categories/:categoryId/products", listProductsByCategory);

//list orders
router.get("/orders", listOrders);

//create order
router.post("/orders", createOrder);

//change order status
router.patch("/orders/:orderId", changeOrderStatus);

//delete/cancel order
router.delete("/orders/:orderId", cancelOrder);
