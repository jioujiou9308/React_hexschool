import React from 'react'
import { useAuth } from '../auth/Context'
import { Navigate, Outlet } from 'react-router-dom'
const ProtectRoute = () => {
  const { token } = useAuth()
  if (!token) {
    return <Navigate to="/" replace />
  }
  return <Outlet />
}

export default ProtectRoute
