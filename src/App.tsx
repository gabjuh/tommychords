import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ChordTableInput from './components/ChordTableInput/ChordTableInput'
import Menu from './components/Menu/Menu'
import Overview from './components/Overview/Overview'
import New from './components/New/New'
import Play from './components/Play/Play'
import Help from './components/Help/Help'
import Credits from './components/Credits/Credits'
import ColorThemeButton from './components/ColorTheme/ColorThemeButton'

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)

  const toggleMenuOpen = () => setIsMenuOpen(!isMenuOpen)

  const closeMenu = (event: any) => {
    if (!event.target.closest("#menu")) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // setIsMenuOpen(false)
    document.addEventListener('click', closeMenu)
    return () => {
      document.removeEventListener('click', closeMenu)
    }
  }, [])


  const [darkTheme, setDarkTheme] = useState(true) 

  const handleTheme = () => {
    setDarkTheme(!darkTheme)
  }

  const handelOpenMenu = () => {
    const menu = document.getElementById('menu') as HTMLElement | null
  
    if (!isMenuOpen) {
      // if closed, remove hidden
      menu?.classList.remove('hidden')
      toggleMenuOpen()
      setTimeout(() =>{
        // with the timeout remove opacity and rotate
        menu?.classList.remove('opacity-0', '-rotate-90')
      }, 100)
    } else {
      // if opened, add opacity-0 and rotate
      menu?.classList.add('opacity-0', '-rotate-90')
      toggleMenuOpen()
      setTimeout(() => {
        // with the timeout add hidden
        menu?.classList.add('hidden')
      }, 100)
    }
  } 

  return (
    <>
      <div className="relative">
        <div className="relative min-h-[8.5rem] dark:bg-[#222] bg-[#fff] block border border-[#333] dark:border-[#eee] p-5 rounded-tl-3xl rounded-br-3xl z-50">
          {/* First title */}
          <h1 className="dark:text-[#eee] text-[#222] dark:drop-shadow-[0_0_2px_rgba(255,255,255,255.2)] drop-shadow-[0_0_2px_rgba(20,20,20,1)]">Tommy'sChords</h1>
          {/* Second title */}
          <p className="italic text-[#333] dark:text-[#eee] text-right text-sm mt-[-.7rem] mr-1 tracking-[2.5px]">Learn chords playfully</p>
          {/* Menu Button */}
          <div 
            id="menu-button" 
            className="absolute h-[2.5rem] w-10 bottom-[.17rem] left-[.2rem] hover:bg-gray-100 dark:hover:bg-gray-700 pl-[.515rem] pt-[.6rem] rounded-xl cursor-pointer"
            onClick={() => handelOpenMenu()}
          >
            <div 
              id="hamburger-icon"
              >
              <div className="dark:bg-[#ddd] bg-[#333] h-[.15rem] w-[1rem] rounded ml-[.155rem] mt-[.3rem]"></div>
              <div className="dark:bg-[#ddd] bg-[#333] h-[.15rem] w-[1rem] rounded ml-[.155rem] mt-[.1rem]"></div>
              <div className="dark:bg-[#ddd] bg-[#333] h-[.15rem] w-[1rem] rounded ml-[.155rem] mt-[.1rem]"></div>
            </div>
          </div>
          <div className="absolute right-1 bottom-1">
            <ColorThemeButton 
              handleTheme={handleTheme}
              darkTheme={darkTheme}
            />
          </div>
        </div>
        <Menu />
        <Routes>
          <Route path="/" element={<p>Home - static</p>} />
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
