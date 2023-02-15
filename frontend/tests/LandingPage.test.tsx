import React from "react";
import { screen, render } from "@testing-library/react";
import renderWithRouter from "./helpers/renderWithRouter";
import MainLandingPage from "../src/components/organisms/MainLandingPage";
import LandingPage from "../src/pages/LandingPage";

describe("Testa a LandingPage", () => {
  it("Testa o JEST", () => {
    expect(1).toBe(1);
  });
  it("Testa home inteira", () => {
    renderWithRouter(<LandingPage />);
    screen.debug();
  });
  it("Testa componentes na tela MainLandingPage", () => {
    renderWithRouter(<MainLandingPage />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
  });
  it("Testa componentes na tela LandingPage", () => {
    renderWithRouter(<LandingPage />);
    const link = screen.getByRole("link", { name: /Sobre Nós/i });
    expect(link).toBeInTheDocument();
  });
});
