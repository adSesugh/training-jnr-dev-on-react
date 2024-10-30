import React from 'react'
import Counter from './counter'
import ApiCall from './api-call'
import ConfirmAlert from './ConfirmAlert'
import Dashboard from './Dasboard'
import UserList from './user-list'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/users' element={<UserList />} />
      <Route path='/api' element={<ApiCall />} />
      <Route path='/wallet' element={<ConfirmAlert />} />
    </Routes>
  )
}