
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
