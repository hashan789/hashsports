

export default function Footer() {
  return (
    <div>
        <div className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex lg:justify-between max-sm:justify-around items-center">
            <div>
                <h1 className="text-xl font-bold">Links</h1>
                <ul className="lg:flex lg:justify-center lg:gap-5 max-sm:block mt-3 text-sm">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Brands</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold">Contact</h1>
                <ul className="lg:flex lg:justify-center lg:gap-5 max-sm:block mt-3 text-sm">
                    <li>Hashsports, </li>
                    <li>123 Main Street, </li>
                    <li>City, </li>
                    <li>State, </li>
                    <li>12345</li>
                </ul>
            </div>
        </div>
            <div className="flex justify-center items-center">
                <div className="">
                    <p className="text-sm">© 2021 Hashsports. All rights reserved.</p>
                </div>
            </div>
    </div>
    </div>
  )
}
