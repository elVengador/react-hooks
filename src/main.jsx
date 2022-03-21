import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { HookSetState } from './HooksPages/HookUseState'
import { HookSetStateObjects } from './HooksPages/HookUseStateObjects'
import { HookUseEffect } from './HooksPages/HookUseEffect'
import { HookUseEffectFetchData } from './HooksPages/HookUseEffectFetchData'
import { MiniBlog } from './Pages/MiniBlog'
import { SearchPosts } from './Pages/SearchPosts'
import { HookUseContext } from './HooksPages/HookUseContext'
import { HookUseReducer } from './HooksPages/HookUseReducer'

export const UserContext = React.createContext({ nick: 'elVengador King', age: 1000 })

ReactDOM.render(
  <React.StrictMode>
    {/* <HookSetState /> */}
    {/* <HookSetStateObjects /> */}
    {/* <HookUseEffect /> */}
    {/* <HookUseEffectFetchData /> */}
    {/* <MiniBlog /> */}
    {/* <SearchPosts /> */}
    {/* <UserContext.Provider value={{ nick: 'elVengador', age: 100 }}>
      <HookUseContext />
    </UserContext.Provider> */}
    <HookUseReducer />
  </React.StrictMode>,
  document.getElementById('root')
)
