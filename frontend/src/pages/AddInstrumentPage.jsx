import AddInstrumentForm from "../components/forms/AddInstrumentForm";
import AddInstrumentPageCSS from "./AddInstrumentPage.module.css";

const AddInstrumentPage = () => {
  return (
    <div className={AddInstrumentPageCSS.default}>
      <h1>Add Instrument</h1>
      <AddInstrumentForm />
    </div>
  );
};

export default AddInstrumentPage;
