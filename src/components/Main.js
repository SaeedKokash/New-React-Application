import React from "react";
import HornedBeast from "./HornedBeast";
import AnimalData from "../data.json";
import SelectedBeast from "./SelectedBeast";

class Main extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false
    //     }
    // }

    // showModal = (value) => {
    //     this.state({
    //         show: true
    //     })
    // }

    render () {
        return (
            AnimalData.map( animal => {
                return (
                    <div className="animalsArr" key={animal._id}>

                        <HornedBeast className="indCard" title={animal.title} imgLink={animal.image_url} imgAlt= {animal.title} imgtitle= {animal.imgtitle} description={animal.description} horns= {animal.horns}/>
                        <SelectedBeast />
                    </div>
                )
            })
           
        )
    }
}

export default Main
