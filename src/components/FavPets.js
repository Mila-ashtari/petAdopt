import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FavPetContext from '../contexts/FavPetContext'


class FavPetList extends Component{
    static contextType= FavPetContext
    constructor(){
        super()
        this.state={
            showFavourites:false
        }
    }
    handleClick=()=>{
     this.state.showFavourites 
        ?this.setState({showFavourites:false})
        :this.setState({showFavourites:true}) 
    }
    render(){
        return(
            <section>
                <FontAwesomeIcon 
                    className="icon favourites" 
                    icon="heart">
                </FontAwesomeIcon> 
                <button 
                    onClick={this.handleClick} 
                    className='favourites'
                > 
                    Favourites 
                </button>
                <FontAwesomeIcon 
                    className="icon angle" 
                    icon={this.state.showFavourites ? "angle-down" : "angle-up"}>
                </FontAwesomeIcon> 
                {this.state.showFavourites && 
                    <section className="pets favourites">
                        {this.context.favPetList.length!==0 
                        ? this.context.favPetList.map(({key, petData})=>{ 
                            return(
                            <div key={key} className="petContainer">
                                <button className="cross" data-key={key} data-pet-name={petData.petName} data-pet-url={petData.petUrl} data-pet-age={petData.petAge} data-pet-status={petData.petStatus} data-pet-photo={petData.petPhoto}  data-pet-id={petData.petId} onClick={(e)=>{this.props.clickCrossButton(e.target.dataset)}}>&#9747;</button>
                                <img src={petData.petPhoto} alt=""/>
                                <div className="petInfo">
                                    <p className="name" style={{ fontFamily: 'Indie Flower' }}><span>Name: </span>{petData.petName}</p>
                                    <p className="age" style={{ fontFamily: 'Indie Flower' }}><span>Age: </span>{petData.petAge}</p>
                                    <p className="status" style={{ fontFamily: 'Indie Flower' }}><span>Status: </span>{petData.petStatus}</p>
                                    <p><a href={petData.petUrl} style={{ fontFamily: 'Indie Flower' }} target="_blank">more info</a></p>
                                </div>
                                <button type="button" className="favButton" style={{color:'red'}}>&#9829;</button>
                            </div>
                            )
                    })
                    :<p className='noFavs'>you have no favourites</p>}              
                    </section>
                }
            </section>
        )
}
}
export default FavPetList