import EditProfileForm from "../components/forms/EditProfileForm";
import EditprofilePageCSS from "./EditProfilePage.module.css";
import useFetch from "../useFetch";

const EditProfilePage = () => {
  const userId = localStorage.getItem("userId");

  const {
    data: user,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/user/" + userId);

  return (
    <div className={EditprofilePageCSS.default}>
      <h1>Edit Profile</h1>
      {isLoading && <p className={EditprofilePageCSS.loading}>Loading...</p>}
      {error && <p>{error}</p>}
      {user && (
        <div>
          <EditProfileForm userId={userId} user={user} />
        </div>
      )}
    </div>
  );
};

export default EditProfilePage;
