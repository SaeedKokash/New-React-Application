import React from "react";

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favClickCounter: 0
        }
    }

    handleClick = () => {
        this.setState({favClickCounter: this.state.favClickCounter + 1})
      }


    render() {
        return (
            <div>

                <h2 className="animalTitle">{this.props.title}</h2>

                <img className="animalImg" src={this.props.imgLink} alt={this.props.imgAlt} title={this.props.imgTitle} onClick={this.handleClick}/>

                <p> {this.props.description}, Horns: {this.props.horns}, ❤{this.state.clickCounter}</p>

            </div>

        )
    }
}

export default HornedBeast