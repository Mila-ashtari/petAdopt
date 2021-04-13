import React, { Fragment } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faDog,
  faCat,
  faDove,
  faHeart,
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import firebase from "../firebase";
import { Link } from "react-scroll";
import { Card, CardMedia } from "@material-ui/core";

import "../App.scss";
import UserSelection from "./UserSelection";
import Pets from "./Pets";
import FavPets from "./FavPets";
import petLandingPage from "../assets/petLandingPage.png";
import { FavPetStore } from "../contexts/FavPetContext";
import { PetStore } from "../contexts/PetContext";

library.add(
  fab,
  faDog,
  faCat,
  faDog,
  faDove,
  faHeart,
  faSearch,
  faAngleDown,
  faAngleUp
);

class App extends React.Component {
  render() {
    return (
      <PetStore>
        <FavPetStore>
          <header className="wrapper">
            <img src={petLandingPage} alt="" />
            <div>
              <h1>
                Adopt a <span>forever friend</span> today
              </h1>
              <p>Adopt a pet who needs your care and love today.</p>
              <button>
                <Link
                  activeClass="active"
                  to="userSelection"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  meet your <br></br>forever friend now!
                </Link>
              </button>
            </div>
          </header>
          <main className="wrapper">
            <UserSelection />
            <FavPets />
            <Pets />
          </main>
        </FavPetStore>
      </PetStore>
    );
  }
}

export default App;
