import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CreateEnsembleFormCSS from "./CreateEnsembleForm.module.css";

export default function CreateEnsembleForm() {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("1 - 5 musicians");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [genre, setGenre] = useState("Folk music");

  const navigate = useNavigate();

  function createEnsemble(e) {
    e.preventDefault();

    const ensemble = {
      name,
      members,
      zipCode,
      city,
      description,
      website,
      genre,
      admin: localStorage.getItem("userId"),
    };

    console.log(ensemble);

    fetch("http://127.0.0.1:3000/ensemble", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ensemble),
    }).then(() => {
      navigate("/profile");
    });
  }

  return (
    <form className={CreateEnsembleFormCSS.default} onSubmit={createEnsemble}>
      <p>
        <b>Name</b>
      </p>
      <p>Enter a name</p>
      <input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        <b>Members</b>
      </p>
      <p>Select amount of members</p>
      <select value={members} onChange={(e) => setMembers(e.target.value)}>
        <option value="1 - 5 musicians">1 - 5 musicians</option>
        <option value="6 - 10 musicians">6 - 10 musicians</option>
        <option value="11 - 15 musicians">11 - 15 musicians</option>
        <option value="16 - 20 musicians">16 - 20 musicians</option>
      </select>
      <p>
        <b>Zipcode</b>
      </p>
      <p>Enter a zipcode</p>
      <input
        type="text"
        value={zipCode}
        required
        onChange={(e) => setZipCode(e.target.value)}
      />
      <p>
        <b>City</b>
      </p>
      <p>Enter a city</p>
      <input
        type="text"
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
      />
      <p>
        <b>Description</b>
      </p>
      <p>Write a description</p>
      <textarea
        value={description}
        placeholder="..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <p>
        <b>Website</b>
      </p>
      <p>Enter a website</p>
      <input
        type="text"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
      <p>
        <b>Genre</b>
      </p>
      <p>Select a genre</p>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Folk music">Folk music</option>
        <option value="Romantic">Romantic</option>
        <option value="Baroque">Baroque </option>
      </select>
      <button className={CreateEnsembleFormCSS.createButton}>
        Create Ensemble
      </button>
      <Link to={-1} className={CreateEnsembleFormCSS.backButton}>
        ⯇ Go back
      </Link>
    </form>
  );
}
