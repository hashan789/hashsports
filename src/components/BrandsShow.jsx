
import dsi from '../images/brands/dsi.png'
import adidas from '../images/brands/adidas.png'
import fila from '../images/brands/fila.png'
import levis from '../images/brands/levis.png'
import puma from '../images/brands/puma.jpg'
import nike from '../images/brands/Nike-Logo.png'
import moose from '../images/brands/moose.jpeg'

export default function BrandsShow() {

  const brands = [dsi, adidas, fila, levis, puma, nike, moose];

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="">
        <h1 className="text-center lg:text-4xl max-sm:text-2xl font-bold my-10">Brands</h1>
        <div className="lg:flex lg:justify-center lg:items-center max-sm:grid max-sm:grid-cols-3 lg:gap-10 max-sm:gap-5">
          {
            brands.map((brand, index) => (
              <img key={index} src={brand} alt="brand" className="lg:w-36 max-sm:w-20 brand-image mix-blend-hard-light" />
            ))
          }
        </div>
      </div>
    </div>
  )
}
