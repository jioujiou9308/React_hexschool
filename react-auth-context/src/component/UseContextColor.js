import React, { createContext, useContext } from 'react'
// 將我要建立的環境設定在MyContext的變數中
const MyContext = createContext()

function ThemeText () {
  const theme = useContext(MyContext)
  return (
    <>
      <p style={{ color: theme.background }}>
          我是theme 中的 light background 環境
      </p>
    </>
  )
}

function ThemeButton () {
  const aaa = useContext(MyContext)
  return (
    <>
      <button style={{ background: aaa.background, color: aaa.foreground }}>
      我是theme 中的 button 按鈕
      </button>
    </>
  )
}

const UseContextColor = () => {
  const themes = {
    light: {
      foreground: '#ffffff',
      background: '#318675'
    }
  }
  return (
  // 將我設定的value注入(provider)到MyContext中
    <MyContext.Provider value={themes.light}>
      <ThemeText/>
      <ThemeButton/>
    </MyContext.Provider>
  )
}

export default UseContextColor
