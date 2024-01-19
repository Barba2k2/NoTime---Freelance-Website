import { transform } from "next/dist/build/swc";
import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
  width: "100%",
  height: "100vh",
  // marginLeft: "auto",
  // minHeight: 656,
});
