import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
     return (
          <div>
              <div className='container mx-auto mt-4'>
              <Navbar></Navbar>
              </div>
               <Outlet></Outlet>
          </div>
     );
};

export default Root;