
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'

import React, { useState, useEffect } from 'react'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [dark, setDark] = useState(getInitialTheme)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  // Demo login/logout handlers
  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <Router>
      <div className="w-screen min-h-screen min-w-screen flex flex-col bg-gradient-to-br from-indigo-100 to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        <Navbar dark={dark} setDark={setDark} isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
        <main className="flex-1 flex flex-col items-center justify-center w-full pt-24 bg-transparent text-inherit">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <footer className="mt-6 mb-2 text-center text-slate-500 dark:text-slate-300 text-sm">
          &copy; {new Date().getFullYear()} Sales Analytics Dashboard &mdash; Powered by React &amp; Chart.js
        </footer>
      </div>
    </Router>
  )
}

export default App
