import React from 'react'
import Features from './Features.jsx'
import logo from '../assets/react.svg'

function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-indigo-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-x-hidden">
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center pt-16 pb-8 px-4 sm:px-8 bg-gradient-to-r from-blue-100/80 to-purple-100/60 dark:from-slate-800 dark:to-slate-900">
        <img src={logo} alt="App Logo" className="w-20 h-20 sm:w-28 sm:h-28 mb-3 drop-shadow-lg" />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-white mb-2 tracking-tight text-center">Welcome to Sales Analytics</h1>
        <p className="text-md sm:text-lg md:text-2xl text-slate-700 dark:text-slate-200 mb-4 sm:mb-6 max-w-xl sm:max-w-2xl font-medium text-center">
          Visualize your sales, filter data, and discover insights with interactive dashboards and modern UI widgets.
        </p>
        <a href="/dashboard" className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg px-5 py-2 sm:px-6 sm:py-3 shadow transition mb-2 dark:bg-blue-900 dark:hover:bg-blue-800">Go to Dashboard</a>
        <div className="text-slate-500 dark:text-slate-300 text-sm mt-1">Use the navigation bar to explore more features.</div>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-5xl mx-auto px-2 py-8">
        <Features />
      </div>
    </div>
  )
}

export default Home
