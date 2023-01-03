import { Link } from "react-router-dom";
import AddInstrumentButtonCSS from "./add-instrument-button.module.css";

const AddInstrumentButton = () => {
  return (
    <Link to="/profile/instrument" className={AddInstrumentButtonCSS.button}>
      Add instrument
    </Link>
  );
};

export default AddInstrumentButton;
