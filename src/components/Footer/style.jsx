import styled from "styled-components";

export const Component = styled.footer`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
  color: #fff;
  background-color: #2f4558;

  h3 {
    text-transform: uppercase;
  }
  ul {
    margin-bottom: 30px;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
