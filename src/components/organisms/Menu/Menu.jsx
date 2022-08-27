import React from 'react';
import './menu.css';
import { Text } from '../../atoms';

export const Menu = () => {
  return (
    <div className='menu'>
      <div className="menu-list">
        <i className="cogs icon"></i>
        <Text type="p">Settings</Text>
      </div>
      <div className="menu-list">
        <i className="add icon"></i>
        <Text type="p">New</Text>
      </div>
      <div className="menu-list">
        <i className="list alternate icon"></i>
        <Text type="p">Record</Text>
      </div>
    </div>
  )
}

