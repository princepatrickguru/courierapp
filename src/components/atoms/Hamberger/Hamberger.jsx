import React from 'react';
import './Hamberger.css';

export const Hamberger = ({type, togglesidebar, toggleslider}) => {
  if(type === 'open'){
      return(
          <div className='hamberger' onClick={ ()=>{togglesidebar()} }>
            <div className="hamburgerbars"></div>
            <div className="hamburgerbars"></div>
          </div>
      )  
  }
  else if(type === 'close'){
      return(
        <div className='hambergerx' onClick={ ()=>{togglesidebar()} }>
            <div className="hamburgerbarxr"></div>
            <div className="hamburgerbarxl"></div>
        </div>
      )
  }
  else if(type === 'arrow-right'){
      return(
        <div className='hamberger' onClick={ ()=>{toggleslider("right")} } >
              <i className="fa fa-chevron-right"></i>
            </div>
      )
    }
    else if(type === 'arrow-left'){
      return(
        <div className='hamberger' onClick={ ()=>{toggleslider("left")} } >
         <i className="fa fa-chevron-left"></i>
        </div>
      )
  }
  else{
      return(
        <div className='hamberger' onClick={ ()=>{togglesidebar()} } >
          <div className="hamburgerbars"></div>
          <div className="hamburgerbars"></div>
        </div>
      )
  }
}
