import React from "react";

class Main extends React.Component {
    render () {
        return (
            <div>

                <h2 className="animalTitle">{this.props.title}</h2>

                {/* <img className="animalImg" src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt={"UniWhal"} title="UniWhal"/> */}

                <img className="animalImg" src={this.props.imgLink} alt={this.props.imgAlt} title={this.props.imgTitle}/>
    
                <p> {this.props.description}</p>

            </div>

        )
    }
}

export default Main