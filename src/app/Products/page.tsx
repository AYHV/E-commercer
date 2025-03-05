"use client";

import React, { useState } from "react";
// import N from "@/component/Navbar";

interface Product {
    id: number;
    name: string;
    price: number;
    image?: string;
}

const ProductsPage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState<Product | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleAddProduct = () => {
        const newProduct: Product = {
            id: products.length + 1,
            name: "New Product",
            price: 0,
        };
        setProducts([...products, newProduct]);
    };

    const handleEdit = (product: Product) => {
        setIsEditing(true);
        setEditedProduct(product);
    };

    const handleDelete = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    };

    const handleSave = () => {
        if (editedProduct) {
            setProducts(products.map(p => p.id === editedProduct.id ? editedProduct : p));
            setIsEditing(false);
            setEditedProduct(null);
            setImagePreview(null);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                if (editedProduct) {
                    setEditedProduct({ ...editedProduct, image: reader.result as string });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Products</h1>
                <button
                    onClick={handleAddProduct}
                    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg mb-8 transition duration-300 ease-in-out flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add Product
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            {isEditing && editedProduct?.id === product.id ? (
                                <div className="p-6 space-y-4">
                                    <input
                                        type="text"
                                        value={editedProduct.name}
                                        onChange={(e) =>
                                            setEditedProduct({ ...editedProduct, name: e.target.value })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input
                                        type="number"
                                        value={editedProduct.price}
                                        onChange={(e) =>
                                            setEditedProduct({
                                                ...editedProduct,
                                                price: Number(e.target.value),
                                            })
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <div className="relative">
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            onChange={handleImageUpload}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    {imagePreview && (
                                        <img
                                            src={imagePreview}
                                            alt="Preview"
                                            className="w-full h-48 object-cover rounded-lg"
                                        />
                                    )}
                                    <button
                                        onClick={handleSave}
                                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition duration-300"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-400">No image</span>
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                        <p className="text-green-600 font-bold text-lg mb-4">${product.price}</p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleEdit(product)}
                                                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
