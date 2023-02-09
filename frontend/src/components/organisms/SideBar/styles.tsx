import styled from "styled-components";

export const Container = styled.div`
  // Barra Superior
  .navbar {
    background-color: #003055;
    height: 65px;
    display: flex;
    justify-content: start;
    align-items: center;
    box-shadow: 0 0 20px 1px;
  }

  // Ícones open/close da sidebar
  .menu-bars {
    background: none;
    color: white;
    font-size: 2.2rem;
    margin-top: 0.625rem;
    margin-left: 2rem;
    cursor: pointer;
  }

  // Barra Lateral
  .nav-menu {
    padding-top: 1.2rem;
    background-color: #003055;
    width: 16vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%; // Esconde do lado esquerdo
    transition: 850ms;
  }

  // Barra Lateral
  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  // Janela de Conteúdo Completa
  .window {
    margin-left: 0;
    transition: 850ms;
    max-width: 100%;  //Ajustar tamhno da tela
  }
  
  // Janela de Conteúdo c/ Sidebar
  .window.active {
    padding-left: 16vw;
    transition: 350ms;
  }

  // Texto Iterno (Todos abaixo)
  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 55px;
  }

  .nav-text a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #17a4d0;
  }

  .nav-menu-items {
    width: 100%;
  }

  /* .nav-toggle {
    background-color: blue;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
  } */

  span {
    margin-left: 16px;
  }
`;
