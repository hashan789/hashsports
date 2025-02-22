import express from "express";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { checkoutSuccess, createCheckoutSession, getAllOrders } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession)

router.post("/checkout-session", protectRoute, checkoutSuccess)

router.get("/", protectRoute, adminRoute, getAllOrders)

export default router;
