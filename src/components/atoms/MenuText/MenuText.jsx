import React from 'react'
import './MenuText.css';

export const MenuText = ({type, className, link, children, setPageRoute}) => {
        if(type==="p"){
            return(
                <p onClick={()=>{setPageRoute(link)}} className={className}>{children}</p>
            );
        }
        if(type==="h1"){
            return(
                <h1 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h1>
            );
        }
        if(type==="h2"){
             return(
                <h2 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h2>
            );
        }
        if(type==="h3"){
             return(
                <h3 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h3>
            );
        }
        if(type==="h4"){
            return(
                <h4 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h4>
            );
        }
        if(type==="h5"){
            return(
                <h5 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h5>
            );
        }
        if(type==="h6"){
            return(
                <h6 onClick={()=>{setPageRoute(link)}} className={className}>{children}</h6>
            );
        }
        
        return(
            <span onClick={()=>{setPageRoute(link)}} className={className}>{children}</span>
        );
}


