import React from "react";
import Banner from "../components/Banner";
import FavoriteBooks from "./FavoriteBooks";
import ListedBooks from "./ListedBooks";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";
import MyFooter from "../components/MyFooter";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <FavoriteBooks />
      <ListedBooks />
      <PromoBanner />
      <OtherBooks />
      <Review />
      <MyFooter />
    </div>
  );
};

export default Home;
