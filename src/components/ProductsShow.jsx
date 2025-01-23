

export default function ProductsShow() {
  return (
    <div className='flex justify-center items-center p-10 mb-10'>
        <div className="top-12 relative">
            <h1 className="text-4xl text-center font-semibold">Explore New Categories</h1>
            <div className="mt-12 flex justify-center items-center gap-6">
                <div className="w-60 text-center">
                    <div className='bg-[url("src/images/products/1.png")] w-full h-56 bg-cover'></div>
                    <h3 className="text-xl font-semibold mt-5 mb-5">Shoes</h3>
                    <button className="mb-3 text-xs border border-blue-600 rounded-xl text-center p-2 text-blue-600">See more</button>
                </div>
                <div className="w-60 text-center">
                    <div className='bg-[url("src/images/products/12.png")] w-full h-56 bg-cover'></div>
                    <h3 className="text-xl font-semibold mt-5 mb-5">T-shirts</h3>
                    <button className="mb-3 text-xs border border-blue-600 rounded-xl text-center p-2 text-blue-600">See more</button>
                </div>
                <div className="w-60 text-center">
                    <div className='bg-[url("src/images/products/20.png")] w-full h-56 bg-cover'></div>
                    <h3 className="text-xl font-semibold mt-5 mb-5">Trousers</h3>
                    <button className="mb-3 text-xs border border-blue-600 rounded-xl text-center p-2 text-blue-600">See more</button>
                </div>
                <div className="w-60 text-center">
                    <div className='bg-[url("src/images/products/16.png")] w-full h-56 bg-cover'></div>
                    <h3 className="text-xl font-semibold mt-5 mb-5">Denims</h3>
                    <button className="mb-3 text-xs border border-blue-600 rounded-xl text-center p-2 text-blue-600">See more</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
