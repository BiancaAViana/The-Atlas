import styled from "styled-components";

export const Component = styled.nav`
  padding: 60px 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0px;
  background-color: #2f4558f7;

  .visible {
    display: inherit;
  }

  .hidden {
    display: none;
  }

  a {
    text-decoration: none;

    li {
      padding: 20px;

      text-transform: uppercase;
      font-weight: bold;
      list-style: none;
      color: #fff;
      border-bottom: 1px solid #fff;

      &:active {
        color: #939393;
      }
    }
  }
`;

/* 
   Menu na tela de 1024px
   li {
        padding: 10px;
        border-left: 2px solid #fff;
        list-style: none;
        color: #fff;
    }

    li:first-child{
        border-left: none;
    } */
