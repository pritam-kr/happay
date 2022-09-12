 
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Nav } from "./components";
 
import { Cart, Home } from "./pages";
 

function App() {
  
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
