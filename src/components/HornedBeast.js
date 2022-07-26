import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favClickCounter: 0
        }
    }

    favClick = () => {
        this.setState({ favClickCounter: this.state.favClickCounter + 1 });
        this.props.displayModal(this.props.animalData);
    }


    render() {
        return (

            <Card className='cardAll' style={{ width: '18rem', height: "500px" }}>
                <Card.Img className='cardImage' variant="top" src={this.props.imgLink} alt={this.props.imgAlt} title={this.props.imgTitle} onClick={this.favClick} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Horns: {this.props.horns}</ListGroup.Item>
                    <ListGroup.Item>❤{this.state.favClickCounter}</ListGroup.Item>
                </ListGroup>
            </Card>

        )
    }
}

export default HornedBeast