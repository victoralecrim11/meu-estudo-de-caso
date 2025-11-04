import { useParams, useNavigate } from "react-router-dom";
import { produtos } from "./dados/produtos";
import '../App.css';

function PaginaDetalhesProduto() {
  const { id } = useParams();
  const navegar = useNavigate();

  // Buscar o produto pelo ID da URL
  const produto = produtos.find((p) => p.id === parseInt(id));

  // Se o produto não existir, mostrar mensagem de erro
  if (!produto) {
    return (
      <div className="fundo-minimo conteudo-centralizado">
        <div className="card-erro">
          <div className="icone-erro">❌</div>
          <h2 className="titulo-erro">Produto não encontrado</h2>
          <button onClick={() => navegar("/")} className="botao-primario">
            ← Voltar para a loja
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fundo-minimo conteudo-centralizado">
      {/* Cabeçalho */}
      <header className="cabecalho">
        <button onClick={() => navegar("/")} className="link-voltar">
          ← Voltar para a loja
        </button>
        <h1 className="titulo">Detalhes do Produto</h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="container-detalhes" style={{ Width: '1960px' }}>
        <div className="card-detalhes">
          <div className="colunas-detalhes">
            {/* Imagem do Produto */}
            <div className="lado-imagem">
              <div className="icone-detalhe">{produto.imagem}</div>
            </div>

            {/* Informações do Produto */}
            <div className="lado-info">
              <h2 className="nome-detalhe">{produto.nome}</h2>

              <div className="preco-bloco">
                <span className="preco-detalhe">R$ {produto.preco.toFixed(2)}</span>
              </div>

              <div className="descricao-bloco">
                <h3 className="subtitulo-bloco">Descrição</h3>
                <p className="texto-descricao">{produto.descricao}</p>
              </div>

              <div className="caracteristicas-bloco">
                <h3 className="subtitulo-bloco">Características</h3>
                <ul className="lista-caracteristicas">
                  <li>✓ Garantia de 12 meses</li>
                  <li>✓ Frete grátis para todo Brasil</li>
                  <li>✓ Produto original e lacrado</li>
                  <li>✓ Entrega rápida e segura</li>
                </ul>
              </div>

              <div className="acoes-bloco">
                <button className="botao-primario">🛒 Adicionar ao Carrinho</button>
                <button className="botao-secundario">❤️ Favoritar</button>
              </div>
            </div>
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div className="relacionados-bloco">
          <h3 className="secao-pequena">Outros Produtos que Você Pode Gostar</h3>
          <div className="grid-relacionados">
            {produtos
              .filter((p) => p.id !== produto.id)
              .slice(0, 3)
              .map((p) => (
                <button key={p.id} onClick={() => navegar(`/produto/${p.id}`)} className="card-relacionado">
                  <div className="icone-relacionado">{p.imagem}</div>
                  <p className="nome-relacionado">{p.nome}</p>
                  <p className="preco-relacionado">R$ {p.preco.toFixed(2)}</p>
                </button>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PaginaDetalhesProduto;
