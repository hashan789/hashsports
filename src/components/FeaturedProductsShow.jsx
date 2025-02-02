import { useEffect, useState } from "react"
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function FeaturedProductsShow({ products }) {

    const [ currentIndex, setCurrentIndex ] = useState(0);
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

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex + currentIndex);
        console.log(currentIndex)
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex - currentIndex);
        console.log(currentIndex)
    }

    const isStartDisabled = currentIndex === 0;
    const isEndDisabled = currentIndex >= ( products.length - itemsPerPage );


  return (
    <div className="py-12">
    <div className="container mx-auto px-4">
        <div className="">
            <div className="w-full overflow-hidden flex justify-center">
                <div className="flex gap-5 w-full transition-transform duration-300" style={{ 
                                transform: `translateX(-${(currentIndex * (100 / itemsPerPage))}%)`
                }}>
                    {
                        products?.map((product,index) => (
                            <div key={index} className="w-1/4 flex-shrink">
                                <ProductCard product={product} />
                            </div>
                        ))
                    }
                 </div>
            </div>
        </div>
        <button
            disabled={isStartDisabled}
            className={
                `absolute -left-4 bottom-1/2 -translate-y-1/4 p-2 rounded-full transition-colors duration-300 ${ isStartDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500' }`
            }
            onClick={prevSlide}
        >
            <ChevronLeft size={20} className="object-cover"/>
        </button>
        <button
            disabled={isEndDisabled}
            className={
                `absolute -right-4 bottom-1/2 -translate-y-1/4 p-2 rounded-full transition-colors duration-300 ${ isEndDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500' }`
            }
            onClick={nextSlide}
        >
            <ChevronRight size={20} className="object-cover"/>
        </button>
    </div>
    </div>
  )
}
