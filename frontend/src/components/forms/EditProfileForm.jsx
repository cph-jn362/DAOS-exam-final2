import EditProfileFormCSS from "./EditProfileForm.module.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import validateUpdateProfile from "./validateUpdateProfile";
import ValidationMessage from "../page-exclusive/validation-message";

export default function EditProfileForm({ userId, user }) {
  const [fname, setFname] = useState(user.fname);
  const [lname, setLname] = useState(user.lname);
  const [email, setEmail] = useState(user.email);
  const [description, setDescription] = useState(user.description);
  const [zipCode, setZipCode] = useState(user.zipCode);
  const [city, setCity] = useState(user.city);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [validation, setValidation] = useState(false);
  const [validations, setValidations] = useState([]);

  const navigate = useNavigate();

  function updateProfile(e) {
    e.preventDefault();

    const user = {
      fname,
      lname,
      email,
      description,
      zipCode,
      city,
    };

    setIsLoading(true);

    const validatateArray = validateUpdateProfile(user);

    if (validatateArray.length == 0) {
      setTimeout(() => {
        fetch("http://127.0.0.1:3000/user/" + userId, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => {
            if (!res.status == 201) {
              throw new Error("failed to fetch data");
            }
            return res.json();
          })
          .then(() => {
            setIsLoading(false);
            navigate("/profile");
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err.message);
          });
      }, 750);
    } else {
      setIsLoading(false);
      setValidation(true);
      setValidations(validatateArray);
    }
  }

  return (
    <form className={EditProfileFormCSS.default} onSubmit={updateProfile}>
      <p>
        <b>First name</b>
      </p>
      <p>Enter your first name </p>
      <input
        type="text"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        required
      />
      <p>
        <b>Last name</b>
      </p>
      <p>Enter your last name </p>
      <input
        type="text"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        required
      />
      <p>
        <b>E-mail</b>
      </p>
      <p>Enter an e-mail</p>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        <b>Zipcode</b>
      </p>
      <p>Enter a zipcode</p>
      <input
        type="text"
        value={zipCode}
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
      <button className={EditProfileFormCSS.saveButton}>Save profile</button>
      <Link to={-1} className={EditProfileFormCSS.backButton}>
        ⯇ Go back
      </Link>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {validation && <ValidationMessage validations={validations} />}
    </form>
  );
}
