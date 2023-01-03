import { Link } from "react-router-dom";
import CreatePostButtonCSS from "./create-post-button.module.css";

const CreatePostButton = () => {
  return (
    <Link to="/profile/create-post" className={CreatePostButtonCSS.button}>
      Create
    </Link>
  );
};

export default CreatePostButton;
