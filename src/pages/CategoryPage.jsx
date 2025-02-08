import { useEffect } from "react";
import { useProductState } from "../stores/useProductState";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";

export default function CategoryPage() {

    const { fetchProductsByCategory, products } = useProductState();

    const { category } = useParams();

    useEffect(() => {
        fetchProductsByCategory(category);
    },[fetchProductsByCategory, category]);

  return (
    <div className="container min-h-screen relative top-20">
      <div className="w-full">
          <motion.div
            className="text-center text-3xl font-semibold my-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              { category.charAt(0).toUpperCase() + category.slice(1) }
          </motion.div>

          <motion.div
            className="text-center grid grid-cols-1 sm:grid-cols-3 gap-2 justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {
                products?.length === 0 && (
                  <h2 className="text-red-600 font-semibold text-lg">No Product Found</h2>
                )
            }

            {
              products?.map((product,index) => (
                <ProductCard key={index} product={product}  />
              ))
            }

          </motion.div>
      </div>
    </div>
  )
}
