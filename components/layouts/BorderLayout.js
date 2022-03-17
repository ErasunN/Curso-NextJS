import React from 'react'

export const BorderLayout = ({ children }) => {
  return (
    <div style={{
        backgroundColor: "rgba(0,125,125,0.5)",
        padding: "10px",
        borderRadius: "5px"
    }}>
        {children}
    </div>
  )
}
