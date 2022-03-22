import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App'
import { HookUseState } from './HooksPages/HookUseState'
import { HookSetStateObjects } from './HooksPages/HookUseStateObjects'
import { HookUseEffect } from './HooksPages/HookUseEffect'
import { HookUseEffectFetchData } from './HooksPages/HookUseEffectFetchData'
import { MiniBlog } from './Pages/MiniBlog'
import { SearchPosts } from './Pages/SearchPosts'
import { HookUseContext } from './HooksPages/HookUseContext'
import { HookUseReducer } from './HooksPages/HookUseReducer'
import { HookUseMemo } from './HooksPages/HookUseMemo'
import { HookUseCallback } from './HooksPages/HookUseCallback'
import { HookUseRef } from './HooksPages/HookUseRef'

export const UserContext = React.createContext({ nick: 'elVengador King', age: 1000 })

const activeNav = ({ isActive }) => ({
  borderBottom: isActive ? "solid 2px royalblue" : "none",
  color: isActive ? 'white' : 'white'
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <nav>
          <ol>
            <NavLink to="/use-state" style={activeNav} >useState</NavLink>
            <NavLink to="/use-state-objects" style={activeNav}>useState with objects</NavLink>
            <NavLink to="/use-effect" style={activeNav}>useEffect</NavLink>
            <NavLink to="/use-effect-fetch-data" style={activeNav}>useEffect fetch data</NavLink>
            <NavLink to="/mini-blog" style={activeNav}>mini blog</NavLink>
            <NavLink to="/search-post" style={activeNav}>search post</NavLink>
            <NavLink to="/use-context" style={activeNav}>useContext</NavLink>
            <NavLink to="/use-reducer" style={activeNav}>useReducer</NavLink>
            <NavLink to="/use-memo" style={activeNav}>useMemo</NavLink>
            <NavLink to="/use-callback" style={activeNav}>useCallback</NavLink>
            <NavLink to="/use-ref" style={activeNav}>useRef</NavLink>
          </ol>
        </nav>
      </header>
      <Routes>
        <Route path='use-state' element={<HookUseState />} />
        <Route path='use-state-objects' element={<HookSetStateObjects />} />
        <Route path='use-effect' element={<HookUseEffect />} />
        <Route path='use-effect-fetch-data' element={<HookUseEffectFetchData />} />
        <Route path='mini-blog' element={<MiniBlog />} />
        <Route path='search-post' element={<SearchPosts />} />
        <Route path='use-context' element={
          <UserContext.Provider value={{ nick: 'elVengador', age: 100 }}>
            <HookUseContext />
          </UserContext.Provider>
        } />
        <Route path='use-reducer' element={<HookUseReducer />} />
        <Route path='use-memo' element={<HookUseMemo />} />
        <Route path='use-callback' element={<HookUseCallback />} />
        <Route path='use-ref' element={<HookUseRef />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
