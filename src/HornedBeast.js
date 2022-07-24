import React from "react";

class HornedBeast extends React.Component {
    render () {
        return (
            <div>

                <h2 className="animalTitle">{this.props.title}</h2>

                <img className="animalImg" src={this.props.imgLink} alt={this.props.imgAlt} title={this.props.imgTitle}/>
    
                <p> {this.props.description}</p>

            </div>

        )
    }
}

export default HornedBeast