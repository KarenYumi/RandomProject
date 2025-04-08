import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./components/pages/HomePage";
import Agenda from "./components/pages/Agenda";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./ScrollToTop"; // Import the custom component
import Instrutores from "./components/pages/Instrutores";

const queryClient = new QueryClient();

// Layout component that includes ScrollToTop and renders children
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

// Create routes with the Layout component as the root
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/sobre" >
        <Route path="instrutores" element={<Instrutores/>} />
        <Route path="aulas" element={<h1>Missão e Valores</h1>} />
        <Route path="preço" element={<h1>Equipe</h1>} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;