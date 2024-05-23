import styled from "styled-components"

export const Component = styled.div`
    /* height: 60px; */
    
    height: 100vh;
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 999;
    top: 0;

    background-color: #2f4558f7;

    div{

        margin: 40px auto;
        display: flex;
        align-items:baseline;
        justify-content: center;
        gap: 2px;
        position: fixed; 
        right: 0;
        left: 0;
        overflow: hidden;
    }

    input {
        width: 52vw;
        max-width: 350px;
        border-radius:2px;
        border: none;    
    }


    input {
        padding: 5px;
    }

    .close-btn {
        margin: 5px;
        position: fixed;
        top: 0;
        right: 0;
        background-color: transparent;
        color:#fff;
    }

    .search-btn {
        background-color:#fff;
        color:#2F4558;
        font-weight: bold;
    }

`