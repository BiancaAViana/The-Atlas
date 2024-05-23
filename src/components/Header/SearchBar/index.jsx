import { Component } from "./style";

import { Input } from "../../Input";
import { Button } from "../../Button";

export function SearchBar({className ,children ,setIsSearchClicked,setSearchActive}) {

const closeBtn = (e) => {
  console.log(e.target.className)
  setSearchActive("close hidden")
  setIsSearchClicked(false)

  }

  return (
    <Component className={className}>
      <Button className='close-btn' onClick={(e)=>closeBtn(e)}>[x]</Button>
      <div>
        <Input />
        <Button className='search-btn'>buscar</Button>
      </div>
    </Component>
  );
}
