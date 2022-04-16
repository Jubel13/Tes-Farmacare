import "./App.css";
import Stock from "./pages/Stock";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { fetchPokemons } from "./store/actionCreators";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons()).then((data) => {
      console.log(data);
    });
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path='/' element={<Stock />} />
      </Routes>
    </>
  );
}

export default App;
