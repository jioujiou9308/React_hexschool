
import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import EmailPassword from './component/EmailPassword'
// import TodoListApi from './component/TodoListApi'
// import LogicTest from './component/LogicTest'
// import UseContextColor from './component/UseContextColor'
// ------------------------------------------登入、註冊製作
import HomePage from './component/auth/HomePage'
import Login from './component/auth/Login'
import SignUp from './component/auth/SignUp'
import ProtectRoute from './component/protect/ProtectRoute'
import Todo from './component/protect/Todo'

import { AuthContext } from './component/auth/Context'

function App () {
  const [token, setToken] = useState(null)
  return (
    <div className="App">
      <div>
        {/* react-form-hook範例 */}
        {/* <EmailPassword/> */}
        {/* <TodoListApi/> */}
        {/* 邏輯運算子的範例 */}
        {/* <LogicTest/> */}
        {/* <UseContextColor/> */}
      </div>
      {/* -----------------------------------登入、註冊製作 */}
      <div>
        <AuthContext.Provider value={{ token, setToken }}>
          <Routes>

            <Route path='/' element={<HomePage />} >
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route element={<ProtectRoute/>}>
                <Route path='/todo' element={<Todo/>}/>
              </Route>
            </Route>
          </Routes>
        </AuthContext.Provider>
      </div>
    </div>

  )
}

export default App
