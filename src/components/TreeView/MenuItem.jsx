import React, { useState } from 'react'
import { MenuList } from './MenuList'

export const MenuItem = ({item}) => {

  const [displayChildern, setDisplayChildern] = useState({});

  const toggleChildrenDisplay = (label) => {
    setDisplayChildern({...displayChildern, [label] : !displayChildern[label]});
  }

  return (
    <li>
      <p className='d-inline'>{item.label}</p>
      {(Array.isArray(item.children) && item.children && item.children.length > 0) && 
        <>
          <a className='border-0 ms-2 btn text-light' onClick={()=>toggleChildrenDisplay(item.label)}> {displayChildern[item.label] ? "-" : "+"}</a>
          {
            displayChildern[item.label] && 
              <MenuList menuList={item.children}/>
          }
        </>
}
    </li>
  )
}
