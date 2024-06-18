'use client';

import React from "react";
import { AuthContext, SignIdData } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

const Cadastro = () => {
    const { register, handleSubmit } = useForm<SignIdData>();
    const { registerUser, registerError } = useContext(AuthContext);

    const handleCadastro = async (data: SignIdData) => {
        registerUser(data);
    }

    return (
        <div className="flex justify-center bg-orange-900 items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
            <form className="flex flex-col" onSubmit={handleSubmit(handleCadastro)}>
                <h2 className="text-black text-center">Cadastro</h2>
                <label htmlFor="name" className="mb-2">Usuário</label>
                    <input
                        {...register('name')}
                        type="text"
                        name='name'
                        id='name'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="name">
                    </input>

                    <label htmlFor="password" className="mb-2">Senha</label>
                    <input
                        {...register('password')}
                        type="password"
                        name='password'
                        id='password'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="password">
                    </input>

                    <div className="flex items-center mb-4">
                        <input
                            {...register('admin')}
                            type="checkbox"
                            name='admin'
                            id='admin'
                            className="mr-2">
                        </input>
                        <label htmlFor="admin">Admin</label>
                    </div>

                    <input
                        type="submit"
                        value="Cadastrar"
                        className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-900 cursor-pointer"
                    />
            </form>
                {registerError && <p className="text-red-500 mt-2">{registerError}</p>}
            </div>
        </div>
    );
}

export default Cadastro;
