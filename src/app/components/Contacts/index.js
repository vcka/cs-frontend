import React from "react";
import { useFetch } from "../../utils/hooks";
import { API_ENDPOINTS } from "../../utils/constants";
import "./index.css";
// import * as icons from "react-icons/fa";
import {
  FaEnvelope as EMAIL,
  FaPhone as PHONE,
  FaMapMarker as LOCATION,
  FaLinkedinIn as LINKEDIN,
  FaGithubAlt as GIT
} from "react-icons/fa";

const icons = { EMAIL, PHONE, LOCATION, LINKEDIN, GIT };

function Item(data) {
  const Icon = icons[data.contactsType];
  return (
    <a className="Contacts--item" href={data.link}>
      <Icon className="Contacts--item-icon" />
      <span className="Contacts--item-text">{data.value}</span>
    </a>
  );
}

function Contacts() {
  const { loading, data } = useFetch(API_ENDPOINTS.personContacts);
  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <section className="Contacts">
        <h3>Contacts</h3>
        {console.log(data)}
        {data.map(Item)}
      </section>
    );
  }
}

export default Contacts;
