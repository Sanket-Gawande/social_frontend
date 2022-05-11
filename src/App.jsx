import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AddPost from './components/AddPost'
import IndividualPost from './components/Posts/IndividualPost'
import { useSelector } from 'react-redux'
const App = () => {
  const user = useSelector((state) => state.user)

  return (
    <>
      <Header isLogin={user.token} />
      <Routes>
        <Route path="/" element={<Home isLogin={user.token} />}>
          {!user.token ? (
            <>
              <Route index element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <Route index element={<AddPost />} />
          )}
        </Route>
        <Route path="/post/:id" element={<IndividualPost />} />
      </Routes>
    </>
  )
}

export default App
