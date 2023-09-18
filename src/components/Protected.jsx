import React from 'react'
import { Navigate } from 'react-router-dom'
function Protected({ admin, children }) {
  if (!admin) {
    return <Navigate to="/adminlogin" replace />
  }
  return children
}
export default Protected