import offerImage from '../images/products/9.png';

export default function SpecialOffer() {
  return (
    <div className="container mx-auto mt-20 bg-blue-400">
        <div className="flex justify-center items-center p-5">
            <div className="w-4/12 flex justify-center items-center">
                <img src={offerImage} alt="" width={400} className='h-auto mix-blend-color-burn'/>
            </div>
            <div className="w-8/12 flex justify-center items-center ">
                <div className="block space-x-4 space-y-5 text-white text-center">
                    <h1 className="text-4xl font-semibold">Special Offer</h1>
                    <p className="text-lg">Get 50% off on your first purchase</p>
                    <button className="px-5 py-2 bg-green-500 text-white text-sm transition-all duration-300 hover:bg-green-800">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
