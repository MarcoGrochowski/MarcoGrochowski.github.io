import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from 'react-router-dom';

import NavigationBar from "./NavigationBar";
import Home from './Home.js';
import Container from "@mui/material/Container";

function App() {
  return (
      <Container>
          <NavigationBar/>
          <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/blog"} element={<Blog />} />
              <Route path={"/contact"} element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
          </Routes>
      </Container>
  );
}

function Blog() {
    return <h1>Blog</h1>;
}

function Contact() {
    return <h1>Contact</h1>;
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;
