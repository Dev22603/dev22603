import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className='flex flex-col items-center h-screen'>
        <Navbar />
        <h1>Home</h1>
        <span>Home</span>
       
    </div>
  );
};

export default Home;