import { useEffect, useState } from "react";
import axios from "../lib/axios"
import AnalyticsCard from "./AnalyticsCard"
import AnalyticsChart from "./AnalyticsChart"
import { CircleDollarSign, Package, ShoppingCart, Users } from "lucide-react";

export default function AnalyticsTab() {

  
  const [ analyticsData, setAnalyticsData ] = useState({
    users: 0,
    products: 0,
    totalSales: 0,
    totalRevenue: 0
  });
  
  const sections = [
    {
      title : "Customers",
      value: analyticsData.users.toLocaleString(),
      color: 'text-orange-500',
      icon: Users
    },
    {
      title : "Total Products",
      value: analyticsData.products.toLocaleString(),
      color: 'text-blue-500',
      icon: Package
    },
    {
      title : "Total Sales",
      value: analyticsData.totalSales.toLocaleString(),
      color: 'text-green-500',
      icon: ShoppingCart
    },
    {
      title : "Total Revenue",
      value: `$ ${analyticsData.totalRevenue.toLocaleString()}`,
      color: 'text-yellow-500',
      icon: CircleDollarSign
    }
  ]

  const [ isLoading, setIsLoading ] = useState(true);
  const [ dailySalesData, setDailySalesData ] = useState([]);


  useEffect(() => {

    const fetchAnalyticsData = async () => {

      try {
        
        const response = await axios.post("/analytics");
        setAnalyticsData(response.data.analyticsData);
        setDailySalesData(response.data.dailySalesData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      } finally{
        setIsLoading(false);
      }
      
    }
    
    fetchAnalyticsData();
    
  },[])
  
  if (isLoading) return (
    <div className="">Loading....</div>
  )
  console.log(dailySalesData)

  return (
    <div className="container mx-auto">
      <div className="flex justify-around items-center">
        {
          sections.map((section,index) => (
            <AnalyticsCard key={index} section={section}/>
          ))
        }
      </div>
      <div className="w-full mt-8">
        <AnalyticsChart dailySalesData={dailySalesData} />
      </div>
    </div>
  )
}
