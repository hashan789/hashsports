

export default function Cover() {
  return (
    <div className={`bg-[url("/images/cover_page.png")] w-full bg-center h-screen max-sm:bg-cover`}> 
        <div className="w-full flex justify-center items-center top-80 absolute">
            <div className="w-7/12 text-center">
                <h1 className="lg:text-7xl max-sm:text-2xl text-white font-bold">Grab the chance</h1>
                 <h1 className="lg:text-2xl max-sm:text-sm text-white p-4">
                 Don{"'"}t miss out on exclusive deals and limited-time offers! 
                 </h1>
                <button className="rounded-xl lg:mt-5 lg:pl-10 lg:pr-10 max-sm:pl-5 max-sm:pr-5 pt-3 pb-3 border text-center border-blue-300 text-blue-300">See more</button>
            </div>
        </div>
    </div>
  )
}
