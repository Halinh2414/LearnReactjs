import React, { memo } from 'react'

function MemoHook({ title, handleTitle }) {
  console.log('============memo hooks')
  return (
    <div>
      this is memo hooks: {title}
      <button type="button" onClick={handleTitle}>Submit Title</button>
    </div>
  )
}

export default memo(MemoHook)

// function areEqual(prevProps, nextProps) {
//   return prevProps.title === nextProps.title;
// }