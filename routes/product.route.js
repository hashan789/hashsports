import express from "express";
import { createProduct, deleteProduct, getAllProducts, getFeaturedProducts, getProduct, getProductsByCategory, getRecommendedProducts, toggleFeaturedProduct } from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllProducts)

router.get("/recommendations", getRecommendedProducts)

router.get("/category/:category", getProductsByCategory)

router.get("/products/:id", getProduct)

router.post("/", protectRoute, adminRoute, createProduct)

router.delete("/:id", protectRoute, adminRoute, deleteProduct)

router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct)

router.get("/featured", getFeaturedProducts)

export default router;