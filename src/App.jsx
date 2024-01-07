// @ts-nocheck
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import Store from './hooks/Store';
import Footer from './components/Footer';
import Navitem from './components/Navitem';
import Products from './components/Products';
import Categories from './components/categories';
import Card from './components/Card';



function App() {
  const [filter, setFilter] = useState("/products?populate=*");
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <>
     <>
     <Navitem/>
     <Card/>
            <Store.Provider value={{ filter, setFilter, selectedCategory, setSelectedCategory }}>

            <Categories />
            <Products />
            <Footer/>
          </Store.Provider>

     </>

    </>

  );
}

export default App;
