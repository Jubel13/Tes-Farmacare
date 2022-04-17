import "./App.css";
import Stock from "./pages/Stock";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchPokemons } from "./store/actionCreators";
import { useDispatch } from "react-redux";
import Detail from "./pages/Detail";
import Confirmation from "./pages/Confirmation";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons()).then((data) => {
      // console.log(data);
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Stock />} />
        <Route path='/pokemon/:id' element={<Detail />} />
        <Route path='/confirmation' element={<Confirmation />} />
      </Routes>
    </>
  );
}

export default App;
