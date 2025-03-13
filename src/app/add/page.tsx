"use client";

import { SetStateAction, useState } from "react";
import { FiSearch, FiTrash, FiMoreVertical, FiEdit } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "INVERNI BW", category: "Jacket", sales: 34, stock: 647, price: 449000, image: "/jacket.png" },
    { id: 2, name: "EVBALT", category: "Long Sleeve", sales: 53, stock: 234, price: 199000, image: "/longsleeve.png" },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    sales: 0,
    stock: 0,
    price: 0,
    image: ''
  });
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleAddProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "New Product",
      category: "Category",
      sales: 0,
      stock: 0,
      price: 0,
      image: "/placeholder.png",
    };
    setProducts([...products, newProduct]);
  };

  const handleEdit = (product: { id: any; name: any; category: any; sales: any; stock: any; price: any; image: any; }) => {
    setEditingProduct(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      sales: product.sales,
      stock: product.stock,
      price: product.price,
      image: product.image,
    });
  };

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct
        ? { ...product, ...formData }
        : product
    );
    setProducts(updatedProducts);
    setEditingProduct(null);
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result?.toString() || formData.image,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSearch = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Product Fashion</h1>
          <div className="flex gap-2">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
            <Button onClick={handleAddProduct} className="bg-orange-500 text-white px-4 py-2 rounded">
              + Add Product
            </Button>
          </div>
        </div>

        {/* Edit Form */}
        {editingProduct && (
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-xl font-semibold">Edit Product</h2>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                className="mb-2 w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="mb-2 w-full p-2 border rounded-md"
              />
              <input
                type="number"
                name="sales"
                value={formData.sales}
                onChange={handleChange}
                placeholder="Sales"
                className="mb-2 w-full p-2 border rounded-md"
              />
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock"
                className="mb-2 w-full p-2 border rounded-md"
              />
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="mb-2 w-full p-2 border rounded-md"
                pattern="[0-9A-Za-z]+"
                // title="ປ້ອນໄດ້ພຽງຕົວເລກແລະອັກສອນ"
              />

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-2 w-full p-2 border rounded-md"
              />
              {formData.image && (
                <img src={formData.image} alt="Product Preview" className="mt-2 w-32 h-32 object-cover rounded" />
              )}
              <div className="flex gap-2 mt-4">
                <Button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
                  Save
                </Button>
                <Button onClick={() => setEditingProduct(null)} className="bg-gray-500 text-white px-4 py-2 rounded">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Product</th>
                <th className="p-3">Sale</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Price</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="p-3 flex items-center gap-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                  </td>
                  <td className="p-3">{product.sales}</td>
                  <td className="p-3">{product.stock} Item</td>
                  <td className="p-3">RP {product.price.toLocaleString()}</td>
                  <td className="p-3 text-center">
                    <button onClick={() => handleDelete(product.id)} className="text-red-500 mr-2">
                      <FiTrash />
                    </button>
                    <button onClick={() => handleEdit(product)} className="text-blue-500 mr-2">
                      <FiEdit />
                    </button>
                    <button className="text-gray-500">
                      <FiMoreVertical />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
