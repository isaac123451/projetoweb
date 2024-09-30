import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Seção do banner promocional */}
      <section className="banner">
        <div className="banner-text">
          <h1>Bem-vindo à Nossa Loja!</h1>
          <p>Encontre os melhores produtos com descontos incríveis.</p>
          <button className="shop-now-btn">Compre Agora</button>
        </div>
      </section>
      {/* Seção de produtos em destaque */}
      <section className="featured-products">
        <h2>Produtos em Destaque</h2>
        <div className="product-grid">
          {/* Exemplo de produtos */}
          <div className="product-card">
            <h3>Produto 1</h3>
            <p>R$ 99,90</p>
            <button>Comprar</button>
          </div>
          <div className="product-card">
            <h3>Produto 2</h3>
            <p>R$ 79,90</p>
            <button>Comprar</button>
          </div>
          <div className="product-card">
            <h3>Produto 3</h3>
            <p>R$ 59,90</p>
            <button>Comprar</button>
          </div>
        </div>
      </section>

      {/* Seção de promoções */}
      <section className="promotion">
        <h2>Promoções</h2>
        <div className="promotion-details">
          <p>Compre 2 e ganhe 1 grátis em todos os acessórios.</p>
          <button>Saiba Mais</button>
        </div>
      </section>
    </div>
  );
}
