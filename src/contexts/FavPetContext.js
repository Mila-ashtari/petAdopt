import React, { Component } from 'react';  
import firebase from '../firebase'; 

const Context = React.createContext();

export class FavPetStore extends Component{
    constructor(){
        super()
        this.state={
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
          this.setState({favPetList:newFavPetList})
        })
    }
    addFavPet=({petAge, petId, petName, petPhoto, petStatus, petUrl})=>{
        const dbRef = firebase.database().ref();
        dbRef.push({
         petName,
         petAge,
         petUrl,
         petStatus,
         petPhoto,
         petId
      })
    }
    removeFavPet=(key)=>{
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
    }
    render(){
        return(
            <Context.Provider
                value={{
                    ...this.state, 
                    addFavPet:this.addFavPet,
                    removeFavPet:this.removeFavPet
                }}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context