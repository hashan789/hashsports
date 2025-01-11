import Coupon from "../models/coupon.model";

export const getCoupon = async (req, res) => {

    try {
        const coupon = await Coupon.find({}).sort({userId: req.user._id, isActive: -1});
        res.json(coupon);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}

export const validateCoupon = async (req, res) => {

    try {
        const { code } = req.body;
        const coupon = await Coupon.findOne({ code: code, userId: req.user._id, isActive: true });

        if (!coupon) {
            return res.status(400).json({ message: "Invalid coupon" });
        }

        if(coupon.expirationDate < new Date()){
            return res.status(400).json({ message: "Coupon expired" });
        }

        res.json({
            message: "Coupon applied",
            discountPercentage: coupon.discountPercentage,
            code: coupon.code
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}