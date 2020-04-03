import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: black;
  padding: 2rem;
  margin: 0;
  box-sizing: border-box;

  a {
    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    display: block;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: black;
  padding: 1rem 3rem;
  box-sizing: border-box;

  p {
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
