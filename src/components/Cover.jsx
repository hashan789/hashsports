

export default function Cover() {
  return (
    <div className={`bg-[url("src/images/cover_page.png")] w-full bg-center h-screen`}> 
        <div className="w-full flex justify-center items-center top-80 absolute">
            <div className="w-7/12 text-center">
                <h1 className="text-7xl text-white font-bold">Grab the chance</h1>
                <button className="rounded-xl mt-5 pl-10 pr-10 pt-3 pb-3 border text-center border-blue-300 text-blue-300">See more</button>
            </div>
        </div>
    </div>
  )
}
