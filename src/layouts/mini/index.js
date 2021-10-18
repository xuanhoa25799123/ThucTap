import React from 'react';
import Header from './header';
import Sidebar from './sidebar';

const Mini = ({ children }) =>
    <div className='row m-0 justify-content-center'>
        <div className='col-md-9 min-width-960-md'>
            <div className='row'>
                <div className='col-md-12'>
                    <Header />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md-9'>
                    { children }
                </div>
            </div>
        </div>
    </div>;

export { Mini }