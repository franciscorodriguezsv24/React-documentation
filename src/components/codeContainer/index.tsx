import React from 'react'
import './ codeContainer.css'

type CodeContainer = {
    children: React.ReactNode
}
export const CodeContainer = ({ children }: CodeContainer) => {
  return (
    <div className='codeContainer'>{children}</div>
  )
}
