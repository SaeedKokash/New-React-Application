import React from "react";
// import HornedBeast from "./HornedBeast";
import AnimalData from "../data.json";
import Cards from "./Cards";

class Main extends React.Component {
    render () {
        return (
            AnimalData.map( animal => {
                return (
                    <div className="animalsArr" key={animal._id}>

                        {/* old method before cards */}
                        {/* <HornedBeast title={animal.title} imgLink={animal.image_url} imgAlt= {animal.title} imgtitle= {animal.imgtitle} description={animal.description} horns= {animal.horns}/> */}

                            <Cards className="indCard" title={animal.title} imgLink={animal.image_url} imgAlt= {animal.title} imgtitle= {animal.imgtitle} description={animal.description} horns= {animal.horns}/>
                    </div>
                )
            })
           
        )
    }
}

export default Main
