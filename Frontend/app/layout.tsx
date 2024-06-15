import React from "react";
import AuthProvider from "../context/AuthContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Biblioteca",
  description: "My Task Manager",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <html lang="pt_br">
        <body className={"bg-slate-100"}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
        
    </html>
  );
};

export default RootLayout;