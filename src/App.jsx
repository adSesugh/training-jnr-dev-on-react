import React from 'react'
import Counter from './counter'
import ApiCall from './api-call'
import ConfirmAlert from './ConfirmAlert'

export default function App() {
  return (
    <div className='h-screen w-full overflow-y-scroll bg-slate-200 p-4'>
      {/* <h1>Hello world</h1>
      <p>Learning react</p>
      <Counter /> */}
      {/* <ApiCall /> */}
      <ConfirmAlert />
    </div>
  )
}