import './App.css'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ChordTableInput from './components/ChordTableInput/ChordTableInput'
import Menu from './components/Menu/Menu'
import Overview from './components/Overview/Overview'
import New from './components/New/New'
import Play from './components/Play/Play'
import Help from './components/Help/Help'
import Credits from './components/Credits/Credits'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handelOpenMenu = ():void => {
    const menu = document.getElementById('menu')

    if (!isMenuOpen) {
      // if closed, remove hidden
      menu?.classList.remove('hidden')
      setIsMenuOpen(!isMenuOpen)
      setTimeout(() =>{
        // with the timeout remove opacity and rotate
        menu?.classList.remove('opacity-0', '-rotate-90')
      }, 100)
    } else {
      // if opened, add opacity and rotate
      menu?.classList.add('opacity-0', '-rotate-90')
      setIsMenuOpen(!isMenuOpen)
      setTimeout(() => {
        // with the timeout add hidden
        menu?.classList.add('hidden')
      }, 100)
    }
  } 

  return (
    <>
      <div className="relative">
        <div className="relative bg-[#222] block border p-5 rounded-tl-3xl rounded-br-3xl z-50">
          <h1 className="text-[#222] drop-shadow-[0_0_2px_rgba(255,255,255,255.2)]">Tommy'sChords</h1>
          <p className="italic text-right text-sm mt-[-.7rem] mr-1 tracking-[2.5px]">Learn chords playfully</p>
          <div 
            id="menu-button" 
            className="absolute border h-5 w-5 rounded-xl bottom-[.5rem] left-[.5rem] cursor-pointer"
            onClick={() => handelOpenMenu()}
          >
            {/* Hamburger Icon */}
            <div 
              id="hamburger-icon"
              >
              <div className="bg-[#ddd] h-[.1rem] w-[.82rem] rounded ml-[.155rem] mt-[.3rem]"></div>
              <div className="bg-[#ddd] h-[.1rem] w-[.82rem] rounded ml-[.155rem] mt-[.1rem]"></div>
              <div className="bg-[#ddd] h-[.1rem] w-[.82rem] rounded ml-[.155rem] mt-[.1rem]"></div>
            </div>
          </div>
        </div>
        <Menu />
        <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/new" element={<New />} />
          <Route path="/play" element={<Play />} />
          <Route path="/help" element={<Help />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        {/* <ChordTableInput  /> */}
      </div>
    </>
  )
}

export default App
