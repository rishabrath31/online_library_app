import { createSlice } from "@reduxjs/toolkit";

const initialBooks = [
  { id: 1, title: "1984", author: "George Orwell", category: "Fiction" },
  { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi" },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
  },
  { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy" },
];

const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
