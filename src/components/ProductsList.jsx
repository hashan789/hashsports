import { useProductState } from "../stores/useProductState";
import { Trash, Star } from 'lucide-react';

export default function ProductsList() {

  const columns = ["Product", "Price", "Category", "Featured", "Actions"];

  const { deleteProduct, toggleFeaturedProducts , products } = useProductState();

  return (
    <div>
      <table className="divide-y divide-white min-w-full">
        <thead className="bg-gray-700">
          <tr>
            {
              columns.map((column, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
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
              <tr key={index} className="bg-gray-800">
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
                      <div className="text-sm font-medium text-white">{product.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">{product.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">{product.category}</div>
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
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
