import EnsembleList from "../components/page-exclusive/ensemble-list";
import FindEnsemblePageCSS from "./FindEnsemblePage.module.css";
import useFetch from "../useFetch";
import { useState } from "react";

const FindEnsamblePage = () => {
  const [query, setQuery] = useState("");

  const {
    data: ensembles,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/ensemble");

  return (
    <div className={FindEnsemblePageCSS.default}>
      <div className={FindEnsemblePageCSS.ensemblebox1}>
        <h1>Find Ensemble</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className={FindEnsemblePageCSS.searchBox}
        />
      </div>
      <div>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {ensembles && <EnsembleList ensembles={ensembles} query={query} />}
      </div>
    </div>
  );
};

export default FindEnsamblePage;
