import React, { useState } from 'react';
import './CartPage.css';  

const productsData = {
  "products": [
      {
          "id": 1,
          "title": "iPhone 9",
          "description": "An apple mobile which is nothing like apple",
          "price": 549,
          "discountPercentage": 12.96,
          "rating": 4.69,
          "stock": 94,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/1/1.jpg",
              "https://i.dummyjson.com/data/products/1/2.jpg",
              "https://i.dummyjson.com/data/products/1/3.jpg",
              "https://i.dummyjson.com/data/products/1/4.jpg",
              "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
      },
      {
          "id": 2,
          "title": "iPhone X",
          "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price": 899,
          "discountPercentage": 17.94,
          "rating": 4.44,
          "stock": 34,
          "brand": "Apple",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/2/1.jpg",
              "https://i.dummyjson.com/data/products/2/2.jpg",
              "https://i.dummyjson.com/data/products/2/3.jpg",
              "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          ]
      },
      {
          "id": 3,
          "title": "Samsung Universe 9",
          "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
          "price": 1249,
          "discountPercentage": 15.46,
          "rating": 4.09,
          "stock": 36,
          "brand": "Samsung",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/3/1.jpg"
          ]
      },
      {
          "id": 4,
          "title": "OPPOF19",
          "description": "OPPO F19 is officially announced on April 2021.",
          "price": 280,
          "discountPercentage": 17.91,
          "rating": 4.3,
          "stock": 123,
          "brand": "OPPO",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/4/1.jpg",
              "https://i.dummyjson.com/data/products/4/2.jpg",
              "https://i.dummyjson.com/data/products/4/3.jpg",
              "https://i.dummyjson.com/data/products/4/4.jpg",
              "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          ]
      },
      {
          "id": 5,
          "title": "Huawei P30",
          "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
          "price": 499,
          "discountPercentage": 10.58,
          "rating": 4.09,
          "stock": 32,
          "brand": "Huawei",
          "category": "smartphones",
          "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
          "images": [
              "https://i.dummyjson.com/data/products/5/1.jpg",
              "https://i.dummyjson.com/data/products/5/2.jpg",
              "https://i.dummyjson.com/data/products/5/3.jpg"
          ]
      }
  ]
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState(productsData.products.map(product => ({ ...product, quantity: 1 })));

  const showAlert = (message) => {
    alert(message);
  };

  const handleIncrement = (productId) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === productId && item.quantity < item.stock) {
        return { ...item, quantity: item.quantity + 1 };
      }
      if (item.id === productId && item.quantity >= item.stock) {
        showAlert("*********** PRODUCT OUT OF STOCK ***********");
      }
      return item;
    }));
  };

  const handleDecrement = (productId) => {
    setCartItems(prevItems => prevItems.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };



  return (
    <div className="cart-container">
      {cartItems.map(item => (
        <div key={item.id} className="product-card">
          <img className="product-thumbnail" src={item.thumbnail} alt="Product Thumbnail" />
          <h2 className="product-title">{item.title}</h2>
          <h4 className="product-description">Description : {item.description}</h4>
          <h4 className="product-discount">Discount : {item.discountPercentage}%</h4>
          <h4 className="product-rating">Rating : {item.rating}</h4>
          <h4 className="product-brand">Brand : {item.brand}</h4>
          <h4 className="product-category">Category : {item.category}</h4>
          <h2 className="product-stock">Stock : {item.stock}</h2>
          <h2 className="product-price">Price : ${item.price}</h2>
          <div className="quantity-controls">
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <span>Quantity {item.quantity}</span>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </div>
          <div className="subtotal">
            <h3>SUBTOTAL : ${calculateSubtotal(item)}</h3>
            <h3>SHIPPING : FREE</h3>
            <h2 className={`blink_me ${item.quantity > item.stock ? "out-of-stock" : ""}`}>TOTAL : $ {calculateSubtotal(item)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;