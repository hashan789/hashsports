import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function FeaturedProductsShow({ products }) {

    const [ itemsPerPage, setItemsPerPage ] = useState(5);

    useEffect(() => {

        const handleResize = () => {
            if (window.innerWidth < 640) setItemsPerPage(1);
            else if (window.innerWidth < 1024) setItemsPerPage(2);
            else if (window.innerWidth < 1280) setItemsPerPage(3);
            else setItemsPerPage(4);
        };

            handleResize();
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);

    },[]);

    console.log(itemsPerPage);


  return (
    <div className="py-12">
    <div className="container mx-auto px-4">
        <div className="">
            <div className="w-full">
            <div
                className="flex justify-center"
            >
                {products.map((product,index) => (
                <div key={index} size={100} className="p-4 text-center">
                    <ProductCard product={product} />
                </div>
                ))}
            </div>
            </div>
        </div>
    
    </div>
    </div>
  )
}
