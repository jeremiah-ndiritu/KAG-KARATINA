import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Sermons from "./pages/Sermons";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Members from "./components/Members";
import toast, { Toaster } from "react-hot-toast";

function App() {
  useEffect(() => {
    function handleOnline() {
      toast.success("✅ Back online!");
    }
    function handleOffline() {
      toast.error("❌ You’re offline. Changes will be saved locally.");
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      <Router>
        <Header />
        <main className="min-h-screen bg-surface text-surface-foreground">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/members" element={<Members />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
