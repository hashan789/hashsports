
export default function BrandsShow() {

  const brands = ['/images/brands/dsi.png', '/images/brands/Nike-Logo.png', '/images/brands/adidas.png', '/images/brands/fila.png', '/images/brands/levis.png', '/images/brands/puma.jpg'];

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="">
        <h1 className="text-center lg:text-4xl max-sm:text-2xl font-bold my-10">Brands</h1>
        <div className="lg:flex lg:justify-center lg:items-center max-sm:grid max-sm:grid-cols-3 lg:gap-10 max-sm:gap-5">
          {
            brands.map((brand, index) => (
              <img key={index} src={brand} alt="brand" className="lg:w-36 max-sm:w-16 brand-image mix-blend-hard-light" />
            ))
          }
        </div>
      </div>
    </div>
  )
}
