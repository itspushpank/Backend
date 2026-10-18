import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'bg-indigo-600 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`

  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <NavLink to="/feed" className="text-xl font-bold text-white">
            Note<span className="text-indigo-400">App</span>
          </NavLink>

          {/* Links */}
          <div className="flex items-center gap-2">
            <NavLink to="/feed" className={linkClass}>
              Feed
            </NavLink>
            <NavLink to="/create-post" className={linkClass}>
              Create Post
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/feed' element={<Feed />} />
      </Routes>
    </Router>
  )
}

export default App