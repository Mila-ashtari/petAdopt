import React from 'react'
import { Fragment } from 'react';
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Pets extends Component {
    handleClick=(e)=>{

        this.props.clickFavButton(e.target.dataset)  
    }
    handleDisable=(petId)=>{
        let disable=false
        this.props.favPetList.forEach((favPet)=>{
            if(favPet.petData.petId==petId){
                disable=true
            }
        })
        return disable
    }
    handleColor=(petId)=>{
        let color={color: "black"}
        this.props.favPetList.forEach((favPet)=>{
            if(favPet.petData.petId==petId){
                color={color: "#ec3b2e81"}
            }
        })
        console.log(color)
        return color
    }
    render(){
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
                            <p><a href={pet.petUrl} style={{ fontFamily: 'Indie Flower' }}>more info</a></p>
                        </div>
                        <button type='button' className='favButton'  data-pet-name={pet.petName} data-pet-url={pet.petUrl} data-pet-age={pet.petAge} data-pet-status={pet.petStatus} data-pet-photo={pet.petPhoto}  data-pet-id={pet.petId} onClick={this.handleClick} style={this.handleColor(pet.petId)} disabled={this.handleDisable(pet.petId)}>&#9829;</button>  
                    </div>
                )
            })
            }      
            </section>       
        </Fragment>
             
        )}
}

export default Pets