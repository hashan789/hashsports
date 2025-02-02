import { motion } from "framer-motion";

export default function AnalyticsCard({ section }) {
  return (
    <motion.div
        className="text-white flex items-center justify-center border space-y-4 p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center justify-center">
            <div className="z-10">
                <p className="text-lg font-bold">{ section.title }</p>
                <h3 className="text-2xl font-semibold rounded-full bg-black w-14 h-14 flex items-center justify-center text-center">{ section.value }</h3>
            </div>
        </div>
        <div className="" />
        <div className="ml-5">
            {  
               <section.icon size={40} />                
            }
        </div>
    </motion.div>
  )
}
