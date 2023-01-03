import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import WelcomePage from "./pages/WelcomePage";
import FindEnsamblePage from "./pages/FindEnsemblePage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import CreateEnsemblePage from "./pages/CreateEnsemblePage";
import EnsemblePage from "./pages/EnsemblePage";
import FindMusicianPage from "./pages/FindMusicianPage";
import AddInstrumentPage from "./pages/AddInstrumentPage";
import MusicianPage from "./pages/MusicianPage";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("userId") == null
    ) {
      setLoggedIn(false);
    } else if (
      localStorage.getItem("token") != "undefined" &&
      localStorage.getItem("userId") != "undefined"
    ) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />|
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/ensemble" element={<FindEnsamblePage />} />
        <Route path="/ensemble/:id" element={<EnsemblePage />} />
        <Route path="/ensemble/create" element={<CreateEnsemblePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<EditProfilePage />} />
        <Route path="/profile/instrument" element={<AddInstrumentPage />} />
        <Route path="/musician" element={<FindMusicianPage />} />
        <Route path="/musician/:id" element={<MusicianPage />} />
      </Routes>
      <Footer loggedIn={loggedIn} />
    </div>
  );
}
