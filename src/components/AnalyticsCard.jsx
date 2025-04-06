import { motion } from "framer-motion";

export default function AnalyticsCard({ section }) {
  return (
    <motion.div
        className="text-black bg-white border space-y-4 py-2 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center justify-center">
            <div className="z-10 flex justify-center items-center gap-8">
                <div className="flex justify-center items-center gap-2">
                    {  
                    <section.icon size={20} />                
                    }
                    <p className={`text-sm font-bold ${section.color}`}>{ section.title }</p>
                </div>
                <h3 className={`text-sm font-semibold rounded-full px-4 py-2 bg-black flex items-center justify-center text-center ${section.color}`}>{ section.value }</h3>
            </div>
        </div>
        <div className="" />
        <div className="ml-5">
        </div>
    </motion.div>
  )
}
