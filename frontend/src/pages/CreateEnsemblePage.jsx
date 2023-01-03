import CreateEnsemblePageCSS from "./CreateEnsemblePage.module.css";
import CreateEnsembleForm from "../components/forms/CreateEnsembleForm";

const CreateEnsemblePage = () => {
  return (
    <div className={CreateEnsemblePageCSS.default}>
      <h1>Create Ensemble</h1>
      <CreateEnsembleForm />
    </div>
  );
};

export default CreateEnsemblePage;
