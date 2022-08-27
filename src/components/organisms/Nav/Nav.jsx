import React from 'react'
import {Text} from '../../atoms';
import './Nav.css';


export const Nav = ({title}) => {
  // const [, setActivePage] = useState("home");

  // const setPageRoute = (page) =>{
    // setActivePage(page);
  // }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <Text type="h2" className="logo-text">Courier</Text>
        </div>
        <div className="nav-items">
          <div className="nav-btn"><i size="large" aria-hidden="true" className="ellipsis vertical icon"></i></div>
          <div>
            <Text type="h2">{title}</Text>
          </div>
          <div className="nav-btn"><i size="large" aria-hidden="true" className="user circle outline icon"></i></div>
        </div>
    </div>
  )
}
