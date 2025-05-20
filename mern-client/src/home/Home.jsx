import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import ListedBooks from "./ListedBooks";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <FavoriteBooks />
      <ListedBooks />
    </div>
  );
};

export default Home;
