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
    render(){
        return(
            <Context.Provider
                value={{...this.state}}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context