import React, { useState } from "react";

const LibraryApp = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [search, setSearch] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Filter dynamically by title or author
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    setBooks([...books, { title: newTitle, author: newAuthor }]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove book
  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h2>Library Management</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="add-form">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="book-item">
              <span>
                <b>{book.title}</b> by {book.author}
              </span>
              <button onClick={() => handleRemoveBook(index)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default LibraryApp;
