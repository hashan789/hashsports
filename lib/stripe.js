import Stripe from "stripe"
import dotenv from "dotenv"

dotenv.config();

export const stripe = new Stripe(procees.env.STRIPE_SECRET_KEY);

