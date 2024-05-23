import styled from "styled-components";

export const Component = styled.section`
  img {
    width: 100%;
  }

  span{
    padding: 10px;
    background-color: #D9D9D9;
    line-height:30px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  background-color: #2f4558;
  color: #fff;


  div {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 25px;
    text-align: center;

     h1 {
        font-size: 2rem;
        text-decoration: underline;
        text-transform: uppercase;
    }

    p {
      margin: 0 auto;
      width: 80%;

      font-weight: bold;
    }
  }
`;
