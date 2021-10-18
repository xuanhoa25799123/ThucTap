import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { FaAngleDoubleRight } from 'react-icons/fa';

function RoomInfo({ roomNumber, status }) {
  return (
    <div className='room-info'>
      <div className='room-info-status'>
        <FaAngleDoubleRight
          className={status == 'arrival' ? 'show-room-info-status' : ''}
          style={{ color: 'green' }}
        />
        <AiFillLock
          className={status == 'inhouse' ? 'show-room-info-status' : ''}
        />
        <FaAngleDoubleRight
          className={status == 'departure' ? 'show-room-info-status' : ''}
          style={{ color: 'red' }}
        />
      </div>
      <div className='room-number'>{roomNumber}</div>
    </div>
  );
}

export default RoomInfo;
