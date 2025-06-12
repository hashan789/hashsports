// import img1 from '../images/cover_page.png'

export default function Cover1() {
    return (
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white min-h-screen flex flex-col justify-center items-center overflow-hidden" style={{ clipPath : "ellipse(85% 100% at top)" }}>
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Get the chance
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-sm">
            Discover the latest trends and products you{"'"}ll love. Quality meets style.
          </p>
  
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg transition hover:bg-indigo-100">
              Shop Now
            </button>
            <button className="border border-white text-white font-semibold px-6 py-3 rounded-full transition hover:bg-white hover:text-indigo-600">
              Learn More
            </button>
          </div>
        </div>
       <div className="w-52 h-52 rounded-full bg-purple-700 absolute top-0 right-10 bg-opacity-15"></div>
       <div className="w-52 h-52 rounded-full bg-purple-700 absolute -top-10 -right-10 bg-opacity-35"></div>
       <div className="w-52 h-52 rounded-full bg-purple-700 absolute top-10 left-10 bg-opacity-35 overflow-hidden">
         {/* <img src={img1} alt="img1" className='w-full h-full bg-center bg-no-repeat'/> */}
       </div>
       <div className="w-52 h-52 rounded-full bg-purple-700 absolute top-2/3 right-10 bg-opacity-35"></div>
       {/* <div className="w-52 h-52 rounded-full bg-purple-700 absolute top-10 left-20 bg-opacity-35"></div> */}
      </div>
    );
  }
  
