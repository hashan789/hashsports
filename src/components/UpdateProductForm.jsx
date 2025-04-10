import { Upload, ArrowUpCircleIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { useProductState } from "../stores/useProductState"
import { Toaster } from "react-hot-toast";

export default function UpdateProductForm({ id }) {
    const items = [ 'tshirts', 'trousers', 'shoes' ]

    const { product, getUpdateProduct , updateProduct } = useProductState();

    useEffect(() => {
        getUpdateProduct(id);
    },[getUpdateProduct,id])

    console.log(id)

    const [ newProduct, setNewProduct ] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: '',
        category: ''
    })

    useEffect(() => {
        setNewProduct({...newProduct,
            name: id ? product.name : '',
            description: id ? product.description : '',
            price: id ? product.price : '',
            stock: id ? product.stock : '',
            image: id ? product.image : '',
            category: id ? product.category : ''
        })
    },[setNewProduct, newProduct, product, id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateProduct(newProduct);
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
    <div className="container w-full h-auto text-black px-10 pt-8  mb-5">
        <h1 className="font-semibold text-center text-2xl mb-8">Update Product</h1>
        <form action="" onSubmit={handleSubmit} className="mt-3 space-x-5 flex justify-around">
            <div className="text-sm">
                <label htmlFor="">Name</label>
                <input 
                    type="text" 
                    name="name" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                />
                <label htmlFor="">Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-20 rounded-lg text-black"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                />
                <label htmlFor="">Price</label>
                <input 
                    type="number" 
                    name="price" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.price}
                    step={'0.01'}
                    onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                />
            </div>
            <div className="text-sm">
                <label htmlFor="">Stock</label>
                <input 
                    type="number" 
                    name="stock" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                />
                <label htmlFor="category">Category</label>
                <select 
                    name="category" 
                    id="category" 
                    className="border block pl-2 mb-5 mt-3 w-80 h-10 rounded-lg text-black"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                >
                    {
                        items.map((item,index) => (
                            <option value={item} key={index} className="text-black">{item}</option>
                        ))
                    }
                </select>
                <div className="flex items-center gap-4 mb-5">
                    <label htmlFor="image">Upload Image</label>
                    <div className="w-20 rounded-lg h-auto border ">
                    <input 
                        type="file" 
                        name="image" 
                        className="border block w-80 h-10 rounded-lg text-black opacity-0 cursor-pointer"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    </div>
                    <Upload width={20} className="relative top-0 -left-12"/>
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
                    <button className="text-center px-10 py-2 bg-blue-600 text-white border rounded-lg flex items-center">
                      <span><ArrowUpCircleIcon width={20} className="mr-1" /></span> 
                      <span>Update Product</span>
                    </button>
                </div>

               
            </div>
        </form>

        <Toaster />
    </div>
  )
}
