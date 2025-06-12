import FeaturedProducts from "../components/FeaturedProducts";
import ProductsShow from "../components/ProductsShow";
import BrandsShow from "../components/BrandsShow";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import SpecialOffer from "../components/SpecialOffer";
import Cover1 from "../components/Cover1";

export default function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Cover1/>
      <ProductsShow/>
      <SpecialOffer />
      <FeaturedProducts />
      <BrandsShow />
      <Footer />
    </motion.div>
  )
}
