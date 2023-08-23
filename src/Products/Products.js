import React from 'react';
import './Products.css';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagFill } from 'react-icons/bs';
import Card from '../components/Card';

const Products = ({ results }) => {
  
  return (
    <>
      <section className='card-container'>
        {results}
      </section>
    </>
  );
}

export default Products;