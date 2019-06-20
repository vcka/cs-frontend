import React from "react";
import { useFetch } from "./hooks";
import { API_ENDPOINTS } from "../../utils/constants";
import "./index.css";

function Header(props) {
  const { loading, data } = useFetch(API_ENDPOINTS.personInfo);

  return (
    <header className="Header">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1 className="Header--title">{data.name}</h1>
          <hr className="Header--separator" />
          <h2 className="Header--subtitle">{data.surname}</h2>
        </div>
      )}
    </header>
  );
}

export default Header;
