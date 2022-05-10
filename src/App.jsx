import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import AddPost from './components/AddPost'
import IndividualPost from './components/Posts/IndividualPost'
const App = () => {
 const login =0;
  return (
    <>
      <Header isLogin={login}/>
      <Routes>
        <Route path="/" element={<Home isLogin={login} />}>
          {!login ? (
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
