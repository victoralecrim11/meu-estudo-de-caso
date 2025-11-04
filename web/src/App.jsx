import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaDetalhesProduto from './paginas/PaginaDetalhesProduto';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota da página inicial */}
        <Route path="/" element={<PaginaInicial />} />
        
        {/* Rota da página de detalhes do produto */}
        <Route path="/produto/:id" element={<PaginaDetalhesProduto />} />
      </Routes>
    </Router>
  );
}

export default App;