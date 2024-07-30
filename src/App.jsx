import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Collection from "./pages/Collection"
import Product from "./pages/Product"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/collections/:handle" element={<Collection/>}/>
        <Route path="/products/:handle" element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
