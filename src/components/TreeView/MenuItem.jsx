import React, { useState } from 'react'
import { MenuList } from './MenuList'

export const MenuItem = ({ item }) => {

  const [displayChildern, setDisplayChildern] = useState({});

  const toggleChildrenDisplay = (label) => {
    setDisplayChildern({ ...displayChildern, [label]: !displayChildern[label] },);
  }


  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <li onClick={() => toggleChildrenDisplay(item.label)}>
      <p className='d-inline'>{item.label}</p>
      {hasChildren &&
        <>
          <a className='border-0 ms-2 btn text-light fs-2'> {displayChildern[item.label] ? "-" : "+"}</a>
          {
            displayChildern[item.label] &&
            <MenuList menuList={item.children} />
          }
        </>
      }
    </li>
  )
}
