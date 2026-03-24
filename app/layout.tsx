"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Provider } from "react-redux";
import { store } from "./features/store/formstore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ⚠️ also required

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <Provider store={store}>
          {children}

          
          <ToastContainer position="top-right" autoClose={3000} />
        </Provider>
      </body>
    </html>
  );
}