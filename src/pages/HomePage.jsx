import Cover from "../components/Cover";
import ProductsShow from "../components/ProductsShow";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Cover/>
      <ProductsShow/>
    </motion.div>
  )
}
