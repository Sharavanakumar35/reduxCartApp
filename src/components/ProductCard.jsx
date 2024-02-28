import React, { useState } from 'react';
import '../components/ProductCard.css'
import { Rating } from 'react-simple-star-rating';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartReducer';
import { removeFromCart, updateCartItem } from '../redux/CartReducer';
import { Trash3Fill, BagPlusFill } from 'react-bootstrap-icons';

const ProductCard = ({product}) => {

  const [imgId, setImgId] = useState(1);
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart);

  const productInCart = cartItems.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if(quantity > 0) {
      dispatch(addToCart({product: product, quantity: quantity}));
    } else {
      alert('Please add the quantity.')
    }
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
};

const handleUpdateCartItem = (action) => {
  let newQuantity;

  if (action === 'add') {
    newQuantity = Math.min(quantity + 1, product.stock);
  } else if (action === 'minus') {
    newQuantity = Math.max(0, quantity - 1);
  }

  setQuantity(newQuantity);

  dispatch(updateCartItem({ product: product, quantity: newQuantity }));
};


  const handleImageClick = (id) => {
    setImgId(id);
  };

    return (
      <div className="card-wrapper">
        <div className="col-12 card d-flex justify-content-around" style={{boxShadow: '#795548 0px 6px 15px 0px', border: '0'}}>
          <div class="badge-overlay">
                <span class="top-right badge red">{product.discountPercentage}% OFF</span>
            </div>
          <div className="col-4 product-imgs">
            <div className="img-display">
              <div
                className="img-showcase"
                style={{ transform: `translateX(-${(imgId - 1) * 100}%)` }}
              >
                {product.images.map((imageUrl, index) => {
                  return (
                    <>
                      <img src={imageUrl} alt="shoe image" />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="img-select shadow-scroll-x">
              <div className="d-flex">
                {product.images.map((imageUrl, index) => {
                  return (
                    <>
                      <div className="img-item">
                        <a
                          onClick={() => handleImageClick(index + 1)}
                          data-id={index + 1}
                        >
                          <img
                            className="img-item-img"
                            src={imageUrl}
                            alt="shoe image"
                          />
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className='product-content'>
            <div className="card-brand">{product.brand}</div>
            <div className='d-flex align-items-center'>
                <div className="card-title me-2">{product.title}</div>
                <span class="price-tag">
                  <span>${product.price}</span>
                </span>
              </div>
            <div className="star-rating  mb-2" style={{marginLeft: '-5px'}}>
              <Rating initialValue={product.rating} allowFraction readonly />
            </div>
            <div className="card-description  my-2">{product.description}</div>
            <div className='d-flex justify-content-between align-items-center'>
            <div className="card-instock  mb-2">In Stock: {product.stock}</div>
                  <div id='quantity'>
                <div
                  class="btn-quantity-container d-flex align-items-center justify-content-center"
                  style={{gap: '0.5em'}}
                >
                  <button
                    type="button"
                    class="btn-quantity btn btn-default"
                    onClick={() => handleUpdateCartItem("minus")}
                  >
                    −
                  </button>
                  <span
                    id={`quantity-${product.id}`}
                    class="p-quantiry"
                  >
                    {quantity}
                  </span>
                  <button
                    type="button"
                    class="btn-quantity btn btn-default"
                    onClick={() => handleUpdateCartItem("add")}
                  >
                    +
                  </button>
                </div>
                  </div>
            </div>
            </div>
            
            <div style={{borderBottom: '1px solid #d6d6d6', marginTop: '2rem', marginBottom: '1rem'}}></div>
            <div className='price-addCart'>

              <div className="d-flex justify-content-between align-items-center">
              {productInCart?.isInCart ? (
                    <button
                      className="btn btn-outline-danger"
                      style={{display: 'flex', alignItems: 'center'}}
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                    <Trash3Fill></Trash3Fill>
                    <span className='mx-2'>Remove From Cart</span>
                    </button>
                  ) : (
                    <button className="btn btn-outline-success"  style={{display: 'flex', alignItems: 'center'}} onClick={handleAddToCart}>
                      <BagPlusFill></BagPlusFill>
                      <span className='mx-2'>Add To Cart</span>
                    </button>
                  )}
                <div class="total-price">
                  <p className="mx-2 mb-0" style={{ color: "#5E6977" }}>
                    Sub Total:
                  </p>
                  <p className='mb-0'
                    style={{
                      fontSize: "2.5rem",
                      color: "#5E6977",
                      fontWeight: "500",
                    }}
                  >
                    ${product.price * quantity}
                  </p>
                </div>
              </div>
          </div>
          </div>
          
          
        </div>
      </div>
    );
};

export default ProductCard;
