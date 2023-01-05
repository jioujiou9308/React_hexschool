import React from 'react'

const LogicTest = () => {
  const users = [
    {
      name: 'Blueberry',
      github: {
        account: 'B-l-u-e-b-e-r-r-y',
        url: 'https://github.com/B-l-u-e-b-e-r-r-y'
      }
    }, {
      name: 'Foo',
      github: null
    }
  ]

  return (
    <>
      {/* 可以簡化寫成users.map(user => user.github.account) */}
      <div>{users.map(function (user) {
        return (
          user.github && user.github.account
        )
      }
      )
      }</div>
    </>
  )
}

export default LogicTest
