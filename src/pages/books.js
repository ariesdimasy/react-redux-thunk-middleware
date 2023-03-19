import { useState } from "react";

import Navbar from "../layouts/layout2/Navbar";
import BookPages from "../components/BookPages";

import "./books.css";

function Books() {
  const [name, setName] = useState("...");

  const bookList = [
    "Kriptografi",
    "Tafsir Al-Quran",
    "Komik Naruto",
    "Kriptografi",
  ];
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <h1> Books </h1>
      <Navbar></Navbar>
      <p> This is Books page</p>
      <div>
        <div> Name : </div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        my name is <span id="myname"> {name} </span>
      </div>
      <BookPages books={bookList} nums={numbers}></BookPages>
    </>
  );
}

export default Books;
