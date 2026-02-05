import { chdir } from 'process'
import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <>
    <div className='border border-success'>
        <h1>grp2 layout</h1>
      {children}
    </div>
   
  </>)
}

export default layout
