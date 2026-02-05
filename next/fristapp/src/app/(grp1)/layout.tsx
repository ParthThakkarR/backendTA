import React, { ReactNode } from 'react'

function layout({children}:{children:ReactNode}) {
  return (
    <div>
        <h1>grp layout</h1>
      {children}
    </div>
  )
}

export default layout
