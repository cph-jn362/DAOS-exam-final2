import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import UserContent from "../components/page-exclusive/user-content";
import MusicianPageCSS from "./MusicianPage.module.css";

const MusicianPage = () => {
  const { id } = useParams();
  const {
    data: user,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/user/" + id);

  return (
    <div className={MusicianPageCSS.default}>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading...</p>}
      {user && <UserContent user={user} />}
    </div>
  );
};

export default MusicianPage;
