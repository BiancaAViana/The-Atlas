import { Component } from "../Navbar/style";

export function Navbar({ className }) {
  return (
    <Component className={className}>
      <a href="#">
        <li>news</li>
      </a>
      <a href="#">
        <li>artigos</li>
      </a>
      <a href="#">
        <li>plataformas</li>
      </a>
      <a href="#">
        <li>tecnologia</li>
      </a>
      <a href="#">
        <li>esporte</li>
      </a>
    </Component>
  );
}
