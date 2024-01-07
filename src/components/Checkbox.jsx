/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import  { useContext, useEffect } from 'react';
import qs from "qs";
import './checkbox.css';
import Store from '../hooks/Store';

export default function Checkbox({ category }) {
  const { setFilter, selectedCategory, setSelectedCategory } = useContext(Store);

  useEffect(() => {
    const query = qs.stringify({
      filters: {
        categories: {
          id: {
            $in: selectedCategory,
          }
        }
      }
    });
  
    setFilter(prevFilter => `${import.meta.env.VITE_API_URL}/products?populate=*&${query}`);
  }, [selectedCategory, setFilter]);
  

  const handleFilterCategory = (e) => {
    const selectedId = e.target.dataset.category;
    const isChecked = e.target.checked;

    setSelectedCategory(prevSelectedCategory => {
      if (isChecked) return [...prevSelectedCategory, selectedId];
      return prevSelectedCategory.filter(id => id !== selectedId);
    });
  };

  return (
    <>
      <label className="toggler-wrapper style-1">
        <input
          type="checkbox"
          data-category={category.id}
          onChange={handleFilterCategory}
        />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
        <div className='badg'>{category.attributes.title}</div>
      </label>
    </>
  );
}
