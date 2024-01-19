import { styled } from "@stitches/react";

export const HeaderContainer = styled("header", {
  background: "#FFF",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  borderRadius: "2rem",
  alignItems: "center",
  color: "black",
  padding: "2rem",
  top: "0",
  zIndex: 100,
});

export const HeaderContent = styled("div", {
  // estilos para HeaderContent se necessário
});

export const PublishButton = styled("button", {
  border: "0",
  padding: "1rem",
  borderRadius: "2rem",
  background: "BlueViolet",
  color: "white",
  cursor: "pointer",
  marginLeft: 'auto',
});
