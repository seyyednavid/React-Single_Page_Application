import Header from "./components/Header";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import RouterUser from "./pages/users/Router";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<RouterUser />} /> 
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
