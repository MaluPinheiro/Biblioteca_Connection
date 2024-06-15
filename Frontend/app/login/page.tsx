"use client";

import React from "react";
import { AuthContext, SignIdData } from "../../context/AuthContext";
import { useForm } from 'react-hook-form';
import { useContext } from "react";

const Login = () => {
    const { register, handleSubmit } = useForm<SignIdData>();
    const { login, authError } = useContext(AuthContext);

    const handleLogin = async (data: SignIdData) => {
        await login(data);
    }

    return (
        <div className="flex justify-center bg-violet-200 items-center h-screen">
            <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg">
                <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
                    <label htmlFor="name" className="mb-2">Usuário</label>
                    <input
                        {...register('name')}
                        type="text"
                        name='name'
                        id='name'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="name"
                    />

                    <label htmlFor="password" className="mb-2">Senha</label>
                    <input
                        {...register('password')}
                        type="password"
                        name='password'
                        id='password'
                        className="px-3 py-2 border rounded-md mb-4"
                        placeholder="password"
                    />

                    <div className="flex items-center mb-4">
                        <input
                            {...register('admin')}
                            type="checkbox"
                            name='admin'
                            id='admin'
                            className="mr-2"
                        />
                        <label htmlFor="admin">Admin</label>
                    </div>

                    <input
                        type="submit"
                        value="Acessar"
                        className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-violet-800 cursor-pointer"
                    />
                </form>
                {authError && <p className="text-red-500 mt-2">{authError}</p>}
            </div>
        </div>
    );
}

export default Login;