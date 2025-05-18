import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const FavoriteBooks = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div>
      <BookCards books={books} headLine="Sell Your Books" />
    </div>
  );
};

export default FavoriteBooks;
