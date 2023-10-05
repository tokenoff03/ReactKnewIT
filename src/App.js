
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Films from './Components/Films';
import Profile from './Components/Profile';

function App() {
  
  return (
    <div className="App">
      <div className="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/films" element={<Films/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>      
        <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
