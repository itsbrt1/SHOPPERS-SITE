import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [products, setProducts] = useState([
    { name: '', image: '', category: 'Sofas', old_price: '', new_price: '', file: null },
    { name: '', image: '', category: 'Sofas', old_price: '', new_price: '', file: null },
    { name: '', image: '', category: 'Sofas', old_price: '', new_price: '', file: null },
    { name: '', image: '', category: 'Sofas', old_price: '', new_price: '', file: null },
  ]);

  // Handle text/category inputs
  const changeHandler = (e, index) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setProducts(newProducts);
  };

  // Handle image file input
  const imageHandler = (e, index) => {
    const newProducts = [...products];
    newProducts[index].file = e.target.files[0];
    setProducts(newProducts);
  };

  const Add_Products = async () => {
    for (let i = 0; i < products.length; i++) {
      let product = { ...products[i] };

      // Skip if no name (optional validation)
      if (!product.name) continue;

      let responseData;

      // Upload image first
      let formData = new FormData();
      formData.append('product', product.file);

      await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
        .then((resp) => resp.json())
        .then((data) => {
          responseData = data;
        });

      if (responseData.success) {
        product.image = responseData.image_url;
        product.available = true;

        // Save product
        await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
          });
      }
    }
    alert('Products Added Successfully');
  };

  return (
    <div className="add-product">
      {products.map((product, index) => (
        <div key={index} className="addproduct-card">
          <h3>Product {index + 1}</h3>
          <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input
              value={product.name}
              onChange={(e) => changeHandler(e, index)}
              type="text"
              name="name"
              placeholder="Type Here"
            />
          </div>
          <div className="addproduct-price">
            <div className="addproduct-itemfield">
              <p>Price</p>
              <input
                value={product.old_price}
                onChange={(e) => changeHandler(e, index)}
                type="text"
                name="old_price"
                placeholder="Type Here"
              />
            </div>
            <div className="addproduct-itemfield">
              <p>Offer Price</p>
              <input
                value={product.new_price}
                onChange={(e) => changeHandler(e, index)}
                type="text"
                name="new_price"
                placeholder="Type Here"
              />
            </div>
          </div>
          <div className="addproduct-itemfield">
            <p>Category</p>
            <select
              value={product.category}
              onChange={(e) => changeHandler(e, index)}
              name="category"
              className="add-product-selector"
            >
              <option value="Sofas">Sofas</option>
              <option value="Beds">Beds</option>
              <option value="Tables">Tables</option>
            </select>
          </div>
          <div className="addproduct-itemfield">
            <label htmlFor={`file-input-${index}`}>
              <img
                src={
                  product.file
                    ? URL.createObjectURL(product.file)
                    : upload_area
                }
                className="addproduct-thumbnail-img"
              />
            </label>
            <input
              onChange={(e) => imageHandler(e, index)}
              type="file"
              name="image"
              id={`file-input-${index}`}
              hidden
            />
          </div>
        </div>
      ))}
      <button onClick={Add_Products} className="addproduct-btn">
        ADD ALL PRODUCTS
      </button>
    </div>
  );
};

export default AddProduct;