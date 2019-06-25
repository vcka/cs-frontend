import React, { useState } from "react";
import { useFetch } from "../../utils/hooks";
import { post } from "../../utils/post";
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
    <a className="Contacts--item" href={data.link} key={data.id}>
      <Icon size={32} className="Contacts--item-icon" />
      <span className="Contacts--item-text">{data.value}</span>
    </a>
  );
}

function Contacts() {
  const { loading, data, setData } = useFetch(API_ENDPOINTS.personContacts);
  const addContact = contact => {
    setData([...data, contact]);
  };

  return (
    <section className="Contacts">
      <h3>CONTACTS</h3>
      <hr className="Contacts--separator" />
      {loading ? <div>Loading...</div> : data.map(Item)}
      <AddContactForm addContact={addContact} />
    </section>
  );
}

function AddContactForm(props) {
  const initialFormState = { value: "", contactsType: "EMAIL", link: "" };

  const [contact, setContact] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const { loading, data } = useFetch(API_ENDPOINTS.contactsTypes);

  const createContact = async event => {
    event.preventDefault();
    if (!contact.value || !contact.contactsType || !contact.link) return;

    const response = await post(API_ENDPOINTS.addContact, contact);

    props.addContact(response);
    setContact(initialFormState);
  };

  return (
    <form onSubmit={createContact}>
      <label>Text</label>
      <input
        type="text"
        name="value"
        value={contact.value}
        onChange={handleInputChange}
      />
      <label>Contact type</label>
      <select
        value={contact.contactsType}
        name="contactsType"
        onChange={handleInputChange}
      >
        {data ? data.map(type => <option value={type}>{type}</option>) : []}
      </select>
      <label>Link</label>
      <input
        type="text"
        name="link"
        value={contact.link}
        onChange={handleInputChange}
      />
      <button>Add new contact</button>
    </form>
  );
}

export default Contacts;
