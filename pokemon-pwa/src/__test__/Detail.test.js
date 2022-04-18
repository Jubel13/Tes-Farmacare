import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stock from "../pages/Stock";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Detail from "../pages/Detail";

test("detail page should render correctly", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/pokemon/1' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  screen.debug();
});

test("should go to stock if link was clicked", () => {
  render(
    <BrowserRouter>
      <Link to='/'>Stock Pokemon</Link>
    </BrowserRouter>
  );

  userEvent.click(screen.getByText("Stock Pokemon"));

  expect(screen.getByText("Stock Pokemon")).toBeInTheDocument();

  const { debug } = render(
    <Provider store={store}>
      <Stock />
    </Provider>
  );
  debug();
});
