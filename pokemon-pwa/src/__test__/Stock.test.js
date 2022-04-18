import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stock from "../pages/Stock";
import { Provider } from "react-redux";
import store from "../store";
import Pokemon from "../components/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";

test("search form should render correctly", () => {
  render(
    <Provider store={store}>
      <Stock />
    </Provider>
  );

  userEvent.type(screen.getByPlaceholderText(/search/i, /bulb/i));

  screen.debug(screen.getByPlaceholderText(/search/i));
});

test("pokemon list should render correctly", () => {
  let pokemon = {
    id: 1,
    name: "Bulbasaur",
    stock: 10,
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Stock />
        <Pokemon pokemon={pokemon} />
      </BrowserRouter>
    </Provider>
  );

  userEvent.type(screen.getByPlaceholderText(/search/i, /bulb/i));

  screen.debug(screen.getByText("Bulbasaur"));
});

test("should go to detail page if pokemon was clicked", () => {
  let pokemon = {
    id: 1,
    name: "Bulbasaur",
    stock: 10,
  };
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Stock />
        <Pokemon pokemon={pokemon} />
      </BrowserRouter>
    </Provider>
  );

  userEvent.click(screen.getByText("Bulbasaur"));
});
