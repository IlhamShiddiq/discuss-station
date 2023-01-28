import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BaseLayout from './layout/base/base-layout'
import HomePage from '../pages/home-page'
import DetailPage from '../pages/detail-page'
import LeaderboardPage from '../pages/leaderboard-page'
import LoginPage from '../pages/login-page'
import RegisterPage from '../pages/register-page'

const DiscussApp = () => {
  return (
      <Routes>
        <Route element={<BaseLayout />}>
            <Route path="/*" element={<HomePage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/detail" element={<DetailPage />}></Route>
            <Route path="/leaderboard" element={<LeaderboardPage />}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
  )
}

export default DiscussApp
