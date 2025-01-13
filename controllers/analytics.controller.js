import Order from "../models/order.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";


export const getAnalytics = async (req, res) => {

    try {
        
        const analyticsData = await getAnalyticsData();

        const endDate = new Date();
        const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);

        const dailySalesData = await getDailySalesData(startDate, endDate);

        res.json(
            {
                analyticsData,
                dailySalesData
            }
        )

    } catch (error) {
        res.status(500).json({ message: "Error in analytics", error: error.message });
    }
}


export const getAnalyticsData = async () => {

    try {
        
        const totalUsers = await User.countDocuments();
        const totalProducts = await Product.countDocuments();

        const salesData = await Order.aggregate([
            {
                $group: {
                    _id: null,
                    totalSales: { $sum: 1 },
                    totalRevenue: { $sum: "$totalAmount" }
                }
            }
        ]);

        const { totalSales, totalRevenue } = salesData[0] || { totalSales: 0, totalRevenue: 0 };

        return {
            users: totalUsers,
            products: totalProducts,
            totalSales,
            totalRevenue
        }

    } catch (error) {
        res.status(500).json({ message: "Error in analytics data", error: error.message });
    }
}


const getDailySalesData = async (startDate, endDate) => {

    try {
        
        const dailySalesData = await Order.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    sales: { $sum: 1 },
                    revenue: { $sum: "$totalAmount" }
                }
            }
        ]);

        const dateArray = getDatesInRange(startDate, endDate);

        return dateArray.map(date => {
            const data = dailySalesData.find(sale => sale._id === date);
            return {
                date,
                sales: data ? data.sales : 0,
                revenue: data ? data.revenue : 0
            }
        });

    } catch (error) {
        throw error;
    }
}


function getDatesInRange(startDate, endDate) {
    const dates = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
}