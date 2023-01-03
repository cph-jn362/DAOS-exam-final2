import EnsembleListCSS from "./ensemble-list.module.css"
import { Link } from "react-router-dom";


const EnsembleList = ({ ensembles, query }) => {
  return (
    <div className={EnsembleListCSS.list}>
      {ensembles.filter(ensemble=>ensemble.name.toLowerCase().includes(query)).map((ensemble) => (
        <Link to = {`/ensemble/${ensemble._id}`}>
        <div className={EnsembleListCSS.card} key={ensemble.id}>
          <h3>{ensemble.name}</h3>
          <hr />
          <p>{ensemble.description}</p>
          <p>{ensemble.zipCode + ' ' + ensemble.city}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default EnsembleList;
