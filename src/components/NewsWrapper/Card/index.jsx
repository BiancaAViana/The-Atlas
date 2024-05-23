import { Component } from "./style";

import notFound from '../../../assets/images/not-found.jpg'

export function Card() {
  return (
    <Component>
          <img src={notFound} alt="news-ico" />

          <div className="wrapper">
            <div className="article-data">
              <span>artigo</span>
              <span>publicado xx/xx/xxxx, 00:00h</span>
            </div>
            
            <div className="info">
              <h3>Star Wars Outlaws está saindo do forno!</h3>
              <p>
                Desenvolvido pela Ubisoft, Star Wars Outlaws é um jogo de
                exploração e mundo abert...
              </p>
            </div>
          </div>

    </Component>
  );
}
