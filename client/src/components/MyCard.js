
import React from 'react';
import '.././App.css'
import { Table, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-grid-system';
// import { Card, CardHeader, CardTitle, CardSubtitle, CardActions, CardContent } from "@react-md/card"
import Card from 'react-bootstrap/Card'
import { Text } from "@react-md/typography"
import { Link } from 'react-router-dom';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle
// } from 'reactstrap';
import pic from '../data/imges/bg4.jpg'
import { divide } from 'lodash';
function MyCard({ list }) {


    return (

        <Row xs={6} md={2} className="menuList">
            {list.map((item) => (
                //col-xs-6 col-sm-4 col-md-3
                <Col xs={6} sm={4} md={3} className="card-style ">
                    <Card Style="height:335px"  >
                        <Card.Img variant="top" src={pic} Style="height:40%" />
                        <Card.Body Style="height:60%">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Button>add to cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>





        // <div>
        //     <h1>{product.name}</h1>
        //     <p> {product.description}</p>
        // </div>



    );
}

export default MyCard;