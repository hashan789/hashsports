import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"
import axios from "../lib/axios";
import toast from "react-hot-toast";


export default function PeopleAlsoBought() {

  const [ recommendations, setRecommendations ] = useState([]);

  useEffect(() => {

    const fetchRecommendations = async () => {
      try {
          const res = await axios.get("/product/recommendations");
          setRecommendations(res.data);
      } catch (error) {
          toast.error(error.response.data.message);
        }
    }

    
    fetchRecommendations();

  },[]);

  return (
    <div className="mt-8">
      <h3 className="text-2xl max-sm:text-center font-semibold">People Also Bought</h3>
      <div className="max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center">
        <div className="my-6 lg:flex lg:items-center max-sm:block gap-4">
          {
            recommendations.map((product,index) => (
              <ProductCard key={index} product={product} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
