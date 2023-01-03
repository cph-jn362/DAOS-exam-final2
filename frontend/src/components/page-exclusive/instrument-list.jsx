import InstrumentListCSS from "./instrument-list.module.css";

const InstrumentList = ({ user }) => {
  return (
    <div>
      {user.instrument &&
        user.instrument.map((instrument) => (
          <div key={user.id} className={InstrumentListCSS.card}>
            <div>
              <h3>{instrument.instrumentType}</h3>
              <hr />
            </div>
            <p>Genre · {instrument.genre}</p>
            <p>Skill · {instrument.skill}</p>
          </div>
        ))}
    </div>
  );
};

export default InstrumentList;
