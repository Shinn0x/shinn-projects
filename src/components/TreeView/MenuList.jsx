import React from 'react'
import { MenuItem } from './MenuItem'

export const MenuList = ({menuList, displayChildern}) => {
    
    let condition = displayChildern || false;

  return (
    <>
        <div className={`menuList ${condition ? "d-none" : "d-block"}`}>
            <ul>
                {menuList.map(item=> <MenuItem item={item}/>)}
            </ul>
        </div>
    </>
  )
}
