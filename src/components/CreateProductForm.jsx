import { PlusCircle , Upload } from "lucide-react"
import { useState } from "react"
import { useProductState } from "../stores/useProductState"
import { Toaster } from "react-hot-toast";


export default function CreateProductForm() {

    const items = [ 'tshirts', 'trousers', 'shoes' ]

    const [ newProduct, setNewProduct ] = useState({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        image: '',
        category: ''
    })

    const { createProduct } = useProductState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(newProduct);
        console.log(newProduct)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if(file){
            const reader = new FileReader();

            reader.onloadend = () => {
                setNewProduct({...newProduct, image: reader.result});
            }
            reader.readAsDataURL(file);
        }

    }

  return (
    <div className="container w-full h-auto text-black bg-white px-10 pt-8 rounded-lg mb-5">
        <h1 className="font-semibold text-2xl mb-8">Create Product</h1>
        <form action="" onSubmit={handleSubmit} className="mt-3 flex justify-around">
            <div className="text-sm">
                <label htmlFor="">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="border border-black outline-none block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    required
                />
                <label htmlFor="">Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    className="border border-black outline-none block pl-2 mb-5 mt-3 w-80 h-20 rounded-lg text-black"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                    required
                />
                <label htmlFor="">Price</label>
                <input 
                    type="number" 
                    name="price" 
                    className="border border-black outline-none block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.price}
                    step={'0.01'}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                    required
                />
            </div>
            <div className="text-sm">
                <label htmlFor="">Stock</label>
                <input 
                    type="number" 
                    name="stock" 
                    className="border border-black outline-none block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    required
                />
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category" 
                    className="border border-black outline-none block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    required
                >
                    {
                        items.map((item,index) => (
                            <option value={item} key={index} className="text-black">{item}</option>
                        ))
                    }
                </select>
                <div className="flex items-center gap-4 mb-5">
                    <label htmlFor="image">Upload Image</label>
                    <div className="w-20 rounded-lg h-auto border border-black outline-none">
                    <input 
                        type="file" 
                        name="image" 
                        className="border block w-80 h-10 rounded-lg text-black opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    </div>
                    <Upload width={20} className="relative top-0 -left-12 "/>
                { newProduct.image && <div className="text-sm mb-3">Image uploaded</div> }
                </div>
                {/* <label htmlFor="stock">Count in stock</label>
                <input 
                    type="number" 
                    name="stock" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                    required
                /> */}
                <div className="flex justify-center">
                    <button className="text-center px-10 py-2 text-white bg-blue-600 hover:bg-blue-800 transition-all duration-300 border rounded-lg flex items-center">
                      <span><PlusCircle width={20} className="mr-1" /></span> 
                      <span>Create Product</span>
                    </button>
                </div>
            </div>
        </form>

        <Toaster />
    </div>
  )
}
