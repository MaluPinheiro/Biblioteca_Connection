'use client';

import { createContext, useState } from "react";
import { request } from '../services/request';
import { setCookie } from 'nookies';
import { useRouter } from "next/navigation";

export type SignIdData = {
    name: string;
    password: string;
    admin: boolean
}

type AuthContextType = {
    login: (data: SignIdData) => void;
    registerUser: (data: SignIdData) => void;
    authError: string | null;
    registerError: string | null;
}

type UserAuthentication = {
    'x-access-token': string
}

type RegisterResponse = {
    'statusCode': number
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [authError, setAuthError] = useState<string | null>(null);
    const [registerError, setRegisterError] = useState<string | null>(null)

    const router = useRouter();

    async function login({ name, password }: SignIdData) {
        try {
            const { 'x-access-token': token } = await request<UserAuthentication>('http://127.0.0.1:5000/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password }),
                referrerPolicy: 'no-referrer',
                cache: 'no-store'
            });

            if (!token) {
                setAuthError('Autenticação falhou. Por favor, verifique suas credenciais.');
                return;
            }

            setCookie(null, 'auth.token', token, {
                maxAge: 60 * 60 * 1,
            });
            router.push('/livros');
        } catch (error) {
            setAuthError('Ocorreu um erro ao tentar fazer login.');
        }
    }
    
    async function registerUser({ name, password }: SignIdData) {

        let res = await request<RegisterResponse>('http://127.0.0.1:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, password}),
            referrerPolicy: 'no-referrer',
            cache: 'no-store'
        })
        if(res.statusCode == 201) {
            router.push('/login')
        } else {
            setRegisterError('Houve um erro. Código: ' + res.statusCode)
        }
    }
    return (
        <AuthContext.Provider value={{ login, authError, registerUser, registerError }}>
            {children}
        </AuthContext.Provider>
    );
}