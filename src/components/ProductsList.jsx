import { useProductState } from "../stores/useProductState";
import { Trash, Star } from 'lucide-react';
import UpdateProductForm from "./UpdateProductForm";
import { useState } from "react";

export default function ProductsList() {

  const columns = ["Product", "Price", "Category","Stock", "Featured", "Actions"];

  const { deleteProduct, toggleFeaturedProducts , products } = useProductState();

  const [ update, setUpdate ] = useState({
    show: "hide",
    id: ""
  });

  console.log(update)

  return (
    <div>
      <table className="divide-y min-w-full text-black">
        <thead className="">
          <tr>
            {
              columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {column}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            products?.map((product, index) => (
              <tr key={index} className="text-black">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={product.image}
                        alt={product.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{product.category}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{product.stock}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className={`text-indigo-600  ${product.isFeatured ? "text-yellow-500" : ""}`}
                    onClick={() => toggleFeaturedProducts(product._id)}
                  >
                    <Star width={20} />
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="text-red-600"
                    onClick={() => deleteProduct(product._id)}
                  >
                    <Trash width={20}/>
                  </button>
                  <button
                    className="ml-3 px-4 py-2 text-sm text-white bg-blue-700 rounded-2xl hover:bg-blue-800 transition-all duration-300"
                    onClick={() => setUpdate({...update, show: "open", id: product._id })}
                  >
                    Edit
                  </button>
                </td>
                {
                  update.show === "open" &&  (
                      <div className={ `absolute left-1/4 top-20 z-20 border rounded-lg ${update.show === "hide" ? `bg-none` : `bg-white block`}`}>
                          <UpdateProductForm id={update.id} />
                          <div className="">
                            <button onClick={() => setUpdate({...update, show: "hide", id: ""})} className="absolute top-3 right-3 z-30 text-xs bg-red-700 text-white px-2 py-1">close</button>
                          </div>
                      </div>
                   )
                }
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}
