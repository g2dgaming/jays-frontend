import React from 'react'
import Home from './components/Home';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

function App() {
  return (
    <div>
      <AlertProvider template={AlertTemplate}>
        <Home/>
      </AlertProvider>
    </div>
  )
}

export default App
