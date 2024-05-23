import { NewsWrapper } from "../components/NewsWrapper";
import { GlobalStyle } from "./style";
import { Component } from "./style";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function App() {
  return (
    <Component>
      <GlobalStyle />
      <Header />
      <NewsWrapper />  
      <Footer />
    </Component>
  );
}
