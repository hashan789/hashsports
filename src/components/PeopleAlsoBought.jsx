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
      <h3 className="text-2xl font-semibold">People Also Bought</h3>
      <div className="mt-6 flex items-center gap-4">
        {
          recommendations.map((product,index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>
    </div>
  )
}
