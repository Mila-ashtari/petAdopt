import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faDog, faCat, faDove, faHeart ,faSearch,faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import firebase from './firebase';
import { Link } from "react-scroll";

import './App.scss';
import UserSelection from './components/UserSelection'
import Pets from './components/Pets'
import FavPets from './components/FavPets'
import petLandingPage from './assets/petLandingPage.png'
 
library.add(fab, faDog, faCat, faDog, faDove, faHeart, faSearch, faAngleDown, faAngleUp) 

class App extends React.Component{
  constructor(){
    super()
    this.state={
      petList:[],
      favPetList:[]
    }
  }
  // getting the favourite pets data from firebase database
  componentDidMount() {
      const dbRef = firebase.database().ref();
      dbRef.on('value', (response) => {
        let newFavPetList=[]
        let responseObj=response.val()
        for(let key in responseObj){
          newFavPetList.push({key:key, petData:responseObj[key]})
        }
        this.setState(
          {favPetList:newFavPetList})
      
      })
  }
  // getting animal info with an axios call 
  async getPet(inputObj){
      const axios = require('axios');
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
      axios({
        method:'GET',                                                       
        url:'https://api.petfinder.com/v2/animals',
        headers:{
          Authorization: `Bearer ${auth.access_token}`,
        },
        dataType:'jsonp',
        params:paramObj
      }).then((result)=>{
        const newPetList=[]
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
  handlePetsClick=({petAge, petId, petName, petPhoto, petStatus, petUrl})=>{
  if(this.state.favPetList.length<5){
      const dbRef = firebase.database().ref();
      dbRef.push({
        petName:petName,
        petAge:petAge,
        petUrl:petUrl,
        petStatus:petStatus,
        petPhoto:petPhoto,
        petId:petId
    })
  }
  else{
    alert('you have added five favourites to your list')
  }
  }
  handleFavPetsClick=({key})=>{
    const dbRef = firebase.database().ref();
    dbRef.child(key).remove();
  }

 render(){

   return(
      <Fragment>
        <header className="wrapper">
          <img src={petLandingPage} alt=""/>
          <div>
            <h1>Adopt a <span>forever friend</span> today</h1>
            <p>Adopt a pet who needs your care and love today.</p>
            <button><Link
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
          <UserSelection 
          submitForm={this.handleSubmit}>
          </UserSelection>
          <FavPets
           favPetList={this.state.favPetList} 
           clickCrossButton={this.handleFavPetsClick}>
           </FavPets>
          <Pets
           petList={this.state.petList}
           favPetList={this.state.favPetList}
           clickFavButton={this.handlePetsClick}>
          </Pets>
        </main>
      </Fragment>
   )
 };
}

export default App;
