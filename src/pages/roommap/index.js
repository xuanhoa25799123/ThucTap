import React from 'react';
import { Button, Row, Col } from 'antd';
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineInfo,
} from 'react-icons/ai';
import RoomInfo from '../../components/RoomInfo';

export function Roommap() {
  return (
    <div className='bg-gray sidebar'>
      <div className='m-3'>
        <div className='p-2 border-bottom-gray'>
          <Row justify='space-between'>
            <Col span={15}>
              <Button
                type='text'
                style={{ fontWeight: 'bold', fontSize: '20px' }}
              >
                Arrival
              </Button>
              |
              <Button type='text' style={{ fontSize: '20px' }}>
                Departure
              </Button>
              |
              <Button type='text' style={{ fontSize: '20px' }}>
                Inhouse
              </Button>
              |
              <Button type='text' style={{ fontSize: '20px' }}>
                Status
              </Button>
            </Col>
            <Col span={6}>
              <Button
                className='m-2'
                shape='circle'
                icon={<AiOutlineSearch />}
                style={{ borderColor: 'black', background: 'transparent' }}
              ></Button>
              <Button
                className='m-2'
                shape='circle'
                icon={<AiOutlineSetting />}
                style={{ borderColor: 'black', background: 'transparent' }}
              ></Button>
              <Button
                className='m-2'
                shape='circle'
                icon={<AiOutlineInfo />}
                style={{ borderColor: 'black', background: 'transparent' }}
              ></Button>
            </Col>
          </Row>
        </div>
        <div className='p-2 room-info-container'>
          <RoomInfo roomNumber='101' status='arrival'></RoomInfo>
          <RoomInfo roomNumber='102' status='departure'></RoomInfo>
          <RoomInfo roomNumber='103' status='departure'></RoomInfo>
          <RoomInfo roomNumber='104' status='departure'></RoomInfo>
          <RoomInfo roomNumber='105' status='departure'></RoomInfo>
          <RoomInfo roomNumber='201'></RoomInfo>
          <RoomInfo roomNumber='202'></RoomInfo>
          <RoomInfo roomNumber='203'></RoomInfo>
          <RoomInfo roomNumber='204'></RoomInfo>
          <RoomInfo roomNumber='205'></RoomInfo>
          <RoomInfo roomNumber='301'></RoomInfo>
          <RoomInfo roomNumber='302'></RoomInfo>
          <RoomInfo roomNumber='303'></RoomInfo>
          <RoomInfo roomNumber='304'></RoomInfo>
          <RoomInfo roomNumber='305'></RoomInfo>
          <RoomInfo roomNumber='401' status='arrival'></RoomInfo>
          <RoomInfo roomNumber='402'></RoomInfo>
          <RoomInfo roomNumber='403'></RoomInfo>
          <RoomInfo roomNumber='404'></RoomInfo>
          <RoomInfo roomNumber='405' status='inhouse'></RoomInfo>
          <RoomInfo roomNumber='501'></RoomInfo>
          <RoomInfo roomNumber='502'></RoomInfo>
          <RoomInfo roomNumber='503'></RoomInfo>
          <RoomInfo roomNumber='504'></RoomInfo>
          <RoomInfo roomNumber='505' status='inhouse'></RoomInfo>
        </div>
      </div>
    </div>
  );
}

export default Roommap;
