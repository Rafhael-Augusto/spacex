"use client";

import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 9vh;
  background-color: transparent;

  transition: opacity 0.4s ease-in-out;

  @media (min-width: 960px) {
    opacity: 1;

    height: 14vh;
  }
`;

export const Logo = styled.img`
  position: relative;

  height: 5vw;
  width: 40vw;

  margin-left: 4%;
  margin-bottom: 2%;

  object-fit: cover;

  @media (min-width: 500px) {
    height: 20px;
    width: 160px;
  }

  @media (min-width: 960px) {
    margin-top: 10px;
  }

  cursor: pointer;
`;

export const MenuButton = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  border: none;

  height: 100%;
  width: 10%;

  gap: 0.5vw;

  top: 0.2vh;
  right: 0;

  background-color: transparent;

  @media (max-width: 959px) {
    top: -2px;
  }

  @media (min-width: 500px) {
    width: 56px;

    gap: 2px;
  }

  @media (min-width: 960px) {
    right: 4vw;
    top: 4.9vh;

    height: 30%;
    width: 1.5%;
  }

  cursor: pointer;
`;

export const HamburgerPiece = styled.span`
  display: block;

  height: 1%;
  width: 30%;

  background-color: transparent;
  border: 1.5px solid #fff;

  @media (min-width: 960px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  display: none;
  text-decoration: none;

  @media (min-width: 960px) {
    display: block;

    font-size: 1.1vw;
  }

  cursor: pointer;
`;

export const ShopButton = styled(Link)`
  display: none;
  text-decoration: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.1vw;
    margin-right: 7.5vw;
    margin-bottom: 0.3vw;
    margin-top: 3%;
  }

  cursor: pointer;
`;

export const LinkList = styled.div`
  display: none;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-left: 2vw;
    gap: 2.2vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  @media (min-width: 960px) {
    display: flex;
    align-items: center;
    justify-content: left;

    gap: 1vw;
    margin-left: 1.5vw;
  }
`;
