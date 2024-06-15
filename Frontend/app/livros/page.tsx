'use client';
import React from 'react';
import { useState, useEffect } from 'react';

interface Books {
  _id: string;
  title: string;
  qtd: number;
  genre: string;
  author: string;
  year: string;
}

interface Genres {
  type: string;
}

const Products = () => {
  const [BookList, setBooksList] = useState<Books[]>([]);
  const [GenreList, setGenresList] = useState<Genres[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/books')
      .then((res) => res.json())
      .then((data) => {
        setBooksList(data);
        setLoading(false);
      });
    
    fetch('http://127.0.0.1:5000/genres')
      .then((res) => res.json())
      .then((data) => {
        setGenresList(data);
      });
  }, []);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!BookList.length) return <p className="text-center">No products available</p>;
  if (!GenreList.length) return <p className="text-center">No categories available</p>;

  const filterProducts = (genres: string) => {
    setSelectedGenre(genres);
  };

  const filteredProducts = selectedGenre === 'all'
    ? BookList
    : BookList.filter(book => book.genre === selectedGenre);

  return (
    <main className="flex flex-col items-center p-4 bg-violet-200 min-h-screen">
      <div id="filters" className="mb-4">
        <button onClick={() => filterProducts('all')} className="bg-purple-500 text-white py-2 px-4 m-2 rounded hover:bg-violet-800">Todos</button>
        {GenreList.map(genres => (
          <button 
            key={genres.type} 
            onClick={() => filterProducts(genres.type)} 
            className="bg-purple-500 text-white py-2 px-4 m-2 rounded hover:bg-violet-800">
            {genres.type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.map(({ _id, title, qtd, genre, author, year }) => (
          <div key={_id} className="bg-white border border-gray-300 rounded p-4 shadow-md">
            <p className="text-xl font-semibold mb-2">{title}</p>
            <p className="text-gray-600">Quantidade: {qtd}</p>
            <p className="text-gray-600">Gênero: {genre}</p>
            <p className="text-gray-600">Autor: {author}</p>
            <p className="text-gray-600">Ano: {year}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Products;