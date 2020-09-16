import React, { Component } from 'react'



class FavPetList extends Component{
    constructor(){
        super()
        this.state={
            showFavourites:false
        }
    }
    handleClick=()=>{
        if (this.state.showFavourites){
            this.setState({
               showFavourites:false
            })
            
        }
        else{
            this.setState({
                showFavourites:true
            }) 
        }
       
    }
    render(){
    return(
        <section>
            <button onClick={this.handleClick} className='favourites'><span>&#9829;</span> favourites </button>
            {this.state.showFavourites ? 
                <section className="pets favourites">
                    {this.props.favPetList.length!==0 ? this.props.favPetList.map(({key, petData})=>{ 
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
                }): <p className='noFavs'>you have no favourites</p>}              
            </section>:
           <section></section>}
        </section>
    )
}
}
export default FavPetList