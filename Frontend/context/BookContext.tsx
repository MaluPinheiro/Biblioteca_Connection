'use client';

import { createContext, useState } from "react";

export type BooksData = {
    _id: string;
    title: string;
    qtd: number;
    genre: string,
    author: string;
    year: string,
}

type BookContextType = {
    book: BooksData[]
    addBook: (data: BooksData) => void;
    removeBook: (_id: string) => void;
}

export const BookContext = createContext({} as BookContextType);

export const BookContextProvider = ({ children } : {children: React.ReactNode;}) => {
    // UseStates para controle de variáveis.
    const [book, setBook] = useState<BooksData[]>([]);

    // Função que adiciona o evento a lista do navegador
    async function addBook({_id, title, qtd, genre, author, year}: BooksData) {
        let newBook = {
            _id,
            title, 
            qtd, 
            genre, 
            author, 
            year
        }
        setBook([...book, newBook]);
    };

    async function removeBook(_id:string) {
        setBook(book.filter((_:BooksData, index:number) =>
            _id !== index.toString()
        ))
        console.log(book)
    }

    return (
        <BookContext.Provider value={{ book, addBook, removeBook}}>
            {children}
        </BookContext.Provider>
    );
}