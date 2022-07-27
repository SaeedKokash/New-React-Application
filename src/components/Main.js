import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component {

    render () {
        return (
            this.props.animalData.map( animal => {
                return (
                    <div className="animalsArr" key={animal._id}>

                        <HornedBeast className="indCard" 
                        title={animal.title} 
                        imgLink={animal.image_url} 
                        imgAlt= {animal.title} 
                        imgtitle= {animal.imgtitle} 
                        description={animal.description} 
                        horns= {animal.horns} 
                        displayModal={this.props.displayModal}
                        animalData = {animal}
                        />

                    </div>
                )
            })
           
        )
    }
}

export default Main
