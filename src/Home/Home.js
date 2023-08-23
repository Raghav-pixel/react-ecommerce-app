import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Recommended from '../Recommended/Recommended';
import Products from '../Products/Products';

const Home = ({ handleChange, handleClick, results }) => {
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <Products results={results} />
    </>
  );
}

export default Home;
