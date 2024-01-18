import React from "react";
import styles from "./style.module.scss";
// import { SignInButon } from "../SignInButton";
import { Active, HeaderContainer, HeaderContent } from "@/styles/pages/header";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <Active>Home</Active>
          <a>Posts</a>
        </nav>

        {/* <SignInButon /> */}
      </HeaderContent>
    </HeaderContainer>
  );
}
