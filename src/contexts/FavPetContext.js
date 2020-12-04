import React, { Component } from 'react';   

const Context = React.createContext();

export class FavPetStore extends Component{
    constructor(){
        super()
        this.state={
            favPetList:[]
        }
    }
    getFavPet=()=>{
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
                value={...this.state.favPetList,this.getFavPet}
            >
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context