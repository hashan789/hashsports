

export default function Footer() {
  return (
    <div>
        <div className="bg-gray-800 text-white py-10">
            <div className="container mx-auto flex justify-between items-center">
            <div>
                <h1 className="text-xl font-bold">Links</h1>
                <ul className="flex justify-center gap-5 mt-3 text-sm">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Brands</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h1 className="text-xl font-bold">Contact</h1>
                <p className="text-sm">Hashsports, 123 Main Street, City, State, 12345</p>
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
