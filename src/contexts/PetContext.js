import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class PetStore extends Component {
  constructor() {
    super();
    this.state = {
      petList: [],
    };
  }
  getPet = async (inputObj) => {
    const newPetList = [];
    const oauth = require("axios-oauth-client");
    const getClientCredentials = oauth.client(axios.create(), {
      url: "https://api.petfinder.com/v2/oauth2/token",
      grant_type: "client_credentials",
      client_id: "ekGvHgiY5LvPGX6SYZLpLAax3umf2Q1GxBAuHoRCgpJZ6Aj19e",
      client_secret: "Dsd5eqTmjNDVo31SDuKICTeZfxZP7rfsoGorHOyw",
    });
    const auth = await getClientCredentials();
    // construct param object with non empty key value pair
    const paramObj = {};
    for (let key in inputObj) {
      if (inputObj[key] !== "") {
        paramObj[key] = inputObj[key];
      }
    }
    const result = await axios({
      method: "GET",
      url: "https://api.petfinder.com/v2/animals",
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
      },
      dataType: "jsonp",
      params: paramObj,
    });
    result.data.animals.forEach(function (animal) {
      if (animal.photos.length !== 0) {
        newPetList.push({
          petPhoto: animal.photos[0].medium,
          petName: animal.name,
          petUrl: animal.url,
          petStatus: animal.status,
          petId: animal.id,
          petAge: animal.age,
        });
      }
    });
    this.setState({
      petList: newPetList,
    });
  };

  submitUserSelect = (type, location) => {
    const selectionObj = {
      type: type,
      location: location,
    };
    this.getPet(selectionObj);
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getPet: this.getPet,
          submitUserSelect: this.submitUserSelect,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
