import React from "react";
import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarker,
  FaLinkedinIn,
  FaGithubAlt
} from "react-icons/fa";
import Education from "./components/Education";
import Skills from "./components/Skills";

const contacts = [
  {
    icon: FaMapMarker,
    text: "Vilnius, Lithuania",
    link:
      "https://www.google.com/maps/place/Vilnius/@54.6998479,24.9727564,10z/"
  },
  {
    icon: FaGithubAlt,
    text: "@vcka",
    link: "https://github.com/vcka/"
  },
  {
    icon: FaEnvelope,
    text: "vcka@ministras.lt",
    link: "mailto:vcka@ministras.lt?subject=eMail from CV"
  },
  {
    icon: FaPhone,
    text: "+37068744...",
    link: "tel:+370687440"
  },
  {
    icon: FaLinkedinIn,
    text: "LinkedIn.com/Vytautas Zadoroznas",
    link: "https://lt.linkedin.com/in/vytautas-zadoro%C5%BEnas-0627b211"
  }
];

const education = [
  {
    degree: "Ph.d",
    university: "Hogwards",
    year: "2020 - present"
  },
  {
    degree: "Ph.d",
    university: "Hogwards",
    year: "2020 - present"
  }
];

const skills = [
  {
    text: "Melzimas",
    level: "advanced"
  },
  {
    text: "Suvirinimas",
    level: "intermediate"
  },
  {
    text: "Miegojimas",
    level: "begginer"
  },
  {
    text: "Gerimas",
    level: "advanced"
  }
];

function App() {
  return (
    <div className="App">
      <Header>Smauglys Pagirstukas</Header>
      <main className="App--content">
        <div className="App--content-left">
          <Contacts items={contacts} />
          <Education items={education} />
          <Skills items={skills} />
        </div>
        <div className="App--content-right">Right</div>
      </main>
    </div>
  );
}

export default App;
