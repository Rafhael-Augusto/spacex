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
  height: 8vh;
  background-color: transparent;
`;

export const Logo = styled.img`
  position: relative;
  background-color: transparent;

  height: 5vw;
  width: 40vw;

  margin-left: 4%;

  object-fit: cover;
`;

export const MenuButton = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50%;
  width: 8%;

  gap: 8%;

  top: 2.5vh;
  right: 0;

  margin-right: 4%;

  & > span {
    height: 0.6vw;
    width: 55%;

    display: block;
    z-index: 4;

    background-color: #fff;
  }
`;
