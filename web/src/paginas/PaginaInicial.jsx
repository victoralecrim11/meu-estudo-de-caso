import { Link } from 'react-router-dom';
import { produtos } from './dados/produtos';
import '../App.css';


function PaginaInicial() {
  return (
    <div className="fundo-minimo conteudo-centralizado">
      {/* Cabeçalho */}
      <header className="cabecalho">
        <div className="container-principal">
          <h1 className="titulo">🛒 Loja de Produtos</h1>
          <p className="subtitulo">Encontre os melhores produtos de tecnologia</p>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main>
        <div className="container-principal">
          <h2 className="secao-titulo">Nossos Produtos</h2>

          <div className="grid-produtos">
            {produtos.map(produto => (
              <Link
                key={produto.id}
                to={`/produto/${produto.id}`}
                className="card-produto"
              >
                <div className="icone-produto">{produto.imagem}</div>
                <h2 className="nome-produto">{produto.nome}</h2>
                <p className="descricao-produto">{produto.descricao}</p>
                <div className="rodape-card">
                  <span className="preco-produto">
                    R$ {produto.preco.toFixed(2)}
                  </span>
                  <span className="detalhes-link">
                    Ver detalhes →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaginaInicial;
