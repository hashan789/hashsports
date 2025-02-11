// import offerImage from '/images/products/3.png';

export default function SpecialOffer() {
  return (
    <div className="container mx-auto mt-20 bg-yellow-300">
        <div className="flex justify-center items-center p-5">
            <div className="w-4/12 flex justify-center items-center">
                <img src={'/images/products/3.png'} alt="" width={400} className='h-auto mix-blend-multiply z-10'/>
            </div>
            <div className="w-8/12 flex justify-center items-center ">
                <div className="block space-x-4 space-y-5 text-orange-700 text-center">
                    <h1 className="text-4xl font-semibold">Special Offer</h1>
                    <p className="text-lg">Get 50% off on your first purchase</p>
                    <button className="px-5 py-2 bg-green-500 text-white text-sm transition-all duration-300 hover:bg-green-800">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
