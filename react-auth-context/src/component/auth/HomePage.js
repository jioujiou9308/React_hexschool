import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useAuth } from './Context'

const HomePage = () => {
  const { token } = useAuth()
  return (
    <div>
      <h1>這是主頁面喔</h1>
      <div className='title'>表頭
        <br />
        <Link to='login'>登入</Link>
        <br />
        <Link to='signup'>註冊</Link>
        <br />
        {
          token && <li>
            <Link to='/todo'>todo</Link>
          </li>
        }
      </div>
      <Outlet/>

      <div className='title'>表尾</div>
    </div>
  )
}

export default HomePage
