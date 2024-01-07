import './Products.css'

import  { useContext, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import UseFetch from '../hooks/UseFetch';
import Store from '../hooks/Store';
import { addToCard } from '../redux/CardReducer';

export default function Products() {
  const [products, setProducts] = useState([]);
  const {filter}=useContext(Store)
  
  const { data, loading, error } = UseFetch(filter);

  const dispatch = useDispatch()

 const [visibleProducts, setVisibleProducts] = useState(6);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

    const showMoreProducts = () => {
      setVisibleProducts(visibleProducts + 3); 
    };

  const showLessProducts = () => {
    setVisibleProducts(visibleProducts - 3); 
  };

  return (
    <div className='products'>
      {loading ? (
        "Loading..."
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className='product col-custom col-md-6 col-sm-12'>
            <h2 className='product-title'>{product.attributes.title}</h2>
            <h4 className='product-price'>{product.attributes.price} $</h4>
            <img className='product-image' src={`${import.meta.env.VITE_APP_URL + product.attributes.image.data.attributes.url}`} alt="" />
            <h5 className='product-describe'>{product.attributes.describe}</h5>
            
            <button className='product-btn'
            onClick={()=>dispatch(addToCard({
                id:product.attributes.id,
                title:product.attributes.title,
                describe:product.attributes.describe,
                price:product.attributes.price,
                image:product.attributes.image.data.attributes.url

            }))}
            >Buy Now</button>
          </div>
        ))
      )}
        {visibleProducts < products.length ? (
        <button className='btn-show' onClick={showMoreProducts}>  show more</button>
      ) : 
      (
        <button className='btn-show' onClick={showLessProducts}> less</button>
      )}
    </div>
  );
}


