import ValidationMessageCSS from "./validation-message.module.css";

const ValidationMessage = ({ validations }) => {
  return (
    <div className={ValidationMessageCSS.default}>
      {validations.map((val, index) => {
        return <p key={index}>· {val}</p>;
      })}
    </div>
  );
};

export default ValidationMessage;
