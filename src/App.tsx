import AboutMe from "./components/AboutMe";
import ArtworksListContent from "./components/ArtworksListContent"
import { Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const PageWrapper= styled.div`
  width: 80vw;
  margin: 0 auto;
`;

function Root() {
  return (
    <PageWrapper>
      <Header/>
      <Routes>
        <Route path={`/`} element={<ArtworksListContent />} />
        <Route path={`/about`} element={<AboutMe />} />
      </Routes>
    </PageWrapper>
  )
}

const router=createBrowserRouter(
  [{path:"*", Component: Root}]
);

export default function App() {
  return <RouterProvider router={router} />
}