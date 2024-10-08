import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Spline from '@splinetool/react-spline';
import ParticlesComponent from './components/Particles';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-ctr">
        <ParticlesComponent id="particles" />
        <Sidebar className="sidebar" />
        <Content className="content" />
      </div>
    </>
  )
}

export default App
