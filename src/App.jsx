
import Header from "./components/Header/Header";
import Contato from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import './index.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App(){
  return(
    <>
    <Router>
          
          <Header/>

        <Routes>
            
            <Route path="/Home" element={<Home />} />
            <Route path="/Contato" element={<Contato/>} />
          
        </Routes>

       </Router>
      
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <header style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <h1>Site Responsivo</h1>
      </header>
      <main style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', width: '100%' }}>
        <section style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
          <h2>Seção 1</h2>
          <p>Conteúdo responsivo aqui.</p>
        </section>
        <section style={{ background: '#e4e4e4', padding: '20px', borderRadius: '8px' }}>
          <h2>Seção 2</h2>
          <p>Mais conteúdo responsivo.</p>
        </section>
      </main>
    </div>
    </>
  )
}

