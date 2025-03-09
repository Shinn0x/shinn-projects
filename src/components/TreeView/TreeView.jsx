import React from 'react'
import { navigationMenu } from './data'
import { MenuList } from './MenuList'
import './TreeView.css'

export const TreeView = () => {

  return (
    <>
        <section id="treeView" className="section-padding">
            <div className="container ">
                <h1 className='fw-bold text-center display-4'>Tree View Navigation</h1>
                <div className="row ">
                    <div className="col-lg-3 bg-dark text-light p-5">
                        <MenuList menuList={navigationMenu}/>
                    </div>
                </div>
            </div>

        </section>
    </>
  )
}
