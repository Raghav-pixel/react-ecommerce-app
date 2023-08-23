import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
import Card from './components/Card';

function App() {
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [ query, setQuery ] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }

  // filter products on searching item
  const filteredItems = products.filter((p) => 
    p.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // On clicking radio button
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  // button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if(query) {
      filteredProducts = filteredItems;
    }

    if(selected) {
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => 
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
      );
    }
    
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) => (
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const results = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products results={results} />
    </>
  );
}

export default App;