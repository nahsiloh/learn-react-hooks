import React, { useState, createContext } from "react";

export const MovieContext = createContext();

//hold information
export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    { name: "Harry Potter", price: 10, id: 1 },
    { name: "Game of Thrones", price: 15, id: 2 },
    { name: "Inception", price: 19, id: 3 }
  ]);

  return (
    //passing the props down to all the children
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
