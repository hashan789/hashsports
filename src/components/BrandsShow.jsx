export default function BrandsShow() {

  const brands = ['/images/brands/dsi.png', '/images/brands/Nike-Logo.png', '/images/brands/moose.jpeg'];

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="">
        <h1 className="text-center text-4xl font-bold my-10">Brands</h1>
        <div className="flex justify-around items-center gap-10">
          {
            brands.map((brand, index) => (
              <img key={index} src={brand} alt="brand" width={150} className="brand-image mix-blend-hard-light" />
            ))
          }
        </div>
      </div>
    </div>
  )
}
