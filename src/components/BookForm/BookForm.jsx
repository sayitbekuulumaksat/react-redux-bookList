import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import { setError } from "../../redux/slices/errorSlice";
import createBookWithID from "../../utils/createBookEithID";
import booksData from "../../data/books.json";
import "./BookForm.css";

function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithID({ title, author }, "manual")));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("No title and author"));
    }
  };
  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook, "ramdom")));
  };

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook());
  };
  return (
    <div className='app-block book-form'>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='author'>Author: </label>
          <input
            type='text'
            id='author'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type='submit'>Add Book</button>
        <button type='text' onClick={handleRandomBook}>
          Random Book
        </button>
        <button type='text' onClick={handleAddRandomBookViaAPI}>
          Add Random Book Via API
        </button>
      </form>
    </div>
  );
}

export default BookForm;
