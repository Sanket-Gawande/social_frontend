import React, { useEffect } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AddPost from './components/AddPost'
import IndividualPost from './components/Posts/IndividualPost'
import { useSelector, useDispatch } from 'react-redux'
import { login } from './Slices/loginSlice'
const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    
    
    const profile = JSON.parse(localStorage.getItem('profile'))
    dispatch(login({profile }))
  }, [])
  return (
    <>
      <Header isLogin={user.profile} />

      <Routes>
        <Route path="/" element={<Home isLogin={user.profile} />}>
          {!user.profile ? (  
            <>
              <Route index element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          ) : (
            <Route index element={<AddPost />} />
          )}
        </Route>
        <Route path="/post/:id" element={<IndividualPost />} />
        <Route element={<h4>Error</h4>}></Route>
      </Routes>
    </>
  )
}

export default App
