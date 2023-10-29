import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";
import { useState} from 'react'
import Signup from "./pages/sign-up";
import NewVideo from "./pages/new-video";


function App() {
  const [showMenuAndHeader, setShowMenuAndHeader] = useState(true);
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/sign-up" element={<Signup/>}/>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <div style={{ width: "100%", display: "flex" }}>
                    <div>
                      <Menu />
                    </div>
                    <div style={{ width: "100%", padding: "20px 70px", boxSizing: "border-box", display: "flex", justifyContent: "center" }}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/shorts" />
                        <Route path="/inscricoes" />
                        <Route path="/library" element={<Library />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/new-video" element={<NewVideo />} />
                      </Routes>
                    </div>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;



//DESAFIOS:

/*
IMPLEMENTAÇÃO DE PESQUISA
*/