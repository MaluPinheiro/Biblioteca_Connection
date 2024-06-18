"use client";

import { BookContext, BooksData } from "@/context/BookContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";

const Livro = async ({}) => {
    const { register, handleSubmit } = useForm<BooksData>();
    const { addBook } = useContext(BookContext);
    
    const handleLivro = async (data:BooksData) => {
        addBook(data);
    }
    return (
        <div className="flex justify-center bg-orange-900 items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
                <form className="flex flex-col" onSubmit={handleSubmit(handleLivro)}>
                    <label htmlFor="title" className="mb-2">Título</label>
                    <input
                    {...register('title')}
                        type="text"
                        name='title'
                        id='title'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="título"
                    />
                    <label htmlFor="qtd" className="mb-2">Quantidade</label>
                    <input
                    {...register('qtd')}
                        type="text"
                        name='qtd'
                        id='qtd'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="quantidade"
                    />
                    <label htmlFor="genre" className="mb-2">Gênero</label>
                    <input
                    {...register('genre')}
                        type="text"
                        name='genre'
                        id='genre'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="gênero"
                    />
                    <label htmlFor="author" className="mb-2">Autor</label>
                    <input
                    {...register('author')}
                        type="text"
                        name='author'
                        id='author'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="autor"
                    />
                    <label htmlFor="year" className="mb-2">Ano</label>
                    <input
                    {...register('year')}
                        type="text"
                        name='year'
                        id='year'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="ano"
                    />
                    <input
                        type="submit"
                        value="Registrar"
                        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-900 cursor-pointer"
                    />
                </form>
            </div>
        </div>
    )
}

export default Livro;