import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stock from "../pages/Stock";
import { Provider } from "react-redux";
import store from "../store";
import Pokemon from "../components/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Confirmation from "../pages/Confirmation";

test("Confirmation page should render correctly", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );

  screen.debug();
});
