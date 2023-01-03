import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import EnsembleContent from "../components/page-exclusive/ensemble-content";
import EnsemblePageCSS from "./EnsemblePage.module.css";

const EnsemblePage = () => {
  const { id } = useParams();
  const {
    data: ensemble,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/ensemble/" + id);

  return (
    <div className={EnsemblePageCSS.default}>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {ensemble && <EnsembleContent ensemble={ensemble} />}
    </div>
  );
};

export default EnsemblePage;
