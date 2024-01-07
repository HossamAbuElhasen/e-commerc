import { useState, useEffect } from 'react';
import './Card.css';
import { FaShoppingBasket, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCard } from '../redux/CardReducer';

export default function Card() {
  const [cardListVisible, setCardListVisible] = useState(false);
  const [autoOpenCard, setAutoOpenCard] = useState(false);

  const toggleCardList = () => {
    setCardListVisible(!cardListVisible);
    setAutoOpenCard(false);
  };

  const products = useSelector(state => state.card.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (autoOpenCard && products.length > 0) {
      setCardListVisible(true);
    }
  }, [autoOpenCard, products]);

  return (
    <div className='cart'>
      <div className='cart-icon' onClick={toggleCardList}>
        <FaShoppingBasket/>
      </div>
      <div className='cart-badge'>{products.length}</div>
      {(cardListVisible || products.length > 0) && (
        <ul className='cart-list'>
          {products.map(product => (
            <li key={product.id} className='cart-item'>
              <img src={import.meta.env.VITE_APP_URL + product.image} alt="" className="cart-item-image"/>
              <span className="cart-item-title">{product.title}</span>
              <span className="cart-item-price">{product.price} $ </span>
            </li>
          ))}
          <span className='cart-item-remove' onClick={() => dispatch(removeFromCard())}>
            <FaTrash className='trash'/>
          </span>
        </ul>
      )}
    </div>
  );
}




