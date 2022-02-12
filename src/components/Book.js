import React from "react";

import "./Knopf.css";

const Book = ({ books }) => {
  console.log(books);
  const buttonsMarkup = books.map((book) => (
    <button key={book.id} className="knopf-button">
      {book.title}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;

  //return (
  //<div>
  //<div>{books.title}</div>
  //<div>{books.id}</div>
  //</div>
  //);
};

export default Book;
