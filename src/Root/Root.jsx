import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Root = () => {
     return (
          <div>
              <div className='container mx-auto mt-4'>
              <Navbar></Navbar>
              </div>
               <Outlet></Outlet>
               <Toaster/>
          </div>
     );
};

export default Root;