import React from "react";
import styled from "styled-components";
// import { Card, CardText, CardTitle, CardBody } from "reactstrap";

const Card = styled.div`
  background-color: dodgerblue;
  width: 380px;
  height: 300px;
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0px 1px 4px black;
  text-align: center;
  margin: 15px auto;
`;

const Title = styled.div`
  font-size: 25px;
  border-bottom: 1px solid lightgrey;
  font-weight: 500;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: center;
`;

const CardImage = styled.img`
    width: 100px;
    height: 100px;
    padding: 5px;
`;


const CharacterCard = props => {
  return (
      <Card>
      <CardImage src={props.image} />
        <Title>{props.name}</Title>
        <CardContent>Status:{props.status}</CardContent>
        <CardContent>Species:{props.species}</CardContent>
        <CardContent>Type:{props.type}</CardContent>
      </Card>
  )
}

export default CharacterCard;
