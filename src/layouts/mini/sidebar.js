import React from 'react';
import { Link } from 'react-router-dom';

export function Sidebar() {

    return (
        <div className='bg-gray sidebar'>
            <div className='m-3'>
                <div className='p-2 mb-2 border-bottom-gray'>
                    <h4>DiHotel PMS</h4>
                </div>
                <div className='p-2'>
                    <h4>Reservations</h4>
                    <div className='ps-3'>
                        <div className='mb-2'>
                            <Link to='/roommap' style={ {color: 'black', fontSize: '16px'} }>.Room Availability</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Room Plans</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/booking' style={ { color: 'black', fontSize: '16px' } }>.Booking</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Chanel Manager</Link>
                        </div>
                    </div>
                </div>
                <div className='p-2'>
                    <h4>Receptions</h4>
                    <div className='ps-3'>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Guest Information</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Post Bill</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Checkin</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Night Audit</Link>
                        </div>
                        <div className='mb-2'>
                            <Link to='/' style={ { color: 'black', fontSize: '16px' } }>.Log History</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >)
}

export default Sidebar