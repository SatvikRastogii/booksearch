import React from 'react'
import { Link } from 'react-router-dom'
import './BookList.css'

const BookList = ({ books, loading, error }) => {
  if (loading) {
    return (
      <div className="book-list-container">
        <div className="loading">Loading books...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="book-list-container">
        <div className="error">{error}</div>
      </div>
    )
  }

  if (books.length === 0) {
    return (
      <div className="book-list-container">
        <div className="no-results">No books found. Try searching for a book!</div>
      </div>
    )
  }

  return (
    <div className="book-list-container">
      <div className="book-grid">
        {books.map((book) => {
          const volumeInfo = book.volumeInfo || {}
          const bookId = book.id
          const title = volumeInfo.title || 'No Title'
          const authors = volumeInfo.authors || ['Unknown Author']
          const thumbnail =
            volumeInfo.imageLinks?.thumbnail ||
            volumeInfo.imageLinks?.smallThumbnail ||
            'https://via.placeholder.com/128x193?text=No+Image'

          return (
            <Link
              key={bookId}
              to={`/book/${bookId}`}
              className="book-card"
            >
              <div className="book-image-container">
                <img
                  src={thumbnail}
                  alt={title}
                  className="book-image"
                />
              </div>
              <div className="book-info">
                <h3 className="book-title">{title}</h3>
                <p className="book-author">
                  {authors.join(', ')}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default BookList

