import React, { Fragment } from 'react';
import axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDog, faCat, faDove, faHeart ,faSearch,faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import firebase from '../firebase';
import { Link } from "react-scroll";

import '../App.scss';
import UserSelection from './UserSelection'
import Pets from './Pets'
import FavPets from './FavPets'
import petLandingPage from '../assets/petLandingPage.png'
import {FavPetStore} from '../contexts/FavPetContext'
 
library.add(fab, faDog, faCat, faDog, faDove, faHeart, faSearch, faAngleDown, faAngleUp) 

class App extends React.Component{
  constructor(){
    super()
    this.state={
      petList:[],
    }
  }
  // getting animal info with an axios call 
  async getPet(inputObj){
    const newPetList=[]
    const oauth = require('axios-oauth-client');
    const getClientCredentials = oauth.client(axios.create(), {
    url: 'https://api.petfinder.com/v2/oauth2/token',
    grant_type: 'client_credentials',
    client_id: 'ekGvHgiY5LvPGX6SYZLpLAax3umf2Q1GxBAuHoRCgpJZ6Aj19e',
    client_secret: 'Dsd5eqTmjNDVo31SDuKICTeZfxZP7rfsoGorHOyw',
    })
    const auth = await getClientCredentials();
    // construct param object with non empty key value pair
    const paramObj={}
    for(let key in inputObj){
      if(inputObj[key] !== ""){
          paramObj[key]=inputObj[key]
      }
    }  
    const result= await axios({
      method:'GET',                                                       
      url:'https://api.petfinder.com/v2/animals',
      headers:{
        Authorization: `Bearer ${auth.access_token}`,
      },
      dataType:'jsonp',
      params:paramObj
    })
    result.data.animals.forEach(function(animal){
      if (animal.photos.length!== 0){
        newPetList.push({
          petPhoto:animal.photos[0].medium,
          petName:animal.name,
          petUrl:animal.url,
          petStatus:animal.status,
          petId:animal.id,
          petAge:animal.age,
        })
      }
    })
    this.setState({
      petList:newPetList
    })
  }
  
  handleSubmit=(type, location)=>{
    // get pets data with user selection
    const selectionObj={
      type: type,
      location:location,
    }
    this.getPet(selectionObj)
  }
  
 render(){

   return(
        <Fragment>
          <FavPetStore>
            <header className="wrapper">
              <img src={petLandingPage} alt=""/>
              <div>
                <h1>Adopt a <span>forever friend</span> today</h1>
                <p>Adopt a pet who needs your care and love today.</p>
                <button>
                  <Link
                      activeClass="active"
                      to="userSelection"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                  >meet your <br>
                  </br>forever friend now!
                  </Link>
                </button>
              </div>
            </header>
            <main className="wrapper">
              <UserSelection submitForm={this.handleSubmit}/>
              <FavPets/>
              <Pets petList={this.state.petList}/>
            </main>
          </FavPetStore>
        </Fragment>
   )
 };
}

export default App;
