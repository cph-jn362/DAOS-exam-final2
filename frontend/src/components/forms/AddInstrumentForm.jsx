import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AddInstrumentFormCSS from "./AddInstrumentForm.module.css";

export default function AddInstrumentForm() {
  const [instrumentType, setInstrumentType] = useState("Violin");
  const [genre, setGenre] = useState("Folk music");
  const [skill, setSkill] = useState("1 - Beginner");

  const userId = localStorage.getItem("userId");

  const navigate = useNavigate();

  function addInstrument(e) {
    e.preventDefault();

    const instrument = {
      instrumentType,
      genre,
      skill,
    };

    console.log(instrument);

    fetch("http://127.0.0.1:3000/user/" + userId + "/instrument", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instrument),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        navigate("/profile");
      });
  }

  return (
    <form onSubmit={addInstrument} className={AddInstrumentFormCSS.default}>
      <p>
        <b>Instrument</b>
      </p>
      <p>Select an insturment</p>
      <select
        value={instrumentType}
        onChange={(e) => setInstrumentType(e.target.value)}
      >
        <option value="Violin">Violin</option>
        <option value="Trumpet">Trumpet</option>
        <option value="Viola">Viola </option>
      </select>
      <p>
        <b>Genre</b>
      </p>
      <p>Select a genre</p>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Folk music">Folk music</option>
        <option value="Romantic">Romantic</option>
        <option value="Baroque">Baroque</option>
      </select>
      <p>
        <b>Skill</b>
      </p>
      <p>Select a skill</p>
      <select value={skill} onChange={(e) => setSkill(e.target.value)}>
        <option value="1 - Beginner">1 - Beginner</option>
        <option value="2 - Intermediate">2 - Intermediate</option>
        <option value="3 - Advanced">3 - Advanced</option>
        <option value="4 - Expert">4 - Expert</option>
      </select>
      <button className={AddInstrumentFormCSS.addButton}>Add Instrument</button>
      <Link to={-1} className={AddInstrumentFormCSS.backButton}>
        ⯇ Go back
      </Link>
    </form>
  );
}
