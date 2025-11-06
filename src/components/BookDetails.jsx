import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import './BookDetails.css'

const BookDetails = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchBookDetails = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${id}`
        )
        setBook(response.data)
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.')
        console.error('Error fetching book details:', err)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchBookDetails()
    }
  }, [id])

  if (loading) {
    return (
      <div className="book-details-container">
        <div className="loading">Loading book details...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="book-details-container">
        <div className="error">{error}</div>
        <Link to="/" className="back-link">
          ← Back to Search
        </Link>
      </div>
    )
  }

  if (!book) {
    return (
      <div className="book-details-container">
        <div className="error">Book not found</div>
        <Link to="/" className="back-link">
          ← Back to Search
        </Link>
      </div>
    )
  }

  const volumeInfo = book.volumeInfo || {}
  const title = volumeInfo.title || 'No Title'
  const subtitle = volumeInfo.subtitle || ''
  const authors = volumeInfo.authors || ['Unknown Author']
  const publishedDate = volumeInfo.publishedDate || 'N/A'
  const description = volumeInfo.description || 'No description available.'
  const pageCount = volumeInfo.pageCount || 'N/A'
  const categories = volumeInfo.categories || []
  const averageRating = volumeInfo.averageRating || 0
  const ratingsCount = volumeInfo.ratingsCount || 0
  const publisher = volumeInfo.publisher || 'N/A'
  const isbn = volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier || 'N/A'
  const language = volumeInfo.language || 'N/A'
  const thumbnail =
    volumeInfo.imageLinks?.thumbnail ||
    volumeInfo.imageLinks?.large ||
    volumeInfo.imageLinks?.medium ||
    volumeInfo.imageLinks?.smallThumbnail ||
    'https://via.placeholder.com/300x450?text=No+Image'

  return (
    <div className="book-details-container">
      <Link to="/" className="back-link">
        ← Back to Search
      </Link>
      <div className="book-details-content">
        <div className="book-details-image-container">
          <img
            src={thumbnail}
            alt={title}
            className="book-details-image"
          />
          <div className="book-rating">
            <div className="stars" style={{ '--rating': averageRating }}>★★★★★</div>
            <span>{averageRating} ({ratingsCount} ratings)</span>
          </div>
        </div>
        <div className="book-details-info">
          <h1 className="book-details-title">{title}</h1>
          {subtitle && <h2 className="book-details-subtitle">{subtitle}</h2>}
          <p className="book-details-author">
            By {authors.join(', ')}
          </p>
          
          <div className="book-details-categories">
            {categories.map((category, index) => (
              <span key={index} className="category-tag">{category}</span>
            ))}
          </div>

          <div className="book-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Published</span>
              <span className="meta-value">{publishedDate}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Publisher</span>
              <span className="meta-value">{publisher}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Pages</span>
              <span className="meta-value">{pageCount}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Language</span>
              <span className="meta-value">{language.toUpperCase()}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">ISBN</span>
              <span className="meta-value">{isbn}</span>
            </div>
          </div>

          <div className="book-details-description">
            <h3>About this book</h3>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetails

