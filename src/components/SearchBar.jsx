import React, { useState } from 'react'
import axios from 'axios'
import './SearchBar.css'

const SearchBar = ({ onSearch, onLoading, onError }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    onLoading(true)
    onError(null)

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20`
      )
      onSearch(response.data.items || [])
    } catch (err) {
      onError('Failed to fetch books. Please try again later.')
      console.error('Error fetching books:', err)
    } finally {
      onLoading(false)
    }
  }

  return (
    <div className="search-bar-container">
      <p className="search-description">
        Discover millions of books from our extensive library. Search by title, author, or keywords to find your next great read.
      </p>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books by title or author..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          Discover Books
        </button>
      </form>
    </div>
  )
}

export default SearchBar

