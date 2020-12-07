import React, {Fragment} from 'react';


function PetContainer(props){
    const {petList, handleAddFavPet,  handleDisable, handleColor}=props
    return(
        <Fragment>
        {petList.map((pet) =>{
            return(
                <div key={pet.petId} className="petContainer">
                <img src={pet.petPhoto} alt=""/>
                <div className="petInfo">
                    <p className="name"><span>Name: </span>{pet.petName}</p>
                    <p className="age" ><span>Age: </span>{pet.petAge}</p>
                    <p className="status"><span>Status: </span>{pet.petStatus}</p>
                    <p><a href={pet.petUrl} target="_blank">more info</a></p>
                </div>
                <button 
                    type='button' 
                    className='favButton'  
                    onClick={()=>{handleAddFavPet(pet)}} 
                    style={handleColor(pet.petId)} 
                    disabled={handleDisable(pet.petId)}
                    >
                        &#9829;
                </button>  
            </div>)

        })}
        </Fragment>

    )

      
}

export default PetContainer