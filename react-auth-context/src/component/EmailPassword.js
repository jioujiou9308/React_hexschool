import React from 'react'
import { useForm } from 'react-hook-form'

const EmailPassword = () => {
  //     註冊表單欄位/送出表單事件處理/錯誤狀態處理
  const { register, handleSubmit, formState: { errors } } = useForm()
  // {myName:'123456',email:'p178963p@gmail.com'}
  // 確認資料正確性 //貼心的幫你處理表單，用成乾淨的物件
  const onSubmit = data => alert(JSON.stringify(data))
  console.log(errors)
  return (
    <div>
      {/* handleSubmit要放一個自製函數，他會把資料放在onSubmit第一個參數上(data) */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          帳號:
          <input placeholder="帳號" name="account"
            {...register('account', { required: true })} />
          {/* 邏輯運算子，都沒填errors.account=true && 此欄位必填=true  所以顯示後者 */}
          {errors.account && <span>此欄位必填</span>}

          {/* <input type='text' placeholder="輸入帳號"
          // 屬於JSX的 register 功能，是欄位內設定的條件
            {...register('myName', { required: true, min: 6, maxLength: 80 })} /> */}
        </div>
        <div>
          密碼:
          <input
            name="password" type="password" placeholder="密碼"
            {...register('password', { required: true })}/>
          {/* 也是邏輯運算子，此欄位必填 = trun  || errors.password = true 所以顯示前者 */}
          {errors.password && <span>此欄位必填</span>}

          {/* <input type="text" placeholder="Email"
          // pattern 為正規表達式
            {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} /> */}
        </div>
        <input type="submit" />
      </form>
    </div>
  )
}

export default EmailPassword
