import { Component } from "./styles"

export function Button({className,children ,onClick}){

    //generic buttons
    //  const showSearchBtn = searchBtn && !value;
    // const showSeeMooreBtn = seeMoreBtn && !value && !showSearchBtn ;
    // const showCloseBtn = closeBtn &&!value && !showSearchBtn && !showSeeMooreBtn;

    return(
        <Component type="button" onClick={onClick} className={className}>   
            {children}
        </Component>
    )
}