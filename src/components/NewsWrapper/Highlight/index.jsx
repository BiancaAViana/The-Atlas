//styled components
import { Component, Wrapper } from "./style";

//components
import mainImg from '../../../assets/images/tekken8.png'


export function Highlight() {
  return (
    <Component>

      <span>destaque</span>
      
      <Wrapper>
        <img src={mainImg} alt="imagem principal"/>

        {/*Esse h1 e noticia virão de outro lugar!*/}
        <div>
          <h1 color='#fff' size='20px'>tekken 8</h1>
          <p>
            O novo capítulo da franquia de jogos de luta da Namco chega em Janeiro.
          </p>
        </div>
      </Wrapper>
    </Component>
  );
}
