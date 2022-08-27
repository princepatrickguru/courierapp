import React from 'react';
import {Text} from '../../atoms';
import './SlideImg.css';

export const SlideImg = ({title, Key, className, img, changeActive, count, year}) => {
    let slidepanel = 'slidepanel ';
    slidepanel += className;
  return (
    <div Key={Key} onClick={()=>{changeActive(count)}} className={slidepanel} style={{background: `url(${img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <Text type='p' className='p text-white'>
            {title}
        </Text>
        <Text type='h2' className='h2 text-white'>
            {title}({year})
        </Text>
    </div>
  )
}
