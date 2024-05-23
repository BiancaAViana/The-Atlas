import styled from "styled-components";

export const Component = styled.section`
   padding: 30px 0;
    display: flex;
    gap: 20px;

    border-bottom: 2px solid #000;

    img {
        margin: auto 0;
        width: 100%;
        min-width: 40px;
        max-width: 150px;
        height:100%;
        max-height: 150px;
        
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap:30px;

        .article-data {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
        }

        .info {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }
`