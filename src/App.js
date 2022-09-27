import { Routes, Route } from "react-router-dom";
import { useState } from "react";


import Home from "./pages/home/home";
import About from "./pages/about/about";
import Favorites from "./pages/favorites/favorites";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Backgroundimg from "./components/background-img/backgroundimg";

import "./App.css";

function App() {
  const [randomize, setRandomize] = useState(false);

  const handleRandomize = () => {
    setRandomize(!randomize)
  }
 
  return (
    <div className="App">
      <Backgroundimg/>
      <div className="main-card">
        <Header handleRandomize={handleRandomize} />

        <main>
          <Routes>
            <Route path="/" element={<Home randomize={randomize}/>} />
            <Route path="about" element={<About />} />
            <Route path="favorites" element={<Favorites />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
