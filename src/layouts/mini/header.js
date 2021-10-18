import * as React from 'react';
import { Menu, Dropdown, Button, Input, Avatar } from 'antd';
import { DownOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import Logo from 'logo.svg'
import { FaBars } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";
import Cookies from 'js-cookie'


const menu = (
    <Menu>
        <Menu.Item key="1" icon={ <UserOutlined /> }>
            1st menu item
        </Menu.Item>
        <Menu.Item key="2" icon={ <UserOutlined /> }>
            2nd menu item
        </Menu.Item>
        <Menu.Item key="3" icon={ <UserOutlined /> }>
            3rd menu item
        </Menu.Item>
    </Menu>
);

export function Header() {
    const cookie = Cookies.get('userlogin');
    const avatar = localStorage.getItem('avatar');

    return (
        <div className='row d-flex justify-content-between align-items-center' style={ { minHeight: '80px' } }>
            <div className='col-md-7'>
                <img src={ Logo } width='80px' height='80px' style={ { objectFit: 'contain' } } />
            </div>
            <div className='col-md-5 d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center ms-3'>
                    <AiOutlineGlobal size='32' />
                    <Dropdown className='ms-3' overlay={ menu }>
                        <a className="ant-dropdown-link" onClick={ e => e.preventDefault() } style={ { color: 'black' } }>
                            Language <DownOutlined />
                        </a>
                    </Dropdown>
                </div>
                <div className='d-flex align-items-center'>
                    <span className='me-1'>ID: </span>
                    <strong>Reception01</strong>
                    <div className='ms-3'>
                        {
                            (avatar != null && avatar != 'null' & avatar != '') ? (<Avatar size="small" src={ avatar } alt="avatar" />) :
                                (<Avatar className='border-gray' size="medium" style={ {background: 'transparent'} } alt="avatar" icon={ <FcBusinessman size='32'/> } />)
                        }
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <FaBars size='32' />
                </div>
            </div>

        </div>
    );
}

export default Header