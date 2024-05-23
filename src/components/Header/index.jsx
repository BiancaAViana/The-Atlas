//styled components
import { Component } from "./style";
import { Logo } from "./style";
import { HamburguerMenu } from "./style";
import { Wrapper } from "./style";

//components
import { Navbar } from "./Navbar";
import { SearchBar } from "../Header/SearchBar";

import logotipo from "../../assets/logo/logo-ofc.png";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";




export function Header() {

//controlando se a lupa foi clicada
const [isSearchClicked, setIsSearchClicked] = useState(false)

//controlar visibilidade da barra de busca
const [searchActive, setSearchActive] = useState("hidden")

//função para ativar a barra de busca
const showSerachBar = () => {
  if(!isSearchClicked){
    setSearchActive("visible");
    setIsSearchClicked(true)
   }
}

const [isMenuClicked, setIsMenuClicked] = useState(true)
const [menuVisibility, setMenuVisibility] = useState(" hidden")

//função para ativar o menu hamburguer
  const showMenu = () => {
    if(isMenuClicked){
      setMenuVisibility("visible")
     
    } else {
      setMenuVisibility("menu-animation hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <Component>
        <Logo>
          <a href="#">
            <img src={logotipo} alt="logo" width='60px' />
          </a>
          <a href="#">
            the atlas
          </a>
        </Logo>

        <Wrapper>
          <FaSearch color='white' onClick={() => showSerachBar()}/>

          <div className="menu-hamburguer" onClick={() => showMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Wrapper>

       <SearchBar className={searchActive} setIsSearchClicked={setIsSearchClicked} setSearchActive={setSearchActive}/>

      <Navbar className={menuVisibility}/>
    </Component>
  );
}
