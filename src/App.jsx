import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Collection from "./pages/Collection"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/collections/:handle" element={<Collection/>}/>
      </Routes>
    </>
  )
}

export default App
