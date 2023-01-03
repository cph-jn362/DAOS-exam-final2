import { Link } from "react-router-dom";
import CreateEnsembleButtonCSS from "./create-ensemble-button.module.css";

const CreateEnsembleButton = () => {
  return (
    <Link to="/ensemble/create" className={CreateEnsembleButtonCSS.button}>
      Create Ensemble
    </Link>
  );
};

export default CreateEnsembleButton;
