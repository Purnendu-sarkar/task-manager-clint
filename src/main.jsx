// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Routes/Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router></Router>
      </QueryClientProvider>
    </AuthProvider>
  </BrowserRouter>
);
