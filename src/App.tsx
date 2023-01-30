import './App.css'
import ChordTableInput from './components/ChordTableInput/ChordTableInput'

function App() {
  

  return (
    <>
      <div className="border p-5 rounded-tl-xl rounded-br-xl relative">
        <h1 className="">TommyChords</h1>
        <p className="text-right text-sm mt-[-.7rem]">Learning chords playfully</p>
        <div className="absolute border h-4 w-4 rounded-xl bottom-[.5rem] left-[.5rem]"></div>
      </div>
      <ChordTableInput  />
    </>
  )
}

export default App
