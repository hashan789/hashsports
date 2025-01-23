import { PenBox, LucideShoppingCart , ChartNoAxesCombinedIcon } from "lucide-react";

export default function AdminPage() {
  return (
    <div className="mx-auto flex justify-center relative">
      <div className="w-2/12 h-screen bg-blue-500">
        <div className="w-full bg-white h-auto relative top-20 font-semibold">
          <div className="w-full bg-purple-600 h-20">
            <div className="flex justify-center items-center relative top-1/3 cursor-pointer">
              <span className="text-white">Create Product</span>
              <span className="ml-3"><PenBox className="text-white" width={20} /></span>
            </div>
          </div>
          <div className="w-full bg-purple-700 h-20">
            <div className="flex justify-center items-center relative top-1/3 cursor-pointer">
              <span className="text-white">Products</span>
              <span className="ml-3"><LucideShoppingCart className="text-white" width={20} /></span>
            </div>
          </div>
          <div className="w-full bg-purple-800 h-20">
          <div className="flex justify-center items-center relative top-1/3 cursor-pointer">
              <span className="text-white">Analytics</span>
              <span className="ml-3"><ChartNoAxesCombinedIcon className="text-white" width={20} /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 h-screen bg-slate-600 grid p-5">
        <div className="w-full h-24 bg-blue-700 relative top-1/4 ">
          {/* <div className="w-10/12 h-full bg-blue-200"></div> */}
        </div>
        <div className="w-full h-52 bg-blue-300">
          {/* <div className="w-10/12 h-full bg-blue-200"></div> */}
        </div>
      </div>
    </div>
  )
}
