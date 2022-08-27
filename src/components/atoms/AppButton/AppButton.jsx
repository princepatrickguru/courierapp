import React from 'react'
import './AppButton.css';
import { Button } from 'semantic-ui-react';

export const AppButton = ({className, children}) => {
  return (
    <>
      <Button className={className}>{children}</Button>  
    </>
  )
}

