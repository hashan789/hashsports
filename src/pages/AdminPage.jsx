import { PenBox, LucideShoppingCart , ChartNoAxesCombinedIcon, BookTextIcon } from "lucide-react";
import { useState , useEffect } from "react";
import CreateProductForm from "../components/CreateProductForm";
import AnalyticsTab from "../components/AnalyticsTab";
import ProductsList from "../components/ProductsList";
import { useProductState } from "../stores/useProductState";
import Orders from "../components/Orders";
import { useCartState } from "../stores/useCartState";
// import tabs from '../documents/tab.json'

export default function AdminPage() {

  const tabs = [
    {
        id: "analytics",
        label: "Analytics",
        icon: ChartNoAxesCombinedIcon
    },
    {
        id: "create",
        label: "Create Product",
        icon: PenBox
    },
    {
        id: "products",
        label: "Products",
        icon: LucideShoppingCart
    },
    {
      id: "orders",
      label: "Orders",
      icon: BookTextIcon
    }
]

  const { getAllProducts } = useProductState();
  const { getAllOrders } = useCartState();

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    getAllOrders();
  }, [getAllOrders]);

  const [activeTab, setActiveTab] = useState("analytics")

  return (
    <div className="mx-auto flex justify-center relative min-h-screen h-auto">
      <div className="w-2/12 min-h-screen h-auto bg-blue-500">
        <div className="w-full h-auto relative top-20 font-semibold">
          {
            tabs.map((tab) => (
              <div key={tab.id} className="w-full h-20">
                <div className="flex justify-center items-center relative top-1/3 cursor-pointer" onClick={() => setActiveTab(tab.id)}>
                  <span className={ activeTab === tab.id ? "text-white" : "text-blue-950"}>{tab.label}</span>
                  <span className="ml-3"><tab.icon className={ activeTab === tab.id ? "text-white" : "text-blue-950"} width={20} /></span>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div className="w-10/12 min-h-screen h-full grid pt-28 px-5">
        
        { activeTab === 'analytics' && <AnalyticsTab /> }
        { activeTab === 'create' && <CreateProductForm /> }
        { activeTab === 'products' && <ProductsList /> }
        { activeTab === 'orders' && <Orders /> }

      </div>
    </div>
  )
}
