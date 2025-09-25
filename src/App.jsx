import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";

function App() {
  const [sermons, setSermons] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getSermons = async () => {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/sermons`);
      let data = await res.json();
      setSermons(data);
    };
    const getPosts = async () => {
      let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/posts`);
      let data = await res.json();
      setPosts(data);
    };
    getSermons();
    getPosts();
  }, []);
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home sermons={sermons} posts={posts} />} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/sermons" element={<Sermons sermons={sermons} />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
