
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ dark, setDark, isLoggedIn, onLogin, onLogout }) {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-slate-900/90 shadow-md fixed top-0 left-0 z-50">
      <Link to="/" className="flex items-center gap-3 group">
        <img src="/vite.svg" alt="Logo" className="w-10 h-10 group-hover:scale-110 transition-transform" />
        <span className="text-xl font-bold text-blue-700 dark:text-white group-hover:text-blue-900 transition-colors">SalesApp</span>
      </Link>
      <div className="flex gap-4 items-center relative">
        {/* Mobile hamburger */}
        <button
          className="md:hidden mr-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          onClick={() => setDark(d => !d)}
          className="mr-2 px-3 py-1.5 rounded-lg font-semibold text-slate-700 dark:text-white bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 shadow transition"
          title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {dark ? '🌙 Dark' : '☀️ Light'}
        </button>
        <div className="hidden md:block">
          <Link to="/dashboard" className={`text-lg font-medium transition-colors ${location.pathname === '/dashboard' ? 'text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400'}`}>Dashboard</Link>
        </div>
        {/* Profile Avatar Button */}
  <div className="relative">
          <button
            onClick={() => setMenuOpen(m => !m)}
            className="ml-4 w-10 h-10 rounded-full border-2 border-blue-400 dark:border-slate-600 bg-slate-200 dark:bg-slate-700 flex items-center justify-center shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
            title="Profile"
          >
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800"
            />
          </button>
          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-2 z-50 border border-slate-200 dark:border-slate-700">
              {!isLoggedIn ? (
                <>
                  <Link to="/login" onClick={() => setMenuOpen(false)}>
                    <button className="w-full text-left px-4 py-2 my-1 rounded-md font-semibold text-blue-700 dark:text-blue-300 bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 transition">Login</button>
                  </Link>
                  <Link to="/signup" onClick={() => setMenuOpen(false)}>
                    <button className="w-full text-left px-4 py-2 my-1 rounded-md font-semibold text-purple-700 dark:text-purple-300 bg-slate-100 dark:bg-slate-700 hover:bg-purple-100 dark:hover:bg-purple-900 transition">Sign Up</button>
                  </Link>
                </>
              ) : (
                <button
                  onClick={() => { onLogout(); setMenuOpen(false); }}
                  className="w-full text-left px-4 py-2 my-1 rounded-md font-semibold text-red-700 dark:text-red-300 bg-slate-100 dark:bg-slate-700 hover:bg-red-100 dark:hover:bg-red-900 transition"
                >
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 right-4 left-4 bg-white dark:bg-slate-900 rounded-lg shadow-lg p-4 z-40">
          <div className="flex flex-col gap-2">
            <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Dashboard</Link>
            {!isLoggedIn ? (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Login</Link>
                <Link to="/signup" onClick={() => setMobileOpen(false)} className="px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Sign Up</Link>
              </>
            ) : (
              <button onClick={() => { onLogout(); setMobileOpen(false) }} className="text-left px-3 py-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800">Logout</button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}


export default Navbar
