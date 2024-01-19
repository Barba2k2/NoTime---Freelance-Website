import React from "react";
import styles from "./style.module.scss";
// import { SignInButon } from "../SignInButton";
import {
  PublishButton,
  HeaderContainer,
  HeaderContent,
} from "@/styles/pages/header";
import Home from "@/pages";

export function Header() {
  return (
    <HeaderContainer>
      <h1>Header</h1>
      {/* <HeaderContent> */}
      {/* Home
            Find Work
            Login
            Sign Up
            Publish Project
        */}
      <PublishButton>Publicar Projeto</PublishButton>
      {/* </HeaderContent> */}
    </HeaderContainer>
  );
}
