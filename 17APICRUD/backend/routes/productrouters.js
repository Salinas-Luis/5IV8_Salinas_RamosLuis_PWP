import { Router } from "express";
import * as productController from '../controllers/productcontrollers';

const router = router();

router.post('/products', productController.create);
export default router;