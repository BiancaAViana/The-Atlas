import styled from "styled-components";

export const Component = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  background-color: #2f4558;

  .hidden {
    display: none;
  }

  .visible {
    display: inherit;
  }

  .menu-hamburguer {
    margin-right: 10px;
    position: relative;
    transform: rotate(90deg);
    z-index: 1;

    span {
      margin: 2px;
      position: relative;

      border: 1px solid #fff;
      border-radius: 2px;
    }
  }

`;

export const Logo = styled.div`
  margin-left: 10px;
  padding: 10px 0;
  display: flex;
  gap: 2px;

  a {
    height: 35px;
    display: flex;
    align-items: center;

    text-decoration: none;
    font-size: 1.2rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const HamburguerMenu = styled.div`
  margin-right: 10px;

  position: relative;
  transform: rotate(90deg);

  span {
    margin: 2px;
    position: relative;

    border: 1px solid #fff;
    border-radius: 2px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;
