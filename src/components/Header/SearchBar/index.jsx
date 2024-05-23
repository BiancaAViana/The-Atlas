import { Component } from "./style";

import { Input } from "../../Input";
import { Button } from "../../Button";

export function SearchBar({className ,children ,setIsSearchClicked,setSearchActive}) {

const closeBtn = () => {
    setSearchActive("hidden")
    setIsSearchClicked(false)
  }

  return (
    <Component className={className}>
      <Button className='close-btn' onClick={closeBtn}>[x]</Button>
      <div>
        <Input />
        <Button className='search-btn'>buscar</Button>
      </div>
    </Component>
  );
}
