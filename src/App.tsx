import './App.css'
import ChordTableInput from './components/ChordTableInput/ChordTableInput'

function App() {
  

  return (
    <>
      <div className="border p-5 rounded-tl-3xl rounded-br-3xl relative">
        <h1 className="text-[#222] drop-shadow-[0_0_2px_rgba(255,255,255,255.2)]">Tommy'sChords</h1>
        <p className="italic text-right text-sm mt-[-.7rem] mr-1 tracking-[2.5px]">Learn chords playfully</p>
        <div className="absolute border h-4 w-4 rounded-xl bottom-[.5rem] left-[.5rem]"></div>
      </div>
      <ChordTableInput  />
    </>
  )
}

export default App
