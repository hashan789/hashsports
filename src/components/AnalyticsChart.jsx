import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts" 
import { motion } from "framer-motion"

export default function AnalyticsChart({ dailySalesData }) {
  return (
    <motion.div
        className="h-50 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <ResponsiveContainer width='100%' height={400}>
            <LineChart data={dailySalesData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' stroke="white"/>
                <YAxis yAxisId='left' stroke="#ffffff"/>
                <YAxis yAxisId='right' orientation="right" stroke="#ffffff"/>
                <Tooltip />
                <Legend />
                <Line 
                    yAxisId='left'
                    type='monotone'
                    dataKey="sales"
                    stroke="yellow"
                    activeDot={{ r: 8 }}
                    name="Sales"
                />
                <Line 
                    yAxisId='right'
                    type='monotone'
                    dataKey="revenue"
                    stroke="orange"
                    activeDot={{ r: 8 }}
                    name="Revenue"
                />
            </LineChart>
        </ResponsiveContainer>
    </motion.div>
  )
}
