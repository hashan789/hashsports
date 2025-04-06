import { useCartState } from '../stores/useCartState';

export default function Orders() {

  const columns = ["Date", "Price", "quantity", "Amount ($)"];

  const { orders } = useCartState();

  console.log(orders);

  return (
    <div>
      <table className="divide-y divide-black text-black min-w-full">
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

    
          {
            orders?.map((order, key) => (
                <tbody key={key}>
                  {
                      order.products?.map((product, index) => ( 
                        <tr key={index} className="">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium">{order.createdAt}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">{product.price}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">{product.quantity}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm">{ product.price * product.quantity }</div>
                          </td>
                        </tr>
                      ))
                  }

                </tbody>
              
            ))
          }
            
        
      </table>

    </div>
  )
}
