import React from 'react'
import { Fragment } from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FavPetContext from '../contexts/FavPetContext'



class Pets extends Component {
    static contextType= FavPetContext
    handleClick=(pet)=>{
        this.props.clickFavButton(pet)  
    }
    handleDisable=(petId)=>{
        let disable=false
        this.context.favPetList.forEach((favPet)=>{
            if(favPet.petData.petId==petId){
                disable=true
            }
        })
        return disable
    }
    handleColor=(petId)=>{
        let color={color: "black"}
        this.context.favPetList.forEach((favPet)=>{
            if(favPet.petData.petId==petId){
                color={color: "#ec3b2e81"}
            }
        })
        return color
    }
    render(){
        console.log(this.props.petList)
        return(
        <Fragment>
            {this.props.petList.length!==0 ? <p  className="searchResults"><FontAwesomeIcon className='icon' icon='search'></FontAwesomeIcon> Search Results</p> : <p></p>}
            <section className="pets searchResults" id="searchResults">
            {this.props.petList.map((pet)=>{
                return(
                    <div key={pet.key} className="petContainer">
                        <img src={pet.petPhoto} alt=""/>
                        <div className="petInfo">
                            <p className="name" style={{ fontFamily: 'Indie Flower' }}><span>Name: </span>{pet.petName}</p>
                            <p className="age" style={{ fontFamily: 'Indie Flower' }}><span>Age: </span>{pet.petAge}</p>
                            <p className="status" style={{ fontFamily: 'Indie Flower' }}><span>Status: </span>{pet.petStatus}</p>
                            <p><a href={pet.petUrl} style={{ fontFamily: 'Indie Flower' }} target="_blank">more info</a></p>
                        </div>
                        <button 
                            type='button' 
                            className='favButton'  
                            onClick={()=>{this.handleClick(pet)}} 
                            style={this.handleColor(pet.petId)} 
                            disabled={this.handleDisable(pet.petId)}
                            >
                                &#9829;
                            </button>  
                    </div>
                )
            })
            }      
            </section>       
        </Fragment>
             
        )}
}

export default Pets