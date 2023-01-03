import FindMusicianPageCSS from "./FindMusicianPage.module.css";
import MusicianList from "../components/page-exclusive/musician-list";
import useFetch from "../useFetch";
import { useState } from "react";

const FindMusicianPage = () => {
  const [query, setQuery] = useState("");

  const {
    data: users,
    isLoading,
    error,
  } = useFetch("http://127.0.0.1:3000/user");

  return (
    <div className={FindMusicianPageCSS.default}>
      <div className={FindMusicianPageCSS.box1}>
        <h1>Find Musicians</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
          className={FindMusicianPageCSS.searchBox}
        />
      </div>
      <div>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
        {users && <MusicianList users={users} query={query} />}
      </div>
    </div>
  );
};

export default FindMusicianPage;
