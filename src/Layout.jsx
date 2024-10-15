
import { createBrowserRouter } from "react-router-dom";
import Acheivement from "./components/Acheivement.jsx";
import { Creators } from "./components/Creators.jsx";
import { EsportsTeam } from "./components/EsportsTeam.jsx";
import Navbar from "./components/Navbar.jsx";
import { Shop } from "./components/Shop.jsx";
import { Sponsers } from "./components/Sponsers.jsx";
import { Videos } from "./components/Videos.jsx";
import Footer from "./components/Footer.jsx"; 

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Acheivement />
        <EsportsTeam />
        <Creators />
        <Sponsers />
        <Videos />
        <Shop />
      </Layout>
    ),
  },
  {
    path: "/achievement",
    element: (
      <Layout>
        <Acheivement />
      </Layout>
    ),
  },
  {
    path: "/teams",
    element: (
      <Layout>
        <EsportsTeam />
      </Layout>
    ),
  },
  {
    path: "/creators",
    element: (
      <Layout>
        <Creators />
      </Layout>
    ),
  },
  {
    path: "/sponsers",
    element: (
      <Layout>
        <Sponsers />
      </Layout>
    ),
  },
  {
    path: "/videos",
    element: (
      <Layout>
        <Videos />
      </Layout>
    ),
  },
  {
    path: "/shop",
    element: (
      <Layout>
        <Shop />
      </Layout>
    ),
  },
]);