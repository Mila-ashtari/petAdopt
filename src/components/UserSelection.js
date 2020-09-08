import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fragment } from 'react'
import axios from 'axios'
import { Link, animateScroll as scroll } from "react-scroll";


class UserSlection extends React.Component{
    constructor(){
        super()
        this.state={
            type:"",
            location:"",
            locationCoordinates:"",
            locationList:[]
        }
    }

    searchAhead=(locationInput)=>{
        axios({
            method:'GET',                                                       
            url:'http://www.mapquestapi.com/search/v3/prediction',
            dataType:'jsonp',
            params:{
                key:"e3cHA9SUBfDTPsePNXGN8YlK3Z71Ofwr",
                q:locationInput,
                collection:"adminArea",
                limit:5,
            }
        }).then((result)=>{
            this.setState({
                locationList:result.data.results
            })
        })
        .catch(()=>{
            this.setState({
                locationList:[]
            })
        })
    }

    handleChnage=(event)=>{
        event.persist()
        // updating state with user's location input
        this.setState({
            location:event.target.value
        })
        // passing the user location input to searchAhead API call
        this.searchAhead(event.target.value)
    }
    // updatind type state with user's selection
    handleClick=(event)=>{
        event.persist()
        this.setState({
            type:event.target.value
        })
    }
    // storing location selection coordinates in location state
    handleLocationClick=(event)=>{
        event.persist()
        // updating locationCoordinates state to be past to app component, location state to be displayed as input value and locationList to empty array so no options are displayed after user selection.
        this.setState({
          locationCoordinates:event.target.dataset.coordinates,
          location:event.target.innerText,
          locationList:[]
    }) 
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.submitForm(this.state.type, this.state.locationCoordinates)
    }
    render(){
        let typeArray=["dog", "cat"]
        return(
            // user preferences fieldset
            <form action="" id="userSelection">
                <fieldset>
                    <legend>indicate your preferences below to find your next best friend</legend>
                    {/* location input field */}
                    <div className="location">
                        <label htmlFor="locationInput">location</label>
                        <input type="text" name="location" id="locationInput"  onChange={this.handleChnage} 
                        value={this.state.location}/>
                        <ul>
                            {/* displays suggested areas based from searchAhead API call*/}
                            {this.state.locationList.map((location)=>{
                                const coordinatesArr=[location.place.geometry.coordinates[1],location.place.geometry.coordinates[0]]
                                return(
                                    <li className="locationOption" data-coordinates={coordinatesArr} onClick={this.handleLocationClick}>{location.displayString}</li>  
                                )
                            })}
                        </ul>
                    </div>
                    {/* displaying the type options to the user */}
                    <div className="type">
                        {typeArray.map((type)=>{
                            return (
                                <Fragment>
                                    <label><FontAwesomeIcon className="icon" icon={`${type}`}></FontAwesomeIcon> {type}</label>
                                    <input type="radio"  name="type" onClick={this.handleClick} value={type}/>
                                </Fragment>
                            )
                            
                        })}
                        <label><FontAwesomeIcon className="icon" icon="dove"></FontAwesomeIcon> bird</label>
                        <input type="radio"  name="type" onClick={this.handleClick} value="bird"/>
                    </div>
                    <button onClick={(e)=>{e.preventDefault()}}><Link
                        activeClass="active"
                        to="searchResults"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.handleSubmit}
                    >get your cutie pet</Link>
                    </button>
                </fieldset>
            </form>
        )
    }
}


export default UserSlection