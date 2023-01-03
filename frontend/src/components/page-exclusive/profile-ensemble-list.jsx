import ProfileEnsembleListCSS from "./profile-ensemble-list.module.css"

const ProfileEnsembleList = ({ ensemble }) => {
  return (
    <div className={ProfileEnsembleListCSS.list}>
      {ensemble.map((ensemble) => (
        <div className={ProfileEnsembleListCSS.card} key={ensemble.id}>
          <h3>{ensemble.name}</h3>
          <hr />
          <p>{ensemble.description}</p>
          <p>{ensemble.zipCode + ' ' + ensemble.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileEnsembleList;
