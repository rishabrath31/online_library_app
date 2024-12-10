import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBookPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (!title || !author || !category) {
      setError('All fields are required.');
      return;
    }

    // Add book to Redux store
    dispatch(
      addBook({
        id: Date.now(), // Unique ID for the book
        title,
        author,
        category,
      })
    );

    // Clear the form and navigate to Browse Books
    setTitle('');
    setAuthor('');
    setCategory('');
    setError('');
    navigate('/books'); // Redirect
  };

  return (
    <div className="add-book-form">
      <h1>Add a New Book</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookPage;
