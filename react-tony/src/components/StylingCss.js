import React, { useState } from 'react'
import clsx from 'clsx'


function StylingCss() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div>
        <p
          onClick={() => setIsActive(prevState => !prevState)}
          className={clsx(
            'title',
            isActive && 'active'
          )}
          // className="title"
          // className={isActive && 'active' }
        >
          this is condition classname by state
        </p>
    </div>
  )
}

export default StylingCss
