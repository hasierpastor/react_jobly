import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';

class CompanyCard extends Component {
  render() {
    //change link to go to company page
    return (
      <div>
        <Link to="/">
          <Card>
            <CardBody>
              <CardTitle>{this.props.name}</CardTitle>
              <CardText>{this.props.description}</CardText>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}

export default CompanyCard;