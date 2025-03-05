"use client";
import React, { useState } from 'react';

interface Product {
    id: number; 
    name: string;
    price: number;
    image?: string;
}

const Page = () => {
const [products, setProducts] = useState<Product[]>([]);
const[isEditing, setIsEditing] = useState(false);
const[editedProduct, setEditedProduct] = useState<Product | null>(null);
const[imagePreview, setImagePreview] = useState<string | null>(null);

const AddProducts = () => {
    const newProduct: Product = {
        id: products.length + 1,
        name: "New Product",
        price: 0,
    };
    setProducts([...products, newProduct]);
}


  return (
    <div>
        <div className="">
            <h1 className="">Products</h1>
            <div className="">
                <button onClick={AddProducts} className="bg-green-600 p-4 text-2xl text-white rounded-lg">Add Product</button>
                <div className="">
                    <input type="files"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page