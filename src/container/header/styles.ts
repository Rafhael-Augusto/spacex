"use client";

import styled from "styled-components";

export const Header = styled.header`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 8vh;
  background-color: transparent;
`;

export const Logo = styled.img`
  position: relative;
  background-color: transparent;

  height: 35%;
  width: 40vw;

  object-fit: cover;
`;

export const MenuButton = styled.button`
  position: absolute;

  height: 4%;
  width: 8%;

  top: 100;
  right: 0;

  margin-right: 4%;
  background-color: purple;
`;
