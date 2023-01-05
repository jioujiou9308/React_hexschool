import React from 'react'
import { useForm } from 'react-hook-form'

const TodoListApi = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  // 提交的表單會送到設定好的api
  const onSubmit = (data) => {
    // 使用原生 fetch
    const API = 'https://todoo.5xcamp.us/users'
    const body = JSON.stringify({
      user: data
    })
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body
    }

    fetch(API, requestOptions)
      .then(response => {
        return response.json()
      })
      .then(responseJson => {
        alert(responseJson.message)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      {/* 練習區 */}
      <input
        type="email"
        placeholder="email"
        {...register('email', {
          required: { value: true, message: '此欄位必填寫' },
          pattern: {
            value: /^[\w- .]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: '不符合 Email 規則'
          }
        })}
      />
      {/* 這是所謂的可串聯運算子，如果 */}
      {errors.email?.message}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <input
          type="text"
          placeholder="nickname"
          {...register('nickname', {
            required: { value: true, message: '此欄位必填寫' }
          })}
        />
        {errors.nickname?.message}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register('password', {
            required: { value: true, message: '此欄位必填寫' },
            minLength: { value: 8, message: '密碼至少為 8 碼' }
          })}
        />
        {errors.password?.message}
        <br />
        <input type="submit" value="註冊" />
      </form>
    </div>
  )
}

export default TodoListApi
