import { Link } from "react-router-dom"


export default function ProductsShow() {

    const categories = [
        {
            name: "Shoes",
            className: 'bg-[url("/images/products/1.png")] w-full h-56 bg-cover',
            href: "shoes"
        },
        {
            name: "T-shirts",
            className: 'bg-[url("/images/products/12.png")] w-full h-56 bg-cover',
            href: "tshirts"
        },
        {
            name: "Trousers",
            className: 'bg-[url("/images/products/20.png")] w-full h-56 bg-cover',
            href: "trousers"
        }
    ]

  return (
    <div className='flex justify-center items-center p-10 mb-10'>
        <div className="top-12 relative">
            <h1 className="text-4xl text-center font-semibold">Explore New Categories</h1>
            <div className="mt-12 flex justify-center items-center gap-6">
                {
                    categories.map((category, index) => (
                        <div key={index} className="w-60 text-center">
                            <div className={category.className}></div>
                            <h3 className="text-xl font-semibold mt-5 mb-5">{ category.name }</h3>
                            <Link to={`category/${category.href}`} className="mb-3 text-xs border border-blue-600 rounded-xl text-center p-2 text-blue-600">See more</Link>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}
